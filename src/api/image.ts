const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const IMAGE_API_ENABLED = import.meta.env.VITE_IMAGE_API_ENABLED !== "false";

export interface GenerateImageResponse {
    imageUrl: string;
}

export interface EditImageResponse {
    imageUrl: string;
}

const createImageFile = async (imageUrl: string) => {
    const response = await fetch(imageUrl);
    if (!response.ok) {
        throw new Error("Failed to load image for editing");
    }
    const blob = await response.blob();
    const type = blob.type || "image/png";
    const extension = type.split("/")[1] || "png";
    return new File([blob], `refine.${extension}`, { type });
};

export const imageService = {
    generateImage: async (prompt: string): Promise<GenerateImageResponse> => {
        if (!IMAGE_API_ENABLED) {
            throw new Error("Image API is disabled");
        }
        if (!OPENAI_API_KEY) {
            throw new Error("Missing OpenAI API key");
        }

        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-image-1",
                prompt,
                size: "1024x1024",
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to generate image: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        const base64Image = data?.data?.[0]?.b64_json;
        if (!base64Image) {
            throw new Error("Failed to generate image: No image data received");
        }

        return {
            imageUrl: `data:image/png;base64,${base64Image}`,
        };
    },
    editImage: async (imageUrl: string, prompt: string): Promise<EditImageResponse> => {
        if (!IMAGE_API_ENABLED) {
            throw new Error("Image API is disabled");
        }
        if (!OPENAI_API_KEY) {
            throw new Error("Missing OpenAI API key");
        }

        const imageFile = await createImageFile(imageUrl);
        const formData = new FormData();
        formData.append("model", "gpt-image-1");
        formData.append("image", imageFile);
        formData.append("prompt", prompt);
        formData.append("size", "1024x1024");

        const response = await fetch("https://api.openai.com/v1/images/edits", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to edit image: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        const base64Image = data?.data?.[0]?.b64_json;
        const urlImage = data?.data?.[0]?.url;
        if (!base64Image && !urlImage) {
            throw new Error("Failed to edit image: No image data received");
        }

        return {
            imageUrl: base64Image ? `data:image/png;base64,${base64Image}` : urlImage,
        };
    },
};

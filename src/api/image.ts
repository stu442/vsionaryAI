const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const IMAGE_API_ENABLED = import.meta.env.VITE_IMAGE_API_ENABLED !== "false";

export interface GenerateImageResponse {
    imageUrl: string;
}

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

        const imageUrl = `data:image/png;base64,${base64Image}`;

        return {
            imageUrl,
        };
    },
};

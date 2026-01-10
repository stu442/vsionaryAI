export interface GenerateImageResponse {
    imageUrl: string;
}

export const imageService = {
    generateImage: async (prompt: string): Promise<GenerateImageResponse> => {
        // API call to Gemini Nano Banana
        const response = await fetch("https://api.nano-banana.ai/v1/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: prompt,
                model: "gemini-nano-banana",
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to generate image");
        }

        return response.json();
    },
};

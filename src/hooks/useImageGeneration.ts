import { useState } from "react";
import { imageService } from "../api/image";

export const useImageGeneration = () => {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError(null);
        try {
            const data = await imageService.generateImage(prompt);
            setGeneratedImage(data.imageUrl);
            console.log("Generating image for prompt:", prompt);
        } catch (err) {
            console.error("Error generating image:", err);
            setError("AI 이미지 생성 중 오류가 발생했습니다.");

            // Fallback/Mock for demo purposes
            setTimeout(() => {
                setGeneratedImage("https://c.animaapp.com/mk80hrbdo2FHxK/img/serene-mountain-landscape-at-golden-hour-with-snow-capped-peaks-.png");
                setIsLoading(false);
            }, 1500);
            return;
        }
        setIsLoading(false);
    };

    return {
        prompt,
        setPrompt,
        isLoading,
        generatedImage,
        error,
        handleGenerate,
    };
};

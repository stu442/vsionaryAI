import { useState } from "react";
import { imageService } from "../api/image";

const DAILY_LIMIT = 10;
const STORAGE_KEY = "image-generation-usage";

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const loadUsage = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { date: getTodayKey(), count: 0 };
        const parsed = JSON.parse(raw) as { date: string; count: number };
        if (parsed.date !== getTodayKey()) {
            return { date: getTodayKey(), count: 0 };
        }
        return parsed;
    } catch {
        return { date: getTodayKey(), count: 0 };
    }
};

const saveUsage = (usage: { date: string; count: number }) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
};

export const useImageGeneration = () => {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [dailyCount, setDailyCount] = useState(() => {
        const usage = loadUsage();
        return usage.count;
    });

    const handleGenerate = async (overridePrompt?: string) => {
        const promptToUse = overridePrompt || prompt;
        if (!promptToUse.trim()) return;

        setIsLoading(true);
        setError(null);

        const usage = loadUsage();
        if (usage.count >= DAILY_LIMIT) {
            setIsLoading(false);
            setError("오늘의 이미지 생성 한도를 모두 사용했습니다.");
            return;
        }
        try {
            console.log("🚀 Calling Image Generation API with prompt:", promptToUse);
            const data = await imageService.generateImage(promptToUse);
            setGeneratedImage(data.imageUrl);

            const nextUsage = { date: usage.date, count: usage.count + 1 };
            saveUsage(nextUsage);
            setDailyCount(nextUsage.count);
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

    const handleRefine = async (refineText: string, overrideImageUrl?: string) => {
        const refineTextToUse = refineText.trim();
        if (!refineTextToUse) return;

        const imageUrlToUse = overrideImageUrl || generatedImage;
        if (!imageUrlToUse) {
            setError("기존 이미지가 없어 Refine을 진행할 수 없습니다.");
            return;
        }

        setIsLoading(true);
        setError(null);

        const usage = loadUsage();
        if (usage.count >= DAILY_LIMIT) {
            setIsLoading(false);
            setError("오늘의 이미지 생성 한도를 모두 사용했습니다.");
            return;
        }

        try {
            console.log("🧩 Calling Image Edit API with refine text:", refineTextToUse);
            const data = await imageService.editImage(imageUrlToUse, refineTextToUse);
            setGeneratedImage(data.imageUrl);

            const nextUsage = { date: usage.date, count: usage.count + 1 };
            saveUsage(nextUsage);
            setDailyCount(nextUsage.count);
        } catch (err) {
            console.error("Error refining image:", err);
            setError("AI 이미지 보정 중 오류가 발생했습니다.");

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
        dailyCount,
        dailyLimit: DAILY_LIMIT,
        handleGenerate,
        handleRefine,
    };
};

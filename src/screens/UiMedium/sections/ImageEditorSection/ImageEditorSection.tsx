import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useImageGeneration } from "../../../../hooks/useImageGeneration";
import { EditorHeader } from "./components/EditorHeader";
import { ImagePreview } from "./components/ImagePreview";
import { QuickRefinements, quickRefinementsData } from "./components/QuickRefinements";
import { GenerationDetails } from "./components/GenerationDetails";
import { EditorActions } from "./components/EditorActions";
import { EditorTip } from "./components/EditorTip";

export const ImageEditorSection = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const urlPrompt = searchParams.get("prompt");
  const { prompt, setPrompt, isLoading, generatedImage, handleGenerate } = useImageGeneration();

  useEffect(() => {
    if (urlPrompt) {
      setPrompt(urlPrompt);
    }
  }, [urlPrompt, setPrompt]);

  useEffect(() => {
    if (prompt && prompt === urlPrompt && !generatedImage && !isLoading) {
      handleGenerate();
    }
  }, [prompt, urlPrompt, generatedImage, isLoading, handleGenerate]);

  const handleQuickRefine = (refinementValue: string) => {
    let currentPrompt = prompt || "Futuristic cityscape with dramatic sky";

    // 1. 기존에 추가된 refinement 값들을 찾아서 제거 (중복 누적 방지)
    quickRefinementsData.forEach((item) => {
      if (currentPrompt.includes(item.value)) {
        // ", value" 형태와 "value" 형태 모두 고려하여 제거
        currentPrompt = currentPrompt.replace(`, ${item.value}`, "").replace(item.value, "");
      }
    });

    // 2. 쉼표(,) 정리는 나중에 합칠 때 자동으로 처리되겠지만, 혹시 모를 공백 정리
    currentPrompt = currentPrompt.trim();
    if (currentPrompt.endsWith(",")) {
      currentPrompt = currentPrompt.slice(0, -1);
    }

    // 3. 새로운 refinement 추가
    const newPrompt = `${currentPrompt}, ${refinementValue}`;

    console.log("🚀 Quick Refinement Triggered!");
    console.log("Cleaned Base Prompt:", currentPrompt);
    console.log("Refinement Added:", refinementValue);
    console.log("Final Prompt sent to API:", newPrompt);
    
    handleGenerate(newPrompt);
  };

  return (
    <section className="flex flex-col flex-1 self-stretch bg-gray-50">
      <EditorHeader title={prompt || "Cyberpunk cityscape refinement"} />

      <div className="flex-1 relative">
        <ImagePreview
          isLoading={isLoading}
          imageSrc={generatedImage || "https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant-1.png"}
          prompt={prompt || "Futuristic cityscape with dramatic sky"}
        />
        <QuickRefinements 
          onRefine={handleQuickRefine}
          isLoading={isLoading}
        />

        <div className="flex flex-col gap-6 max-w-[1024px] mt-10 ml-[31px]">
          <GenerationDetails />
          <EditorActions 
            onRegenerate={() => handleGenerate()} 
            isLoading={isLoading} 
          />
          <EditorTip />
        </div>
      </div>
    </section>
  );
};

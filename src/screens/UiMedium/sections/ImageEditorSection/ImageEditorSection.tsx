import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useImageGeneration } from "../../../../hooks/useImageGeneration";
import { EditorHeader } from "./components/EditorHeader";
import { ImagePreview } from "./components/ImagePreview";
import { QuickRefinements } from "./components/QuickRefinements";
import { GenerationDetails } from "./components/GenerationDetails";
import { EditorActions } from "./components/EditorActions";
import { EditorTip } from "./components/EditorTip";

export const ImageEditorSection = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const urlPrompt = searchParams.get("prompt");
  const { prompt, setPrompt, isLoading, generatedImage, handleGenerate, handleRefine } = useImageGeneration();
  const [selectedRefinements, setSelectedRefinements] = useState<string[]>([]);

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

  // Handle toggling refinement text
  const handleToggleRefinement = (refinementValue: string) => {
    setSelectedRefinements((prev) => {
      if (prev.includes(refinementValue)) {
        // Remove if already selected
        return prev.filter((item) => item !== refinementValue);
      } else {
        // Add if not selected
        return [...prev, refinementValue];
      }
    });
  };

  const handleVariations = () => {
    const refinementText = selectedRefinements.join(", ");
    if (!refinementText.trim()) return;
    console.log("🎨 [UiMedium] Creating Variations with:", refinementText);
    handleRefine(refinementText);
  };

  const handleSavePrompt = (newPrompt: string) => {
    setPrompt(newPrompt);
    const refinementText = selectedRefinements.join(", ");
    const finalPrompt = refinementText ? `${newPrompt}, ${refinementText}` : newPrompt;
    console.log("💾 [UiMedium] Saved new prompt and generating with refinements:", finalPrompt);
    handleGenerate(finalPrompt);
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
          onRefine={handleToggleRefinement}
          selectedRefinements={selectedRefinements}
          isLoading={isLoading}
        />

        <div className="flex flex-col gap-6 max-w-[1024px] mt-10 ml-[31px]">
          <GenerationDetails />
          <EditorActions 
            onRegenerate={() => {
              console.log("🔄 [UiMedium] Regenerating original prompt:", prompt);
              handleGenerate(prompt);
            }} 
            onVariations={handleVariations}
            prompt={prompt || ""}
            onSavePrompt={handleSavePrompt}
            isLoading={isLoading} 
          />
          <EditorTip />
        </div>
      </div>
    </section>
  );
};

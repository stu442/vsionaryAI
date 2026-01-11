import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useImageGeneration } from "../../../../hooks/useImageGeneration";
import { EditorHeader } from "./components/EditorHeader";
import { ImagePreviewArea } from "./components/ImagePreviewArea";
import { QuickRefinements } from "./components/QuickRefinements";
import { ImprovementFooter } from "./components/ImprovementFooter";

export const ImageEditorSection = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const urlPrompt = searchParams.get("prompt");
  const { prompt, setPrompt, isLoading, generatedImage, handleGenerate } = useImageGeneration();
  
  // Change state to array for toggling
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
    // Join selected refinements with comma
    const refinementText = selectedRefinements.join(", ");
    const finalPrompt = refinementText ? `${prompt}, ${refinementText}` : prompt;
    console.log("🎨 [UiHighCognitive] Creating Variations with:", finalPrompt);
    handleGenerate(finalPrompt);
  };

  return (
    <section className="flex flex-col items-start flex-1 self-stretch grow bg-gray-50">
      <EditorHeader title={prompt || "Cyberpunk cityscape refinement"} />

      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 p-6">
        <ImagePreviewArea
          isLoading={isLoading}
          imageSrc={generatedImage || "https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant.png"}
          prompt={prompt || "Futuristic cityscape with dramatic sky"}
          onRegenerate={() => {
            console.log("🔄 [UiHighCognitive] Regenerating original prompt:", prompt);
            handleGenerate(prompt);
          }} // Generate with original prompt only
          onVariations={handleVariations} // Generate with original + refinements
        />
        <QuickRefinements 
          isLoading={isLoading}
          onRefine={handleToggleRefinement}
          selectedRefinements={selectedRefinements}
        />
      </div>

      <ImprovementFooter />
    </section>
  );
};
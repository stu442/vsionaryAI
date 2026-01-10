import { useEffect } from "react";
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

  return (
    <section className="flex flex-col items-start flex-1 self-stretch grow bg-gray-50">
      <EditorHeader title={prompt || "Cyberpunk cityscape refinement"} />

      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 p-6">
        <ImagePreviewArea
          isLoading={isLoading}
          imageSrc={generatedImage || "https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant.png"}
          prompt={prompt || "Futuristic cityscape with dramatic sky"}
        />
        <QuickRefinements />
      </div>

      <ImprovementFooter />
    </section>
  );
};

import { EditIcon, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useImageGeneration } from "../../hooks/useImageGeneration";
import { ActionButtons } from "./components/ActionButtons";
import { ImageResultCard } from "./components/ImageResultCard";
import { InfoGrid } from "./components/InfoGrid";
import { LowCognitiveHeader } from "./components/LowCognitiveHeader";
import { PromptCard } from "./components/PromptCard";

const SAMPLE_PROMPT = `A serene mountain landscape at golden hour, with snow-capped
peaks reflecting warm sunset light, alpine meadows filled with
wildflowers in the foreground, crystal clear lake
with perfect mirror reflections, dramatic clouds,
photorealistic, 8k resolution, professional photography`;

export const UiLowCognitive = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const urlPrompt = searchParams.get("prompt");
  const { prompt, setPrompt, isLoading, generatedImage, handleGenerate } = useImageGeneration();

  useEffect(() => {
    if (urlPrompt) {
      setPrompt(urlPrompt);
      // We need a small delay or use the prompt directly in handleGenerate if we modified it
      // For now, let's just trigger it.
    }
  }, [urlPrompt, setPrompt]);

  useEffect(() => {
    if (prompt && prompt === urlPrompt && !generatedImage && !isLoading) {
      handleGenerate();
    }
  }, [prompt, urlPrompt, generatedImage, isLoading, handleGenerate]);

  const displayPrompt = prompt || SAMPLE_PROMPT;

  return (
    <div
      className="flex flex-col items-start bg-neutral-50 min-h-screen"
      data-model-id="28:2"
    >
      <LowCognitiveHeader />

      <main className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 p-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <PromptCard prompt={displayPrompt} />

        <div className="flex justify-end [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0">
          <Button
            variant="outline"
            className="h-[52px] px-6 bg-white border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 transition-colors rounded-xl"
          >
            <EditIcon className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>

        {isLoading ? (
          <div className="w-full h-[600px] flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-gray-200 animate-pulse">
            <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
            <p className="text-gray-500 font-medium text-lg">Generating your masterpiece...</p>
          </div>
        ) : (
          <ImageResultCard
            imageSrc={generatedImage || "https://c.animaapp.com/mk80hrbdo2FHxK/img/serene-mountain-landscape-at-golden-hour-with-snow-capped-peaks-.png"}
            alt={displayPrompt}
            dimensions="1024 × 1024"
          />
        )}

        <ActionButtons />
        <InfoGrid />
      </main>
    </div>
  );
};

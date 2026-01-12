import { EditIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
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
  const { prompt, setPrompt, isLoading, generatedImage, error, handleGenerate } = useImageGeneration();
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [draftPrompt, setDraftPrompt] = useState("");

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
  const canSavePrompt = draftPrompt.trim().length > 0;

  const handleEditClick = () => {
    setDraftPrompt(displayPrompt);
    setIsEditingPrompt(true);
  };

  const handleCancelEdit = () => {
    setIsEditingPrompt(false);
  };

  const handleSavePrompt = () => {
    const nextPrompt = draftPrompt.trim();
    setPrompt(nextPrompt);
    handleGenerate(nextPrompt);
    setIsEditingPrompt(false);
  };

  return (
    <div
      className="flex flex-col items-start bg-neutral-50 min-h-screen"
      data-model-id="28:2"
    >
      <LowCognitiveHeader />

      <main className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 p-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <PromptCard
          prompt={displayPrompt}
          isEditing={isEditingPrompt}
          draftPrompt={draftPrompt}
          onDraftChange={setDraftPrompt}
        />

        <div className="flex justify-end gap-3 [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0">
          {isEditingPrompt && (
            <Button
              variant="ghost"
              className="h-[52px] px-6 text-gray-500 hover:text-gray-700 transition-colors rounded-xl"
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
          )}
          <Button
            variant="outline"
            className="h-[52px] px-6 bg-white border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 transition-colors rounded-xl"
            onClick={isEditingPrompt ? handleSavePrompt : handleEditClick}
            disabled={isEditingPrompt && !canSavePrompt}
          >
            <EditIcon className="w-4 h-4 mr-2" />
            {isEditingPrompt ? "Save" : "Edit"}
          </Button>
        </div>

        {error && (
          <div className="w-full p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center gap-3">
            <span className="font-medium">Error:</span> {error}
          </div>
        )}

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

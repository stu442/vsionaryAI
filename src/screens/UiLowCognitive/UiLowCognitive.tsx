import { EditIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
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
  return (
    <div
      className="flex flex-col items-start bg-neutral-50 min-h-screen"
      data-model-id="28:2"
    >
      <LowCognitiveHeader />

      <main className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 p-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <PromptCard prompt={SAMPLE_PROMPT} />

        <div className="flex justify-end [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0">
          <Button
            variant="outline"
            className="h-[52px] px-6 bg-white border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 transition-colors rounded-xl"
          >
            <EditIcon className="w-4 h-4 mr-2" />
            EditIcon
          </Button>
        </div>

        <ImageResultCard
          imageSrc="https://c.animaapp.com/mk80hrbdo2FHxK/img/serene-mountain-landscape-at-golden-hour-with-snow-capped-peaks-.png"
          alt="Serene mountain landscape at golden hour with snow-capped peaks"
          dimensions="1024 × 1024"
        />

        <ActionButtons />
        <InfoGrid />
      </main>
    </div>
  );
};

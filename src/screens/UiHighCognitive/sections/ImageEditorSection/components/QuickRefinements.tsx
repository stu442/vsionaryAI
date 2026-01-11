import { Button } from "../../../../../components/ui/button";
import { Loader2 } from "lucide-react";

const quickRefinementsData = [
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-3.svg",
    label: "Adjust Lighting",
    value: "cinematic lighting, dramatic shadows, volumetric lighting, golden hour, studio quality",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-9.svg",
    label: "Change Colors",
    value: "vibrant colors, vivid palette, high saturation, color grading, artistic color scheme",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-8.svg",
    label: "Add Details",
    value: "highly detailed, intricate details, 8k resolution, photorealistic, sharp focus, masterpiece",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-12.svg",
    label: "Change Angle",
    value: "wide angle lens, dynamic angle, dutch angle, drone view, fisheye lens",
  },
];

interface QuickRefinementsProps {
    onRefine?: (refinement: string) => void;
    isLoading?: boolean;
}

export const QuickRefinements = ({ onRefine, isLoading = false }: QuickRefinementsProps): JSX.Element => {
  return (
    <aside className="flex gap-4 p-5 bg-gray-200 rounded-xl flex-col items-start min-w-[288px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
      <h3 className="font-normal text-gray-700 text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
        Quick Refinements
      </h3>

      <div className="flex flex-col items-start gap-3 w-full">
        {quickRefinementsData.map((refinement, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => onRefine?.(refinement.value)}
            disabled={isLoading}
            className="h-auto flex w-full items-center justify-start gap-2 px-4 py-2.5 bg-[#1a1a24] hover:bg-[#252530] text-gray-300 hover:text-white rounded-lg border border-solid border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-gray-300" />
            ) : (
                <img
                  className="flex-shrink-0"
                  alt={refinement.label}
                  src={refinement.icon}
                />
            )}
            <span className="font-normal text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
              {refinement.label}
            </span>
          </Button>
        ))}
      </div>
    </aside>
  );
};
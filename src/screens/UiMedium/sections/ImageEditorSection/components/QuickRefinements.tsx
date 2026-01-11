import { Loader2 } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";

export const quickRefinementsData = [
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
        <aside className="absolute top-[73px] left-[803px] right-[21px]">
            <Card className="bg-gray-200 border-0 rounded-xl">
                <CardContent className="flex flex-col gap-4 p-5">
                    <h3 className="text-sm font-normal text-gray-700 [font-family:'Inter',Helvetica]">
                        Quick Refinements
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {quickRefinementsData.map((refinement, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                onClick={() => onRefine?.(refinement.value)}
                                disabled={isLoading}
                                className="w-72 justify-start gap-2 bg-[#1a1a24] text-gray-300 border-gray-700 hover:bg-[#1a1a24] hover:text-gray-300 h-auto px-4 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <img src={refinement.icon} alt="" className="w-4 h-4" />
                                )}
                                <span className="text-sm font-normal [font-family:'Inter',Helvetica]">
                                    {refinement.label}
                                </span>
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </aside>
    );
};


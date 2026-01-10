import { Button } from "../../../../../components/ui/button";

const quickRefinementsData = [
    {
        icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-3.svg",
        label: "Adjust Lighting",
    },
    {
        icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-9.svg",
        label: "Change Colors",
    },
    {
        icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-8.svg",
        label: "Add Details",
    },
    {
        icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-12.svg",
        label: "Change Angle",
    },
];

export const QuickRefinements = (): JSX.Element => {
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
                        className="h-auto flex w-full items-center justify-start gap-2 px-4 py-2.5 bg-[#1a1a24] hover:bg-[#252530] text-gray-300 rounded-lg border border-solid border-gray-700"
                    >
                        <img
                            className="flex-shrink-0"
                            alt={refinement.label}
                            src={refinement.icon}
                        />
                        <span className="font-normal text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                            {refinement.label}
                        </span>
                    </Button>
                ))}
            </div>
        </aside>
    );
};

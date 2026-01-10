import { Card, CardContent } from "../../../components/ui/card";

const infoCards = [
    { label: "MODEL", value: "Visionary Pro v3" },
    { label: "STYLE", value: "Photorealistic" },
    { label: "GENERATED", value: "2 minutes ago" },
    { label: "SEED", value: "847293615" },
];

export const InfoGrid = (): JSX.Element => {
    return (
        <div className="grid grid-cols-4 gap-4 pt-2 [--animation-delay:1000ms] translate-y-[-1rem] animate-fade-in opacity-0">
            {infoCards.map((card, index) => (
                <Card key={index} className="border border-gray-200">
                    <CardContent className="px-5 py-4 flex flex-col gap-1">
                        <h3 className="[font-family:'Inter',Helvetica] font-medium text-gray-500 text-xs tracking-[0.30px] leading-4 uppercase">
                            {card.label}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-sm leading-5">
                            {card.value}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

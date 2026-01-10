import { Card, CardContent } from "../../../../../components/ui/card";

const generationDetailsData = [
    { label: "Seed", value: "847293847" },
    { label: "Steps", value: "50" },
    { label: "Guidance Scale", value: "7.5" },
    { label: "Sampler", value: "DPM++ 2M Karras" },
];

export const GenerationDetails = (): JSX.Element => {
    return (
        <Card className="border-slate-200 shadow-[0px_1px_2px_#0000000d] rounded-2xl">
            <CardContent className="flex flex-col gap-4 p-6">
                <h3 className="text-sm font-normal text-slate-900 [font-family:'Inter',Helvetica]">
                    Generation Details
                </h3>
                <div className="flex items-start justify-center gap-6">
                    {generationDetailsData.map((detail, index) => (
                        <div key={index} className="flex flex-col gap-[3.5px] flex-1">
                            <span className="text-xs font-normal text-slate-500 [font-family:'Inter',Helvetica]">
                                {detail.label}
                            </span>
                            <span className="text-sm font-medium text-slate-900 [font-family:'Inter',Helvetica]">
                                {detail.value}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

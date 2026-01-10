import { Card, CardContent } from "../../../components/ui/card";

interface PromptCardProps {
    prompt: string;
}

export const PromptCard = ({ prompt }: PromptCardProps): JSX.Element => {
    return (
        <Card className="border border-gray-200 [--animation-delay:200ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <CardContent className="p-6">
                <div className="flex flex-col gap-[6.88px]">
                    <h2 className="[font-family:'Inter',Helvetica] font-medium text-gray-500 text-xs tracking-[0.30px] leading-4 uppercase">
                        Prompt used for generation
                    </h2>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-[22.8px]">
                        {prompt}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

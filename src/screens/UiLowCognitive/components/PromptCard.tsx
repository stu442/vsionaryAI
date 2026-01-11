import { Card, CardContent } from "../../../components/ui/card";

interface PromptCardProps {
    prompt: string;
    isEditing?: boolean;
    draftPrompt?: string;
    onDraftChange?: (value: string) => void;
}

export const PromptCard = ({
    prompt,
    isEditing = false,
    draftPrompt,
    onDraftChange,
}: PromptCardProps): JSX.Element => {
    return (
        <Card className="border border-gray-200 [--animation-delay:200ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <CardContent className="p-6">
                <div className="flex flex-col gap-[6.88px]">
                    <h2 className="[font-family:'Inter',Helvetica] font-medium text-gray-500 text-xs tracking-[0.30px] leading-4 uppercase">
                        Prompt used for generation
                    </h2>
                    {isEditing ? (
                        <textarea
                            className="w-full min-h-[120px] resize-y rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 leading-[22.8px] focus:outline-none focus:ring-2 focus:ring-violet-200"
                            value={draftPrompt}
                            onChange={(event) => onDraftChange?.(event.target.value)}
                        />
                    ) : (
                        <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-[22.8px] whitespace-pre-wrap break-words">
                            {prompt}
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

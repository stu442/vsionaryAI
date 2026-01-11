import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";
import { Textarea } from "../../../../../components/ui/textarea";

interface ImagePreviewAreaProps {
    isLoading: boolean;
    imageSrc: string;
    prompt: string;
    onRegenerate?: () => void;
    onVariations?: () => void;
    onRefinePrompt?: (prompt: string) => void;
}

export const ImagePreviewArea = ({
    isLoading,
    imageSrc,
    prompt,
    onRegenerate,
    onVariations,
    onRefinePrompt,
}: ImagePreviewAreaProps): JSX.Element => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPrompt, setEditedPrompt] = useState(prompt);

    useEffect(() => {
        setEditedPrompt(prompt);
    }, [prompt]);

    const handleRefine = () => {
        if (onRefinePrompt) {
            onRefinePrompt(editedPrompt);
        }
        setIsEditing(false);
    };
    return (
        <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center justify-between w-full">
                <div className="inline-flex items-center gap-3">
                    <h2 className="font-normal text-gray-900 text-lg tracking-[0] leading-7 whitespace-nowrap [font-family:'Inter',Helvetica]">
                        Current Draft
                    </h2>

                    <Badge
                        variant="outline"
                        className="px-2.5 py-1 bg-[#a855f71a] text-purple-400 border-[#a855f733] rounded"
                    >
                        <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                            Version 3 • Draft
                        </span>
                    </Badge>
                </div>

                <img
                    className="flex-shrink-0"
                    alt="Actions"
                    src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-13.svg"
                />
            </div>

            <div className="bg-[#13131a] w-full overflow-hidden border-[#a855f74c] shadow-[0px_25px_50px_-12px_#00000040] flex flex-col items-start rounded-xl border-2 border-solid translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <div className="flex flex-col w-full items-start relative">
                    <div className="w-full max-h-[500px] h-[500px] relative">
                        {isLoading ? (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                                <Loader2 className="w-10 h-10 text-purple-500 animate-spin mb-4" />
                                <span className="text-gray-400 font-medium">Synthesizing image...</span>
                            </div>
                        ) : (
                            <img
                                src={imageSrc}
                                alt={prompt}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>

                    <div className="absolute w-full h-full top-0 left-0 pointer-events-none bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />

                    <div className="inline-flex items-start absolute top-4 right-4">
                        <Badge className="h-auto inline-flex items-center gap-2 pt-[5.5px] pb-[6.5px] px-3 bg-[#eab308e6] hover:bg-[#eab308e6] text-black rounded-lg backdrop-blur-[2px]">
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                    <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                        Generating...
                                    </span>
                                </>
                            ) : (
                                <>
                                    <img
                                        className="flex-shrink-0"
                                        alt="Ready"
                                        src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-6.svg"
                                    />
                                    <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                        Ready
                                    </span>
                                </>
                            )}
                        </Badge>
                    </div>

                    <div className="flex w-full p-4 absolute left-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)] flex-col items-start">
                        <div className="flex items-center w-full">
                            <div className="inline-flex flex-col items-start gap-1">
                                <div className="flex flex-col items-start w-full">
                                    <p className="font-medium text-white text-sm tracking-[0] leading-5 whitespace-normal [font-family:'Inter',Helvetica]">
                                        {prompt}
                                    </p>
                                </div>

                                <div className="flex flex-col items-start w-full">
                                    <p className="font-normal text-gray-400 text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                        1024x1024 • {isLoading ? "Processing..." : "Complete"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                {isEditing ? (
                    <div className="w-full flex flex-col gap-3 bg-white p-4 rounded-xl border border-purple-200 shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900">Refine Prompt</span>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsEditing(false)}
                                className="h-6 w-6 p-0 text-gray-400 hover:text-gray-900 hover:bg-transparent"
                            >
                                ✕
                            </Button>
                        </div>
                        <Textarea
                            value={editedPrompt}
                            onChange={(e) => setEditedPrompt(e.target.value)}
                            className="bg-gray-50 border-purple-200 text-gray-900 min-h-[80px] focus-visible:ring-purple-500/50 placeholder:text-gray-400"
                            placeholder="Describe your image in detail..."
                        />
                        <div className="flex justify-end gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setIsEditing(false)}
                                className="bg-transparent border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleRefine}
                                disabled={isLoading || !editedPrompt.trim()}
                                className="bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/20"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Refining...
                                    </>
                                ) : (
                                    <>
                                        Generate
                                        <img
                                            className="ml-2 w-4 h-4"
                                            alt="Sparkles"
                                            src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container.png"
                                        />
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap items-start gap-3 w-full">
                        <Button
                            onClick={() => setIsEditing(true)}
                            className="h-auto inline-flex items-center justify-center gap-2 px-[54px] py-[15px] rounded-lg overflow-hidden shadow-[0px_4px_6px_-4px_#a855f733,0px_10px_15px_-3px_#a855f733] bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] hover:opacity-90 transition-opacity"
                        >
                            <img
                                className="flex-shrink-0"
                                alt="Sparkles"
                                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container.png"
                            />
                            <span className="font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                Refine Further
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            onClick={onVariations}
                            disabled={isLoading}
                            className="h-auto inline-flex items-center justify-center gap-2 px-[55px] py-3.5 bg-[#1a1a24] hover:bg-[#252530] text-white hover:text-white rounded-lg border border-solid border-gray-700 disabled:opacity-50"
                        >
                            <img
                                className="flex-shrink-0"
                                alt="Variations"
                                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-18.svg"
                            />
                            <span className="font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                Try Variations
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            onClick={onRegenerate}
                            disabled={isLoading}
                            className="h-auto inline-flex items-center justify-center gap-2 px-[64px] py-3.5 bg-[#1a1a24] hover:bg-[#252530] text-white hover:text-white rounded-lg border border-solid border-gray-700 disabled:opacity-50"
                        >
                            <img
                                className="flex-shrink-0"
                                alt="Regenerate"
                                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-5.svg"
                            />
                            <span className="font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                Regenerate
                            </span>
                        </Button>
                    </div>
                )}




            </div>
        </div>
    );
};

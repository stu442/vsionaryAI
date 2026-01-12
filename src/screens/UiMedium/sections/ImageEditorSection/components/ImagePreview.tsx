import { ClockIcon, Download, Loader2, Maximize } from "lucide-react";
import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Button } from "../../../../../components/ui/button";

interface ImagePreviewProps {
    isLoading: boolean;
    imageSrc: string;
    prompt: string;
}

export const ImagePreview = ({ isLoading, imageSrc, prompt }: ImagePreviewProps): JSX.Element => {
    return (
        <div className="flex flex-col gap-4 max-w-[752px] mt-[26px] ml-[29px]">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    <h2 className="text-lg font-normal text-gray-900 [font-family:'Inter',Helvetica]">
                        Current Draft
                    </h2>
                    <Badge
                        variant="outline"
                        className="bg-[#a855f71a] text-purple-400 border-[#a855f733] h-auto px-2.5 py-1"
                    >
                        <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                            Version 3 • Draft
                        </span>
                    </Badge>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-[#9CA3AF] hover:bg-gray-100 rounded-lg">
                        <Download className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-[#9CA3AF] hover:bg-gray-100 rounded-lg">
                        <Maximize className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            <Card className="overflow-hidden border-2 border-[#a855f74c] bg-[#13131a] shadow-[0px_25px_50px_-12px_#00000040] rounded-xl">
                <CardContent className="p-0 relative">
                    <div className="relative w-full h-[500px] max-h-[500px]">
                        {isLoading ? (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                                <Loader2 className="w-10 h-10 text-purple-500 animate-spin mb-4" />
                                <span className="text-gray-400 font-medium">Brewing your image...</span>
                            </div>
                        ) : (
                            <img
                                src={imageSrc}
                                alt={prompt}
                                className="w-full h-full object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />

                        <div className="absolute top-4 right-4">
                            <Badge className="gap-2 bg-[#eab308e6] text-black hover:bg-[#eab308e6] h-auto px-3 py-1.5 backdrop-blur-[2px]">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-3 h-3 animate-spin" />
                                        <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                                            Generating...
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <ClockIcon className="w-3 h-3" />
                                        <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                                            Ready
                                        </span>
                                    </>
                                )}
                            </Badge>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-white truncate [font-family:'Inter',Helvetica]">
                                    {prompt}
                                </p>
                                <p className="text-xs font-normal text-gray-400 [font-family:'Inter',Helvetica]">
                                    1024x1024 • {isLoading ? "Processing..." : "Complete"}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

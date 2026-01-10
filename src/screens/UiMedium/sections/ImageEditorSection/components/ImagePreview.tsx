import { ClockIcon } from "lucide-react";
import { Badge } from "../../../../../components/ui/badge";
import { Card, CardContent } from "../../../../../components/ui/card";

export const ImagePreview = (): JSX.Element => {
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
                <img
                    alt="Options"
                    src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-13.svg"
                />
            </div>

            <Card className="overflow-hidden border-2 border-[#a855f74c] bg-[#13131a] shadow-[0px_25px_50px_-12px_#00000040] rounded-xl">
                <CardContent className="p-0 relative">
                    <div className="relative w-full h-[500px] max-h-[500px]">
                        <img
                            src="https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant-1.png"
                            alt="Futuristic cityscape"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />

                        <div className="absolute top-4 right-4">
                            <Badge className="gap-2 bg-[#eab308e6] text-black hover:bg-[#eab308e6] h-auto px-3 py-1.5 backdrop-blur-[2px]">
                                <ClockIcon className="w-3 h-3" />
                                <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                                    Generating 73%
                                </span>
                            </Badge>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-white [font-family:'Inter',Helvetica]">
                                    Futuristic cityscape with dramatic sky
                                </p>
                                <p className="text-xs font-normal text-gray-400 [font-family:'Inter',Helvetica]">
                                    1024x1024 • Estimated completion: 12s
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

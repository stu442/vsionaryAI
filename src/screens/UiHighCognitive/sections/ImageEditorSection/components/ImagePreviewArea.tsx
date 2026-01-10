import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";

export const ImagePreviewArea = (): JSX.Element => {
    return (
        <div className="flex flex-col items-start gap-4">
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

            <div className="bg-[#13131a] overflow-hidden border-[#a855f74c] shadow-[0px_25px_50px_-12px_#00000040] flex flex-col items-start w-full rounded-xl border-2 border-solid translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                <div className="flex flex-col w-full items-start relative">
                    <div className="w-full max-h-[500px] h-[500px] bg-[url(https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant.png)] bg-cover bg-[50%_50%]" />

                    <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />

                    <div className="inline-flex items-start absolute top-4 right-4">
                        <Badge className="h-auto inline-flex items-center gap-2 pt-[5.5px] pb-[6.5px] px-3 bg-[#eab308e6] hover:bg-[#eab308e6] text-black rounded-lg backdrop-blur-[2px]">
                            <img
                                className="flex-shrink-0"
                                alt="Loading"
                                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-6.svg"
                            />
                            <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                Generating 73%
                            </span>
                        </Badge>
                    </div>

                    <div className="flex w-full p-4 absolute left-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)] flex-col items-start">
                        <div className="flex items-center w-full">
                            <div className="inline-flex flex-col items-start gap-1">
                                <div className="flex flex-col items-start w-full">
                                    <p className="font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                        Futuristic cityscape with dramatic sky
                                    </p>
                                </div>

                                <div className="flex flex-col items-start w-full">
                                    <p className="font-normal text-gray-400 text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                        1024x1024 • Estimated completion: 12s
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-start gap-3 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <Button className="h-auto inline-flex items-center justify-center gap-2 px-[54px] py-[15px] rounded-lg overflow-hidden shadow-[0px_4px_6px_-4px_#a855f733,0px_10px_15px_-3px_#a855f733] bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] hover:opacity-90 transition-opacity">
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
                    className="h-auto inline-flex items-center justify-center gap-2 px-[55px] py-3.5 bg-[#1a1a24] hover:bg-[#252530] text-white rounded-lg border border-solid border-gray-700"
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
                    className="h-auto inline-flex items-center justify-center gap-2 px-[64px] py-3.5 bg-[#1a1a24] hover:bg-[#252530] text-white rounded-lg border border-solid border-gray-700"
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
        </div>
    );
};

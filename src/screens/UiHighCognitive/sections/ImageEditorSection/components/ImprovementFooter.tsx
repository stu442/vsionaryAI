import { CoinsIcon, ImageIcon, SettingsIcon } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Textarea } from "../../../../../components/ui/textarea";

export const ImprovementFooter = (): JSX.Element => {
    return (
        <footer className="flex flex-col items-start px-16 py-5 w-full bg-white border-t border-gray-200">
            <div className="p-1 border-[#6366f133] bg-[linear-gradient(90deg,rgba(99,102,241,0.05)_0%,rgba(168,85,247,0.05)_100%)] flex flex-col items-start w-full rounded-xl border-2 border-solid">
                <div className="flex gap-3 p-4 w-full bg-white rounded-lg flex-col items-start">
                    <div className="flex items-center gap-3 w-full">
                        <img
                            className="flex-shrink-0"
                            alt="AI"
                            src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-28.svg"
                        />
                        <label
                            htmlFor="improvement-input"
                            className="font-normal text-gray-900 text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]"
                        >
                            Describe how to improve this image
                        </label>
                    </div>

                    <Textarea
                        id="improvement-input"
                        placeholder="E.g., 'Make the sky more dramatic with purple clouds' or 'Add reflections on wet streets' or 'Increase the number of holographic billboards'..."
                        className="min-h-[100px] w-full bg-gray-50 rounded-lg border border-gray-200 resize-none font-normal text-gray-400 text-sm tracking-[0] leading-5 [font-family:'Inter',Helvetica]"
                    />

                    <div className="flex items-center justify-between w-full">
                        <div className="inline-flex items-center gap-3">
                            <Button
                                variant="ghost"
                                className="h-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                            >
                                <ImageIcon className="w-3.5 h-3.5" />
                                <span className="font-normal text-gray-600 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                    Reference
                                </span>
                            </Button>

                            <Button
                                variant="ghost"
                                className="h-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                            >
                                <SettingsIcon className="w-3.5 h-3.5" />
                                <span className="font-normal text-gray-600 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                    SettingsIcon
                                </span>
                            </Button>

                            <div className="w-px h-4 bg-gray-300" />

                            <div className="inline-flex items-center gap-1">
                                <CoinsIcon className="w-3.5 h-3.5 text-gray-500" />
                                <span className="font-normal text-gray-500 text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                    15 credits per generation
                                </span>
                            </div>
                        </div>

                        <Button className="h-auto inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-[0px_1px_2px_#0000000d]">
                            <span className="font-normal text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                                Use this result
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

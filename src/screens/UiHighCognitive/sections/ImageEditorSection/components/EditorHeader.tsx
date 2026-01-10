import { HistoryIcon, Share2Icon, DownloadIcon } from "lucide-react";
import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";

interface EditorHeaderProps {
    title: string;
}

export const EditorHeader = ({ title }: EditorHeaderProps): JSX.Element => {
    return (
        <header className="flex flex-col items-start px-6 py-4 w-full bg-white border-b border-gray-200">
            <div className="flex items-center justify-between w-full">
                <div className="inline-flex items-center gap-4">
                    <h1 className="font-normal text-gray-900 text-lg tracking-[0] leading-7 whitespace-nowrap [font-family:'Inter',Helvetica]">
                        {title}
                    </h1>

                    <Badge className="px-2.5 py-1 bg-amber-100 text-amber-700 hover:bg-amber-100 rounded-full">
                        <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                            In Progress
                        </span>
                    </Badge>
                </div>

                <div className="inline-flex items-center gap-2">
                    <Button
                        variant="ghost"
                        className="h-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                    >
                        <HistoryIcon className="w-3.5 h-3.5" />
                        <span className="font-medium text-gray-700 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                            HistoryIcon
                        </span>
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                    >
                        <Share2Icon className="w-3.5 h-3.5" />
                        <span className="font-medium text-gray-700 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                            Share
                        </span>
                    </Button>

                    <Button className="h-auto inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg">
                        <DownloadIcon className="w-3.5 h-3.5" />
                        <span className="font-medium text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                            Export
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );
};

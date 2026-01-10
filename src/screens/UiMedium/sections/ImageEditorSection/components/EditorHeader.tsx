import { HistoryIcon, Share2Icon, DownloadIcon } from "lucide-react";
import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";

interface EditorHeaderProps {
    title: string;
}

export const EditorHeader = ({ title }: EditorHeaderProps): JSX.Element => {
    return (
        <header className="flex flex-col px-6 py-4 bg-white border-b">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-normal text-gray-900 [font-family:'Inter',Helvetica]">
                        {title}
                    </h1>
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 h-auto px-2.5 py-1 rounded-full">
                        <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                            In Progress
                        </span>
                    </Badge>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="gap-2 h-auto px-4 py-2">
                        <HistoryIcon className="w-3.5 h-3.5" />
                        <span className="text-sm font-medium text-gray-700 [font-family:'Inter',Helvetica]">
                            HistoryIcon
                        </span>
                    </Button>
                    <Button variant="ghost" className="gap-2 h-auto px-4 py-2">
                        <Share2Icon className="w-3.5 h-3.5" />
                        <span className="text-sm font-medium text-gray-700 [font-family:'Inter',Helvetica]">
                            Share
                        </span>
                    </Button>
                    <Button className="gap-2 bg-indigo-500 hover:bg-indigo-600 h-auto px-4 py-2">
                        <DownloadIcon className="w-3.5 h-3.5" />
                        <span className="text-sm font-medium text-white [font-family:'Inter',Helvetica]">
                            Export
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );
};

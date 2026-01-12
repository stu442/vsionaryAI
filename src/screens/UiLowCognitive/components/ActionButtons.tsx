import { DownloadIcon, HeartIcon, Share2Icon, SparklesIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export const ActionButtons = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between pt-2 [--animation-delay:800ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    className="h-auto px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                    <HeartIcon className="w-5 h-5 mr-2" />
                    Save to favorites
                </Button>
                <Button
                    variant="ghost"
                    className="h-auto px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download
                </Button>
                <Button
                    variant="ghost"
                    className="h-auto px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                    <Share2Icon className="w-5 h-5 mr-2" />
                    Share
                </Button>
            </div>

            <Button
                className="h-auto px-6 py-3 bg-[linear-gradient(90deg,rgba(124,58,237,1)_0%,rgba(79,70,229,1)_100%)] hover:opacity-90 transition-opacity shadow-[0px_1px_2px_#0000000d]"
                onClick={() => navigate("/")}
            >
                <SparklesIcon className="w-5 h-5 mr-2" />
                Use this result
            </Button>
        </div>
    );
};

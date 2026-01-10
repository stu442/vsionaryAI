import {
    CheckCircleIcon,
    CopyIcon,
    EditIcon,
    RefreshCwIcon,
} from "lucide-react";
import { Button } from "../../../../../components/ui/button";

export const EditorActions = (): JSX.Element => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Button
                    variant="outline"
                    className="gap-2 bg-white border-slate-200 h-auto px-5 py-2.5 rounded-xl"
                >
                    <RefreshCwIcon className="w-4 h-4" />
                    <span className="text-base font-medium text-slate-700 [font-family:'Inter',Helvetica]">
                        Regenerate
                    </span>
                </Button>
                <Button
                    variant="outline"
                    className="gap-2 bg-white border-slate-200 h-auto px-5 py-2.5 rounded-xl"
                >
                    <CopyIcon className="w-4 h-4" />
                    <span className="text-base font-medium text-slate-700 [font-family:'Inter',Helvetica]">
                        Create Variations
                    </span>
                </Button>
            </div>

            <div className="flex items-center gap-3">
                <Button
                    variant="outline"
                    className="gap-2 bg-white border-2 border-violet-200 h-auto px-6 py-3 rounded-xl"
                >
                    <EditIcon className="w-4 h-4" />
                    <span className="text-base font-normal text-violet-700 [font-family:'Inter',Helvetica]">
                        EditIcon
                    </span>
                </Button>
                <Button className="gap-2 bg-[linear-gradient(90deg,rgba(124,58,237,1)_0%,rgba(79,70,229,1)_100%)] hover:opacity-90 shadow-[0px_4px_6px_-4px_#8b5cf64c,0px_10px_15px_-3px_#8b5cf64c] h-auto px-8 py-3 rounded-xl">
                    <CheckCircleIcon className="w-4 h-4" />
                    <span className="text-base font-normal text-white [font-family:'Inter',Helvetica]">
                        Use this result
                    </span>
                </Button>
            </div>
        </div>
    );
};

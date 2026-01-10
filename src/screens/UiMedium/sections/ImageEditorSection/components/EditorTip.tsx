import { InfoIcon } from "lucide-react";
import { Card, CardContent } from "../../../../../components/ui/card";

export const EditorTip = (): JSX.Element => {
    return (
        <Card className="bg-blue-50 border-blue-200 rounded-xl">
            <CardContent className="flex items-start gap-3 p-4">
                <InfoIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                    <p className="text-sm font-normal text-blue-900 [font-family:'Inter',Helvetica] leading-5">
                        <span className="font-medium">Tip:</span> You can edit the prompt
                        above to refine the result, or click "Use this result" to proceed
                        with this image. The "Edit" button allows you to make
                        <br />
                        advanced modifications using our editing tools.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

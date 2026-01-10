import { MoreHorizontalIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../components/ui/avatar";
import { Button } from "../../../../../components/ui/button";

export const SessionFooter = (): JSX.Element => {
    return (
        <footer className="flex items-center gap-3 p-4 border-t border-border">
            <Avatar className="h-9 w-9">
                <AvatarImage
                    src="https://c.animaapp.com/mk80hrbdo2FHxK/img/user-1.png"
                    alt="Alex Chen"
                />
                <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate [font-family:'Inter',Helvetica]">
                    Alex Chen
                </p>
                <p className="text-xs font-normal text-gray-500 [font-family:'Inter',Helvetica]">
                    Pro Plan
                </p>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 flex-shrink-0"
            >
                <MoreHorizontalIcon className="h-5 w-5" />
            </Button>
        </footer>
    );
};

import { SearchIcon } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";

export const SessionHeader = (): JSX.Element => {
    return (
        <header className="flex flex-col gap-4 p-5 border-b border-border">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-normal text-gray-900 [font-family:'Inter',Helvetica]">
                    ImageCraft AI
                </h1>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                    <img
                        className="w-9 h-9"
                        alt="New session"
                        src="https://c.animaapp.com/mk80hrbdo2FHxK/img/button.svg"
                    />
                </Button>
            </div>

            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <Input
                    type="search"
                    placeholder="Search sessions..."
                    className="pl-10 bg-gray-50 border-border"
                />
            </div>
        </header>
    );
};

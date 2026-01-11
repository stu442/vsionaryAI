import { PlusIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";
import { Logo } from "../../../../../components/Logo";

export const SessionHeader = (): JSX.Element => {
    return (
        <header className="flex flex-col gap-4 p-5 border-b border-border">
            <div className="flex items-center justify-between">
                <Logo />
                <Button variant="ghost" size="icon" className="h-9 w-9">
                    <PlusIcon className="h-5 w-5" />
                </Button>
            </div>

            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <Input
                    type="search"
                    placeholder="Search sessions..."
                    className="pl-10 pr-4 py-2.5 bg-gray-50 border-border text-sm [font-family:'Inter',Helvetica] placeholder:text-gray-400"
                />
            </div>
        </header>
    );
};

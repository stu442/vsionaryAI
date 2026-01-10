import { SearchIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ScrollArea } from "../../../../components/ui/scroll-area";

const todaySessions = [
  {
    id: 1,
    title: "Cyberpunk cityscape",
    iterations: 6,
    time: "2m ago",
    thumbnail:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-cyberpunk-cityscape-at-night-with-neon-lights-1.png",
    isActive: true,
  },
  {
    id: 2,
    title: "Fantasy forest scene",
    iterations: 4,
    time: "1h ago",
    thumbnail:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/fantasy-forest-with-magical-glowing-trees-1.png",
    isActive: false,
  },
];

const yesterdaySessions = [
  {
    id: 3,
    title: "Product mockup",
    iterations: 8,
    time: null,
    thumbnail:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/modern-minimalist-product-design-concept-1.png",
    isActive: false,
  },
  {
    id: 4,
    title: "Abstract artwork",
    iterations: 3,
    time: null,
    thumbnail:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/abstract-geometric-art-with-vibrant-colors-1.png",
    isActive: false,
  },
];

export const SessionListSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-72 bg-white border-r border-border">
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
            placeholder="SearchIcon sessions..."
            className="pl-10 bg-gray-50 border-border"
          />
        </div>
      </header>

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-3">
          <div className="px-2 py-0">
            <h2 className="text-xs font-normal text-gray-500 tracking-[0.60px] [font-family:'Inter',Helvetica]">
              TODAY
            </h2>
          </div>

          {todaySessions.map((session) => (
            <button
              key={session.id}
              className={`flex items-start gap-3 p-3 rounded-lg transition-colors text-left w-full ${
                session.isActive
                  ? "bg-[#6366f11a] border border-[#6366f133]"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={session.thumbnail}
                  alt={session.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate [font-family:'Inter',Helvetica]">
                  {session.title}
                </h3>
                <p className="text-xs font-normal text-gray-500 [font-family:'Inter',Helvetica]">
                  {session.iterations} iterations • {session.time}
                </p>
              </div>
            </button>
          ))}

          <div className="px-2 pt-2">
            <h2 className="text-xs font-normal text-gray-500 tracking-[0.60px] [font-family:'Inter',Helvetica]">
              YESTERDAY
            </h2>
          </div>

          {yesterdaySessions.map((session) => (
            <button
              key={session.id}
              className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-gray-50 text-left w-full"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={session.thumbnail}
                  alt={session.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate [font-family:'Inter',Helvetica]">
                  {session.title}
                </h3>
                <p className="text-xs font-normal text-gray-500 [font-family:'Inter',Helvetica]">
                  {session.iterations} iterations
                </p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>

      <footer className="flex items-center gap-3 p-4 border-t border-border">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://c.animaapp.com/mk80hrbdo2FHxK/img/user-2.png"
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
        <Button variant="ghost" size="icon" className="h-auto flex-shrink-0">
          <img
            alt="Settings"
            src="https://c.animaapp.com/mk80hrbdo2FHxK/img/button-1.svg"
          />
        </Button>
      </footer>
    </aside>
  );
};

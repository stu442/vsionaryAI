import { ScrollArea } from "../../../../../components/ui/scroll-area";
import { SessionItem } from "./SessionItem";

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

export const SessionList = (): JSX.Element => {
    return (
        <ScrollArea className="flex-1">
            <div className="flex flex-col gap-2 p-3">
                <div className="px-2 py-0">
                    <h2 className="text-xs font-normal text-gray-500 tracking-[0.60px] [font-family:'Inter',Helvetica]">
                        TODAY
                    </h2>
                </div>

                {todaySessions.map((session) => (
                    <SessionItem key={session.id} {...session} />
                ))}

                <div className="px-2 pt-2">
                    <h2 className="text-xs font-normal text-gray-500 tracking-[0.60px] [font-family:'Inter',Helvetica]">
                        YESTERDAY
                    </h2>
                </div>

                {yesterdaySessions.map((session) => (
                    <SessionItem key={session.id} {...session} />
                ))}
            </div>
        </ScrollArea>
    );
};

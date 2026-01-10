import {
  DownloadIcon,
  EditIcon,
  HeartIcon,
  Share2Icon,
  SparklesIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navigationLinks = [
  { label: "Gallery", href: "#" },
  { label: "History", href: "#" },
  { label: "Settings", href: "#" },
];

const infoCards = [
  { label: "MODEL", value: "Visionary Pro v3" },
  { label: "STYLE", value: "Photorealistic" },
  { label: "GENERATED", value: "2 minutes ago" },
  { label: "SEED", value: "847293615" },
];

export const UiLowCognitive = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start bg-neutral-50 min-h-screen"
      data-model-id="28:2"
    >
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8"
              alt="Visionary AI Logo"
              src="https://c.animaapp.com/mk80hrbdo2FHxK/img/background.svg"
            />
            <span className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-xl leading-7">
              Visionary AI
            </span>
          </div>

          <nav className="flex items-center gap-6">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-medium text-gray-600 text-sm leading-5 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Avatar className="w-9 h-9 border-2 border-gray-200">
              <AvatarImage
                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/user.png"
                alt="User avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <main className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 p-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <Card className="border border-gray-200 [--animation-delay:200ms] translate-y-[-1rem] animate-fade-in opacity-0">
          <CardContent className="p-6">
            <div className="flex flex-col gap-[6.88px]">
              <h2 className="[font-family:'Inter',Helvetica] font-medium text-gray-500 text-xs tracking-[0.30px] leading-4 uppercase">
                Prompt used for generation
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-[22.8px]">
                A serene mountain landscape at golden hour, with snow-capped
                peaks reflecting warm sunset light, alpine meadows filled with
                wildflowers in the foreground, crystal clear lake
                <br />
                with perfect mirror reflections, dramatic clouds,
                photorealistic, 8k resolution, professional photography
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0">
          <Button
            variant="outline"
            className="h-[52px] px-6 bg-white border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 transition-colors rounded-xl"
          >
            <EditIcon className="w-4 h-4 mr-2" />
            EditIcon
          </Button>
        </div>

        <Card className="border border-gray-200 shadow-[0px_1px_2px_#0000000d] [--animation-delay:600ms] translate-y-[-1rem] animate-fade-in opacity-0">
          <CardContent className="p-4">
            <div className="relative w-full h-[680px] bg-gray-50 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Serene mountain landscape at golden hour with snow-capped peaks"
                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/serene-mountain-landscape-at-golden-hour-with-snow-capped-peaks-.png"
              />
              <Badge
                variant="secondary"
                className="absolute top-4 right-4 bg-[#00000066] text-white backdrop-blur-[2px] hover:bg-[#00000066] rounded-full px-3 py-1.5"
              >
                1024 × 1024
              </Badge>
            </div>
          </CardContent>
        </Card>

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
              DownloadIcon
            </Button>
            <Button
              variant="ghost"
              className="h-auto px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Share2Icon className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>

          <Button className="h-auto px-6 py-3 bg-[linear-gradient(90deg,rgba(124,58,237,1)_0%,rgba(79,70,229,1)_100%)] hover:opacity-90 transition-opacity shadow-[0px_1px_2px_#0000000d]">
            <SparklesIcon className="w-5 h-5 mr-2" />
            Use this result
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-2 [--animation-delay:1000ms] translate-y-[-1rem] animate-fade-in opacity-0">
          {infoCards.map((card, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="px-5 py-4 flex flex-col gap-1">
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-gray-500 text-xs tracking-[0.30px] leading-4 uppercase">
                  {card.label}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-sm leading-5">
                  {card.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

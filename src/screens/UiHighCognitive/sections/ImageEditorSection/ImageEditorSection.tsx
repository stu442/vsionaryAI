import {
  CoinsIcon,
  DownloadIcon,
  HistoryIcon,
  ImageIcon,
  SettingsIcon,
  Share2Icon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";

const quickRefinements = [
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-3.svg",
    label: "Adjust Lighting",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-9.svg",
    label: "Change Colors",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-8.svg",
    label: "Add Details",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/container-12.svg",
    label: "Change Angle",
  },
];

export const ImageEditorSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start flex-1 self-stretch grow bg-gray-50">
      <header className="flex flex-col items-start px-6 py-4 w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-4">
            <h1 className="font-normal text-gray-900 text-lg tracking-[0] leading-7 whitespace-nowrap [font-family:'Inter',Helvetica]">
              Cyberpunk cityscape refinement
            </h1>

            <Badge className="px-2.5 py-1 bg-amber-100 text-amber-700 hover:bg-amber-100 rounded-full">
              <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                In Progress
              </span>
            </Badge>
          </div>

          <div className="inline-flex items-center gap-2">
            <Button
              variant="ghost"
              className="h-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg"
            >
              <HistoryIcon className="w-3.5 h-3.5" />
              <span className="font-medium text-gray-700 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                HistoryIcon
              </span>
            </Button>

            <Button
              variant="ghost"
              className="h-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg"
            >
              <Share2Icon className="w-3.5 h-3.5" />
              <span className="font-medium text-gray-700 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                Share
              </span>
            </Button>

            <Button className="h-auto inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg">
              <DownloadIcon className="w-3.5 h-3.5" />
              <span className="font-medium text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                Export
              </span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 p-6">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-3">
              <h2 className="font-normal text-gray-900 text-lg tracking-[0] leading-7 whitespace-nowrap [font-family:'Inter',Helvetica]">
                Current Draft
              </h2>

              <Badge
                variant="outline"
                className="px-2.5 py-1 bg-[#a855f71a] text-purple-400 border-[#a855f733] rounded"
              >
                <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                  Version 3 • Draft
                </span>
              </Badge>
            </div>

            <img
              className="flex-shrink-0"
              alt="Actions"
              src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-13.svg"
            />
          </div>

          <div className="bg-[#13131a] overflow-hidden border-[#a855f74c] shadow-[0px_25px_50px_-12px_#00000040] flex flex-col items-start w-full rounded-xl border-2 border-solid translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="flex flex-col w-full items-start">
              <div className="w-full max-h-[500px] h-[500px] bg-[url(https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant.png)] bg-cover bg-[50%_50%]" />

              <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />

              <div className="inline-flex items-start absolute top-4 right-4">
                <Badge className="h-auto inline-flex items-center gap-2 pt-[5.5px] pb-[6.5px] px-3 bg-[#eab308e6] hover:bg-[#eab308e6] text-black rounded-lg backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
                  <img
                    className="flex-shrink-0"
                    alt="Loading"
                    src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-6.svg"
                  />
                  <span className="font-medium text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                    Generating 73%
                  </span>
                </Badge>
              </div>

              <div className="flex w-full p-4 absolute left-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)] flex-col items-start">
                <div className="flex items-center w-full">
                  <div className="inline-flex flex-col items-start gap-1">
                    <div className="flex flex-col items-start w-full">
                      <p className="font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                        Futuristic cityscape with dramatic sky
                      </p>
                    </div>

                    <div className="flex flex-col items-start w-full">
                      <p className="font-normal text-gray-400 text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                        1024x1024 • Estimated completion: 12s
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-3 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <Button className="h-auto inline-flex items-center justify-center gap-2 px-[54px] py-[15px] rounded-lg overflow-hidden shadow-[0px_4px_6px_-4px_#a855f733,0px_10px_15px_-3px_#a855f733] bg-[linear-gradient(90deg,rgba(147,51,234,1)_0%,rgba(219,39,119,1)_100%)] hover:opacity-90 transition-opacity">
              <img
                className="flex-shrink-0"
                alt="Sparkles"
                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container.png"
              />
              <span className="font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                Refine Further
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-[55px] py-3.5 bg-[#1a1a24] hover:bg-[#252530] text-white rounded-lg border border-solid border-gray-700"
            >
              <img
                className="flex-shrink-0"
                alt="Variations"
                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-18.svg"
              />
              <span className="font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                Try Variations
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-[64px] py-3.5 bg-[#1a1a24] hover:bg-[#252530] text-white rounded-lg border border-solid border-gray-700"
            >
              <img
                className="flex-shrink-0"
                alt="Regenerate"
                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-5.svg"
              />
              <span className="font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap [font-family:'Inter',Helvetica]">
                Regenerate
              </span>
            </Button>
          </div>
        </div>

        <aside className="flex gap-4 p-5 bg-gray-200 rounded-xl flex-col items-start min-w-[288px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <h3 className="font-normal text-gray-700 text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
            Quick Refinements
          </h3>

          <div className="flex flex-col items-start gap-3 w-full">
            {quickRefinements.map((refinement, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto flex w-full items-center justify-start gap-2 px-4 py-2.5 bg-[#1a1a24] hover:bg-[#252530] text-gray-300 rounded-lg border border-solid border-gray-700"
              >
                <img
                  className="flex-shrink-0"
                  alt={refinement.label}
                  src={refinement.icon}
                />
                <span className="font-normal text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                  {refinement.label}
                </span>
              </Button>
            ))}
          </div>
        </aside>
      </div>

      <footer className="flex flex-col items-start px-16 py-5 w-full bg-white border-t border-gray-200">
        <div className="p-1 border-[#6366f133] bg-[linear-gradient(90deg,rgba(99,102,241,0.05)_0%,rgba(168,85,247,0.05)_100%)] flex flex-col items-start w-full rounded-xl border-2 border-solid">
          <div className="flex gap-3 p-4 w-full bg-white rounded-lg flex-col items-start">
            <div className="flex items-center gap-3 w-full">
              <img
                className="flex-shrink-0"
                alt="AI"
                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-28.svg"
              />
              <label
                htmlFor="improvement-input"
                className="font-normal text-gray-900 text-sm tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]"
              >
                Describe how to improve this image
              </label>
            </div>

            <Textarea
              id="improvement-input"
              placeholder="E.g., 'Make the sky more dramatic with purple clouds' or 'Add reflections on wet streets' or 'Increase the number of holographic billboards'..."
              className="min-h-[100px] w-full bg-gray-50 rounded-lg border border-gray-200 resize-none font-normal text-gray-400 text-sm tracking-[0] leading-5 [font-family:'Inter',Helvetica]"
            />

            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-3">
                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span className="font-normal text-gray-600 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                    Reference
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                >
                  <SettingsIcon className="w-3.5 h-3.5" />
                  <span className="font-normal text-gray-600 text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                    SettingsIcon
                  </span>
                </Button>

                <div className="w-px h-4 bg-gray-300" />

                <div className="inline-flex items-center gap-1">
                  <CoinsIcon className="w-3.5 h-3.5 text-gray-500" />
                  <span className="font-normal text-gray-500 text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter',Helvetica]">
                    15 credits per generation
                  </span>
                </div>
              </div>

              <Button className="h-auto inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-[0px_1px_2px_#0000000d]">
                <span className="font-normal text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                  Generate Next Version
                </span>
                <img
                  className="flex-shrink-0"
                  alt="Arrow"
                  src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-25.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

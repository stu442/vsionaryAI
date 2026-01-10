import {
  CheckCircleIcon,
  ClockIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  HistoryIcon,
  InfoIcon,
  RefreshCwIcon,
  Share2Icon,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

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

const generationDetails = [
  { label: "Seed", value: "847293847" },
  { label: "Steps", value: "50" },
  { label: "Guidance Scale", value: "7.5" },
  { label: "Sampler", value: "DPM++ 2M Karras" },
];

export const ImageEditorSection = (): JSX.Element => {
  return (
    <section className="flex flex-col flex-1 self-stretch bg-gray-50">
      <header className="flex flex-col px-6 py-4 bg-white border-b">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-normal text-gray-900 [font-family:'Inter',Helvetica]">
              Cyberpunk cityscape refinement
            </h1>
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 h-auto px-2.5 py-1 rounded-full">
              <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                In Progress
              </span>
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="gap-2 h-auto px-4 py-2">
              <HistoryIcon className="w-3.5 h-3.5" />
              <span className="text-sm font-medium text-gray-700 [font-family:'Inter',Helvetica]">
                HistoryIcon
              </span>
            </Button>
            <Button variant="ghost" className="gap-2 h-auto px-4 py-2">
              <Share2Icon className="w-3.5 h-3.5" />
              <span className="text-sm font-medium text-gray-700 [font-family:'Inter',Helvetica]">
                Share
              </span>
            </Button>
            <Button className="gap-2 bg-indigo-500 hover:bg-indigo-600 h-auto px-4 py-2">
              <DownloadIcon className="w-3.5 h-3.5" />
              <span className="text-sm font-medium text-white [font-family:'Inter',Helvetica]">
                Export
              </span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 relative">
        <div className="flex flex-col gap-4 max-w-[752px] mt-[26px] ml-[29px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-normal text-gray-900 [font-family:'Inter',Helvetica]">
                Current Draft
              </h2>
              <Badge
                variant="outline"
                className="bg-[#a855f71a] text-purple-400 border-[#a855f733] h-auto px-2.5 py-1"
              >
                <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                  Version 3 • Draft
                </span>
              </Badge>
            </div>
            <img
              alt="Options"
              src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-13.svg"
            />
          </div>

          <Card className="overflow-hidden border-2 border-[#a855f74c] bg-[#13131a] shadow-[0px_25px_50px_-12px_#00000040] rounded-xl">
            <CardContent className="p-0 relative">
              <div className="relative w-full h-[500px] max-h-[500px]">
                <img
                  src="https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant-1.png"
                  alt="Futuristic cityscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_100%)]" />

                <div className="absolute top-4 right-4">
                  <Badge className="gap-2 bg-[#eab308e6] text-black hover:bg-[#eab308e6] h-auto px-3 py-1.5 backdrop-blur-[2px]">
                    <ClockIcon className="w-3 h-3" />
                    <span className="text-xs font-medium [font-family:'Inter',Helvetica]">
                      Generating 73%
                    </span>
                  </Badge>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-white [font-family:'Inter',Helvetica]">
                      Futuristic cityscape with dramatic sky
                    </p>
                    <p className="text-xs font-normal text-gray-400 [font-family:'Inter',Helvetica]">
                      1024x1024 • Estimated completion: 12s
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="absolute top-[73px] left-[803px] right-[21px]">
          <Card className="bg-gray-200 border-0 rounded-xl">
            <CardContent className="flex flex-col gap-4 p-5">
              <h3 className="text-sm font-normal text-gray-700 [font-family:'Inter',Helvetica]">
                Quick Refinements
              </h3>
              <div className="flex flex-wrap gap-3">
                {quickRefinements.map((refinement, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-72 justify-start gap-2 bg-[#1a1a24] text-gray-300 border-gray-700 hover:bg-[#1a1a24] hover:text-gray-300 h-auto px-4 py-2.5"
                  >
                    <img src={refinement.icon} alt="" className="w-4 h-4" />
                    <span className="text-sm font-normal [font-family:'Inter',Helvetica]">
                      {refinement.label}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>

        <div className="flex flex-col gap-6 max-w-[1024px] mt-10 ml-[31px]">
          <Card className="border-slate-200 shadow-[0px_1px_2px_#0000000d] rounded-2xl">
            <CardContent className="flex flex-col gap-4 p-6">
              <h3 className="text-sm font-normal text-slate-900 [font-family:'Inter',Helvetica]">
                Generation Details
              </h3>
              <div className="flex items-start justify-center gap-6">
                {generationDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col gap-[3.5px] flex-1">
                    <span className="text-xs font-normal text-slate-500 [font-family:'Inter',Helvetica]">
                      {detail.label}
                    </span>
                    <span className="text-sm font-medium text-slate-900 [font-family:'Inter',Helvetica]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

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

          <Card className="bg-blue-50 border-blue-200 rounded-xl">
            <CardContent className="flex items-start gap-3 p-4">
              <InfoIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-normal text-blue-900 [font-family:'Inter',Helvetica] leading-5">
                  <span className="font-medium">Tip:</span> You can edit the
                  prompt above to refine the result, or click "Use this result"
                  to proceed with this image. The "Edit" button allows you to
                  make
                  <br />
                  advanced modifications using our editing tools.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

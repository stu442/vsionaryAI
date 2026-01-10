import { SparklesIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const features = [
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/background-5.svg",
    title: "Lightning Fast",
    description:
      "Generate high-quality images in seconds with our optimized AI models.",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/background-2.svg",
    title: "Creative Control",
    description:
      "Fine-tune every detail with advanced prompting and style controls.",
  },
  {
    icon: "https://c.animaapp.com/mk80hrbdo2FHxK/img/background-3.svg",
    title: "High Resolution",
    description: "Download your creations in multiple formats and resolutions.",
  },
];

export const ImageGenerationHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-4xl w-full items-start gap-16 pt-24 pb-48 px-6">
      <header className="flex flex-col items-center gap-6 w-full translate-y-[-1rem] animate-fade-in opacity-0">
        <h1 className="[font-family:'Inter',Helvetica] font-bold text-gray-900 text-5xl text-center tracking-[0] leading-[60px] whitespace-nowrap">
          Create stunning images with AI
        </h1>

        <p className="max-w-2xl [font-family:'Inter',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-[32.5px]">
          Transform your ideas into beautiful, high-quality images using
          <br />
          advanced artificial intelligence. Just describe what you want to see.
        </p>
      </header>

      <Card className="w-full bg-white rounded-2xl shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <CardContent className="px-[87px] py-8">
          <div className="max-w-2xl w-full mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Label
                htmlFor="image-description"
                className="font-medium text-gray-700 text-sm leading-5 [font-family:'Inter',Helvetica]"
              >
                Image Description
              </Label>

              <Textarea
                id="image-description"
                placeholder="Describe the image you want to generate"
                className="min-h-[160px] pt-4 pb-4 px-4 bg-white rounded-xl border-gray-300 [font-family:'Inter',Helvetica] font-normal text-gray-500 text-lg tracking-[0] leading-[29.2px] resize-none"
              />
            </div>

            <div className="flex justify-center">
              <Button className="px-12 py-4 h-auto bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors">
                <SparklesIcon className="w-5 h-5" />
                <span className="pl-3 [font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7">
                  Generate
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-start justify-center gap-8 pt-8 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-col items-center flex-1 min-w-0"
          >
            <img
              className="w-12 h-12 mb-6"
              alt={feature.title}
              src={feature.icon}
            />

            <h3 className="[font-family:'Inter',Helvetica] font-normal text-gray-900 text-lg text-center tracking-[0] leading-7 whitespace-nowrap mb-3">
              {feature.title}
            </h3>

            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-base text-center tracking-[0] leading-6">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

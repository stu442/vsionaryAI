import { FooterSection } from "./sections/FooterSection";
import { ImageGenerationHeroSection } from "./sections/ImageGenerationHeroSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const Desktop = (): JSX.Element => {
  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[1280px] flex"
      data-model-id="2:2"
    >
      <div className="flex flex-1 w-full flex-col items-center bg-gray-50">
        <NavigationBarSection />
        <ImageGenerationHeroSection />
        <FooterSection />
      </div>
    </div>
  );
};

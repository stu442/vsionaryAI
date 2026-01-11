import type { Meta, StoryObj } from "@storybook/react";
import { ImageGenerationHeroSection } from "./ImageGenerationHeroSection";

const meta: Meta<typeof ImageGenerationHeroSection> = {
  title: "Screens/Desktop/Sections/ImageGenerationHeroSection",
  component: ImageGenerationHeroSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof ImageGenerationHeroSection> = {};

import type { Meta, StoryObj } from "@storybook/react";
import { ImageResultCard } from "./ImageResultCard";

const meta: Meta<typeof ImageResultCard> = {
  title: "Screens/UiLowCognitive/ImageResultCard",
  component: ImageResultCard,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    imageSrc:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/serene-mountain-landscape-at-golden-hour-with-snow-capped-peaks-.png",
    alt: "Serene mountain landscape",
    dimensions: "1024 × 1024",
  },
};

export default meta;

export const Default: StoryObj<typeof ImageResultCard> = {};

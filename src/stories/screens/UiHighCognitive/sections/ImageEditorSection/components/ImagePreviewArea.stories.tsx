import type { Meta, StoryObj } from "@storybook/react";
import { ImagePreviewArea } from "./ImagePreviewArea";

const meta: Meta<typeof ImagePreviewArea> = {
  title: "Screens/UiHighCognitive/ImageEditorSection/ImagePreviewArea",
  component: ImagePreviewArea,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isLoading: false,
    imageSrc:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant.png",
    prompt: "Futuristic cityscape with dramatic sky",
    onRegenerate: () => {},
    onVariations: () => {},
  },
};

export default meta;

export const Default: StoryObj<typeof ImagePreviewArea> = {};

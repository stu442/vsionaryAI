import type { Meta, StoryObj } from "@storybook/react";
import { ImagePreview } from "./ImagePreview";

const meta: Meta<typeof ImagePreview> = {
  title: "Screens/UiMedium/ImageEditorSection/ImagePreview",
  component: ImagePreview,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isLoading: false,
    imageSrc:
      "https://c.animaapp.com/mk80hrbdo2FHxK/img/futuristic-city-skyline-at-sunset-with-many-flying-cars--vibrant-1.png",
    prompt: "Futuristic cityscape with dramatic sky",
  },
};

export default meta;

export const Default: StoryObj<typeof ImagePreview> = {};

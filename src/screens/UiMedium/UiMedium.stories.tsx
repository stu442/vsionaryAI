import type { Meta, StoryObj } from "@storybook/react";
import { UiMedium } from "./UiMedium";

const meta: Meta<typeof UiMedium> = {
  title: "Screens/UiMedium",
  component: UiMedium,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof UiMedium> = {};

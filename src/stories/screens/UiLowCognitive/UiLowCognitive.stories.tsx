import type { Meta, StoryObj } from "@storybook/react";
import { UiLowCognitive } from "./UiLowCognitive";

const meta: Meta<typeof UiLowCognitive> = {
  title: "Screens/UiLowCognitive",
  component: UiLowCognitive,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof UiLowCognitive> = {};

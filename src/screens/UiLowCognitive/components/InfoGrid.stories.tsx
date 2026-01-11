import type { Meta, StoryObj } from "@storybook/react";
import { InfoGrid } from "./InfoGrid";

const meta: Meta<typeof InfoGrid> = {
  title: "Screens/UiLowCognitive/InfoGrid",
  component: InfoGrid,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof InfoGrid> = {};

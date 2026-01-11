import type { Meta, StoryObj } from "@storybook/react";
import { SessionListArea } from "./SessionListArea";

const meta: Meta<typeof SessionListArea> = {
  title: "Screens/UiHighCognitive/SessionListSection/SessionListArea",
  component: SessionListArea,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof SessionListArea> = {};

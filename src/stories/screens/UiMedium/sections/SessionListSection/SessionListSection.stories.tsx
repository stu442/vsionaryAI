import type { Meta, StoryObj } from "@storybook/react";
import { SessionListSection } from "./SessionListSection";

const meta: Meta<typeof SessionListSection> = {
  title: "Screens/UiMedium/SessionListSection",
  component: SessionListSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof SessionListSection> = {};

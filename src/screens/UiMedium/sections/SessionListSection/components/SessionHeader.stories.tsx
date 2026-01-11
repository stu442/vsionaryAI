import type { Meta, StoryObj } from "@storybook/react";
import { SessionHeader } from "./SessionHeader";

const meta: Meta<typeof SessionHeader> = {
  title: "Screens/UiMedium/SessionListSection/SessionHeader",
  component: SessionHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof SessionHeader> = {};

import type { Meta, StoryObj } from "@storybook/react";
import { SessionFooter } from "./SessionFooter";

const meta: Meta<typeof SessionFooter> = {
  title: "Screens/UiMedium/SessionListSection/SessionFooter",
  component: SessionFooter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof SessionFooter> = {};

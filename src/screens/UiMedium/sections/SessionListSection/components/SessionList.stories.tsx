import type { Meta, StoryObj } from "@storybook/react";
import { SessionList } from "./SessionList";

const meta: Meta<typeof SessionList> = {
  title: "Screens/UiMedium/SessionListSection/SessionList",
  component: SessionList,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof SessionList> = {};

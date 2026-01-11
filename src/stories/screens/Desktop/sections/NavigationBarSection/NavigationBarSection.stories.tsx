import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBarSection } from "./NavigationBarSection";

const meta: Meta<typeof NavigationBarSection> = {
  title: "Screens/Desktop/Sections/NavigationBarSection",
  component: NavigationBarSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof NavigationBarSection> = {};

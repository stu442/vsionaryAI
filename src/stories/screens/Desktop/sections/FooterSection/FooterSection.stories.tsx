import type { Meta, StoryObj } from "@storybook/react";
import { FooterSection } from "./FooterSection";

const meta: Meta<typeof FooterSection> = {
  title: "Screens/Desktop/Sections/FooterSection",
  component: FooterSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof FooterSection> = {};

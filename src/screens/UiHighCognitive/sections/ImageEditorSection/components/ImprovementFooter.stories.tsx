import type { Meta, StoryObj } from "@storybook/react";
import { ImprovementFooter } from "./ImprovementFooter";

const meta: Meta<typeof ImprovementFooter> = {
  title: "Screens/UiHighCognitive/ImageEditorSection/ImprovementFooter",
  component: ImprovementFooter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof ImprovementFooter> = {};

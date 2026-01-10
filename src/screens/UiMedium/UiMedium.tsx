import { ImageEditorSection } from "./sections/ImageEditorSection";
import { SessionListSection } from "./sections/SessionListSection";

export const UiMedium = (): JSX.Element => {
  return (
    <main className="w-full flex bg-gray-50" data-model-id="5:722">
      <SessionListSection />
      <ImageEditorSection />
    </main>
  );
};

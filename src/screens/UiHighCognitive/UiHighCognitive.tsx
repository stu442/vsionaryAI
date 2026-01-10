import { ImageEditorSection } from "./sections/ImageEditorSection";
import { SessionListSection } from "./sections/SessionListSection";

export const UiHighCognitive = (): JSX.Element => {
  return (
    <div className="w-full flex bg-gray-50" data-model-id="5:379">
      <SessionListSection />
      <ImageEditorSection />
    </div>
  );
};

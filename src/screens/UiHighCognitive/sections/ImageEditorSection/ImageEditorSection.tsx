import { EditorHeader } from "./components/EditorHeader";
import { ImagePreviewArea } from "./components/ImagePreviewArea";
import { QuickRefinements } from "./components/QuickRefinements";
import { ImprovementFooter } from "./components/ImprovementFooter";

export const ImageEditorSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start flex-1 self-stretch grow bg-gray-50">
      <EditorHeader title="Cyberpunk cityscape refinement" />

      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 p-6">
        <ImagePreviewArea />
        <QuickRefinements />
      </div>

      <ImprovementFooter />
    </section>
  );
};

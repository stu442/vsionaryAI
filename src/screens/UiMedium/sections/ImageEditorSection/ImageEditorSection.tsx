import { EditorHeader } from "./components/EditorHeader";
import { ImagePreview } from "./components/ImagePreview";
import { QuickRefinements } from "./components/QuickRefinements";
import { GenerationDetails } from "./components/GenerationDetails";
import { EditorActions } from "./components/EditorActions";
import { EditorTip } from "./components/EditorTip";

export const ImageEditorSection = (): JSX.Element => {
  return (
    <section className="flex flex-col flex-1 self-stretch bg-gray-50">
      <EditorHeader title="Cyberpunk cityscape refinement" />

      <div className="flex-1 relative">
        <ImagePreview />
        <QuickRefinements />

        <div className="flex flex-col gap-6 max-w-[1024px] mt-10 ml-[31px]">
          <GenerationDetails />
          <EditorActions />
          <EditorTip />
        </div>
      </div>
    </section>
  );
};

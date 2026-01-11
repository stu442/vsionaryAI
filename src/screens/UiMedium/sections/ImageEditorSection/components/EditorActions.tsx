import {
  CheckCircleIcon,
  CopyIcon,
  EditIcon,
  RefreshCwIcon,
  Loader2,
  SaveIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";
import { Textarea } from "../../../../../components/ui/textarea";

interface EditorActionsProps {
  onRegenerate?: () => void;
  onVariations?: () => void;
  isLoading?: boolean;
  prompt?: string;
  onSavePrompt?: (newPrompt: string) => void;
}

export const EditorActions = ({
  onRegenerate,
  onVariations,
  isLoading,
  prompt = "",
  onSavePrompt
}: EditorActionsProps): JSX.Element => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [tempPrompt, setTempPrompt] = useState(prompt);

  // 프롬프트가 외부에서 바뀌면(예: URL 로딩 등) 내부 상태도 동기화
  useEffect(() => {
    setTempPrompt(prompt);
  }, [prompt]);

  const handleEditClick = () => {
    setTempPrompt(prompt);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempPrompt(prompt);
  };

  const handleSaveClick = () => {
    if (onSavePrompt) {
      onSavePrompt(tempPrompt);
    }
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Top side: Prompt Input (Visible only when editing) */}
      {isEditing && (
        <div className="flex items-center gap-2 w-full animate-fade-in">
          <Textarea
            value={tempPrompt}
            onChange={(e) => setTempPrompt(e.target.value)}
            className="flex-1 bg-white border-violet-400 min-h-[120px] h-auto py-4 px-6 rounded-xl text-lg shadow-sm focus:ring-2 focus:ring-violet-500 resize-none overflow-hidden"
            placeholder="Edit your prompt..."
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSaveClick();
              }
              if (e.key === "Escape") handleCancelClick();
            }}
            autoFocus
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "inherit";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </div>
      )}

      {/* Bottom side: Action buttons */}
      <div className="flex items-center justify-between w-full min-h-[56px]">
        {/* Left side buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={onRegenerate}
            disabled={isLoading}
            className="gap-2 bg-white border-slate-200 h-auto px-5 py-2.5 rounded-xl disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCwIcon className="w-4 h-4" />
            )}
            <span className="text-base font-medium text-slate-700 [font-family:'Inter',Helvetica]">
              Regenerate
            </span>
          </Button>
          <Button
            variant="outline"
            onClick={onVariations}
            disabled={isLoading}
            className="gap-2 bg-white border-slate-200 h-auto px-5 py-2.5 rounded-xl disabled:opacity-50"
          >
            <CopyIcon className="w-4 h-4" />
            <span className="text-base font-medium text-slate-700 [font-family:'Inter',Helvetica]">
              Create Variations
            </span>
          </Button>
        </div>

        <div className="flex items-center gap-3 flex-1 justify-end ml-4">
          <Button
            variant="outline"
            onClick={isEditing ? handleSaveClick : handleEditClick}
            disabled={isLoading}
            className="gap-2 bg-white border-2 border-violet-200 h-auto px-6 py-3 rounded-xl hover:bg-violet-50 text-violet-700 transition-colors"
          >
            {isEditing ? (
              <>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <SaveIcon className="w-4 h-4" />}
                <span className="text-base font-normal [font-family:'Inter',Helvetica]">
                  Save
                </span>
              </>
            ) : (
              <>
                <EditIcon className="w-4 h-4" />
                <span className="text-base font-normal [font-family:'Inter',Helvetica]">
                  Edit
                </span>
              </>
            )}
          </Button>
          <Button
            onClick={() => navigate("/")}
            disabled={isEditing}
            className="gap-2 bg-[linear-gradient(90deg,rgba(124,58,237,1)_0%,rgba(79,70,229,1)_100%)] hover:opacity-90 shadow-[0px_4px_6px_-4px_#8b5cf64c,0px_10px_15px_-3px_#8b5cf64c] h-auto px-8 py-3 rounded-xl disabled:opacity-50"
          >
            <CheckCircleIcon className="w-4 h-4" />
            <span className="text-base font-normal text-white [font-family:'Inter',Helvetica]">
              Use this result
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
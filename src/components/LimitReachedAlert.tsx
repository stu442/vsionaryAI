import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface LimitReachedAlertProps {
  isOpen: boolean;
  onClose: () => void;
  limit: number;
}

export const LimitReachedAlert = ({
  isOpen,
  onClose,
  limit,
}: LimitReachedAlertProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>일일 생성 한도 초과</AlertDialogTitle>
          <AlertDialogDescription>
            죄송합니다. 무료 플랜의 일일 이미지 생성 한도({limit}장)를 모두 사용하셨습니다.
            <br />
            내일 다시 이용해 주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose} className="bg-purple-600 hover:bg-purple-700">
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import styles from './styles.module.scss';

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
}

/**
 * Dialog - A11y 보장 필수 구성:
 * 1. Portal - 모달을 DOM 트리 최상위로 이동 (z-index 문제 방지)
 * 2. Overlay - 배경 딤 처리 + 외부 클릭 시 닫기
 * 3. Content - 실제 다이얼로그 컨테이너 (포커스 트랩)
 * 4. Title - 스크린 리더가 읽을 제목 (aria-labelledby 자동 연결)
 * 5. Description - 추가 설명 (aria-describedby 자동 연결)
 * 6. Close - 닫기 버튼 (ESC 키도 자동 지원)
 */
export const Dialog = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}

      <DialogPrimitive.Portal>
        {/* Overlay: data-state="open|closed" */}
        <DialogPrimitive.Overlay className={styles.overlay} />

        {/* Content: data-state="open|closed" */}
        <DialogPrimitive.Content className={styles.content}>
          {/* Title: 필수 (A11y) */}
          <DialogPrimitive.Title className={styles.title}>{title}</DialogPrimitive.Title>

          {/* Description: 권장 (A11y) */}
          {description && (
            <DialogPrimitive.Description className={styles.description}>
              {description}
            </DialogPrimitive.Description>
          )}

          {/* Body */}
          <div className={styles.body}>{children}</div>

          {/* Close Button: data-state 없음, 일반 button */}
          <DialogPrimitive.Close className={styles.close} aria-label="닫기">
            <X size={20} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};


import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    title: '다이얼로그 제목',
    description: '이것은 다이얼로그의 설명입니다.',
    trigger: <button>다이얼로그 열기</button>,
    children: <p>다이얼로그 본문 내용입니다.</p>,
  },
};

export const Playground: Story = {
  render: (args: typeof meta.args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>다이얼로그 열기</button>
        <Dialog
          title={args?.title || 'Dialog'}
          description={args?.description}
          open={open}
          onOpenChange={setOpen}
        >
          <p>이 다이얼로그는 다음 A11y 기능을 제공합니다:</p>
          <ul>
            <li>✅ 포커스 트랩 (Tab 키로 내부만 순회)</li>
            <li>✅ ESC 키로 닫기</li>
            <li>✅ 외부 클릭으로 닫기</li>
            <li>✅ 스크린 리더 지원 (aria-labelledby, aria-describedby)</li>
            <li>✅ 열림/닫힘 애니메이션 (data-state 활용)</li>
          </ul>
        </Dialog>
      </>
    );
  },
  args: {
    title: 'A11y Dialog',
    description: 'Radix UI 기반 완전한 접근성 보장',
  },
};





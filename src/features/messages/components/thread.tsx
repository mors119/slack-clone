import { Button } from '@/components/ui/button';
import { Id } from '../../../../convex/_generated/dataModel';
import { XIcon } from 'lucide-react';

interface ThreadProps {
  messageId: Id<'messages'>;
  onClose: () => void;
}

const Thread = ({ messageId, onClose }: ThreadProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center px-4 border-b h-[49px]">
        <p className="text-lg font-bold">Thread</p>
        <Button onClick={onClose} size="iconSm" variant="ghost">
          <XIcon className="size-5 stroke-[1.5]" />
        </Button>
      </div>
    </div>
  );
};

export default Thread;

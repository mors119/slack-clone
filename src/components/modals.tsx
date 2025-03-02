'use client';

import { useEffect, useState } from 'react';

import { CreateWorkspaceModal } from '@/features/workspaces/components/create-workspace-modal';
import { CreateChannelModel } from '@/features/channels/components/create-channel-model';

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateChannelModel />
      <CreateWorkspaceModal />
    </>
  );
};

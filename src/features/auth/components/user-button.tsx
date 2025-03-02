'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { userCurrentUser } from '../api/use-current-user';
import { Loader, LogOut } from 'lucide-react';
import { useAuthActions } from '@convex-dev/auth/react';

const UserButton = () => {
  const { signOut } = useAuthActions();

  const { data, isLoading } = userCurrentUser();

  if (isLoading) {
    return <Loader className="size-3 animate-spin text-muted-foreground" />;
  }

  // data = userId === undefined로 설정했기 때문에 data === null 쓰면 안됌
  if (!data) {
    return null;
  }

  const { image, name, email } = data;

  // image 없으면 이름 첫 글짜 대문자로 대시 사용
  const avatarFallback = name?.charAt(0).toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="rounded-md size-10 hover:opacity-75 transition">
          <AvatarImage className="rounded-md" alt={name} src={image} />
          <AvatarFallback className="rounded-md bg-sky-400 text-white">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right" className="w-60">
        <DropdownMenuItem
          onClick={() => {
            signOut();
          }}
          className="h-10">
          <LogOut className="size-4 mr-2" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;

'use client';

import { useSideNav } from '@/contexts/SideNavContext';
import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children
}: {
  children: ReactNode;
}) {
  const { open } = useSideNav();
  return (
    <div
      className={`flex flex-col ${open ? 'md:ml-60' : 'md:ml-20'} sm:border-r sm:border-zinc-700 min-h-screen duration-300`}
    >
      {children}
    </div>
  );
}

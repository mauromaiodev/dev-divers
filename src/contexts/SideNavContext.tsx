'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SideNavContextType {
  open: boolean;
  toggleCollapse: () => void;
}

const SideNavContext = createContext<SideNavContextType>({
  open: true,
  toggleCollapse: () => {}
});

export const useSideNav = () => {
  return useContext(SideNavContext);
};

export const SideNavProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <SideNavContext.Provider value={{ open, toggleCollapse }}>
      {children}
    </SideNavContext.Provider>
  );
};

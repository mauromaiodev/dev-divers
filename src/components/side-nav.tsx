'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import DevIcon from './icons/dev-logo';
import { useSideNav } from '@/contexts/SideNavContext';

const SideNav = () => {
  const { open, toggleCollapse } = useSideNav();

  return (
    <div
      className={`${open ? 'md:w-60' : 'md:w-16'} dark:border-neutral-700 h-screen flex-1 fixed border-r hidden md:flex duration-300`}
    >
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b h-12 w-full dark:border-neutral-700"
        >
          <DevIcon className="w-7 h-7" />
          {open && (
            <span className={`font-bold text-xl hidden md:flex`}>
              DevDivers
            </span>
          )}
        </Link>

        <div
          className={`flex flex-col space-y-2 ${open ? 'md:px-6' : 'md:px-3'}`}
        >
          {SIDENAV_ITEMS.map((item, index) => {
            return <MenuItem key={index} item={item} />;
          })}
          <button
            onClick={toggleCollapse}
            className={`flex absolute -right-2.5 -translate-y-1/2 bg-zinc-700 rounded-full hover-bg-hoverBackground hover:bg-hoverBackground 
          }`}
          >
            <div className={`${open ? 'rotate-180' : ''}`}>
              <Icon icon="lucide:chevron-right" width="24" height="24" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { open } = useSideNav();
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="flex flex-col w-full">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-hoverBackground w-full justify-between hover:bg-hoverBackground ${
              pathname.includes(item.path) ? 'bg-hoverBackground' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              {open && (
                <span className="font-semibold text-xl flex">{item.title}</span>
              )}
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, index) => {
                return (
                  <Link
                    key={index}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    {open && <span>{subItem.title}</span>}
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-hoverBackground ${
            item.path === pathname ? 'bg-hoverBackground' : ''
          }`}
        >
          {item.icon}
          {open && (
            <span className="font-semibold text-xl flex">{item.title}</span>
          )}
        </Link>
      )}
    </div>
  );
};

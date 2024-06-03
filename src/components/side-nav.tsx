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
      className={`${open ? 'md:w-60' : 'md:w-20'} fixed hidden h-screen flex-1 border-r duration-300 md:flex dark:border-neutral-700`}
    >
      <div className="flex w-full flex-col space-y-6">
        <Link
          href="/"
          className="flex h-12 w-full flex-row items-center justify-center space-x-3 border-b md:justify-start md:px-6 dark:border-neutral-700"
        >
          <DevIcon className="h-7 w-7" />
          {open && (
            <span className={`hidden text-xl font-bold md:flex`}>
              DevDivers
            </span>
          )}
        </Link>

        <div
          className={`flex flex-col space-y-2 ${open ? 'md:px-6' : 'md:px-5'}`}
        >
          {SIDENAV_ITEMS.map((item, index) => {
            return <MenuItem key={index} item={item} />;
          })}
          <button
            onClick={toggleCollapse}
            className={`hover-bg-hoverBackground } absolute -right-2.5 flex -translate-y-1/2 rounded-full bg-zinc-700 hover:bg-hoverBackground`}
          >
            <div
              className={`transform transition-transform duration-500 ease-in-out ${open ? 'rotate-180' : ''}`}
            >
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
    <div className="flex w-full flex-col">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`hover-bg-hoverBackground flex w-full flex-row items-center justify-between rounded-lg p-2 hover:bg-hoverBackground ${
              pathname.includes(item.path) ? 'bg-hoverBackground' : ''
            }`}
          >
            <div className="flex flex-row items-center space-x-4">
              {item.icon}
              {open && (
                <span className="flex text-xl font-semibold">{item.title}</span>
              )}
            </div>

            <div
              className={`transform transition-transform duration-500 ease-in-out ${subMenuOpen ? 'rotate-180' : ''} flex`}
            >
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
          className={`flex flex-row items-center space-x-4 rounded-lg p-2 hover:bg-hoverBackground ${
            item.path === pathname ? 'bg-hoverBackground' : ''
          }`}
        >
          {item.icon}
          {open && (
            <span className="flex text-xl font-semibold">{item.title}</span>
          )}
        </Link>
      )}
    </div>
  );
};

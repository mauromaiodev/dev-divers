import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />
  },
  {
    title: 'Projetos',
    path: '/projects',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/projects' },
      { title: 'Front-End', path: '/projects/front-end' },
      { title: 'Back-End', path: '/projects/back-end' }
    ]
  }
];

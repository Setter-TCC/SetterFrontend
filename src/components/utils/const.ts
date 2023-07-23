import team from '../../assets/icons/team.svg';
import cash from '../../assets/icons/cash.svg';
import settings from '../../assets/icons/settings.svg';
import logout from '../../assets/icons/logout.svg';
import presence from '../../assets/icons/presenceIcon.svg';

import { ISidebarData } from './interfaces';

export const SidebarData: ISidebarData[] = [
  {
    title: 'Atletas',
    icon: team,
    path: '/athletes',
    navColor: 'var(--color-primary-blue)',
    navFilter: 'brightness(0) saturate(100%) invert(20%) sepia(86%) saturate(2186%) hue-rotate(174deg) brightness(102%) contrast(97%)',
  },
  {
    title: 'Presença',
    icon: presence,
    path: '/presence',
    navColor: 'var(--color-primary-blue)',
    navFilter: 'brightness(0) saturate(100%) invert(20%) sepia(86%) saturate(2186%) hue-rotate(174deg) brightness(102%) contrast(97%)',
  },
  {
    title: 'Fluxo de Caixa',
    icon: cash,
    path: '/cash',
    navColor: 'var(--color-primary-blue)',
    navFilter: 'brightness(0) saturate(100%) invert(20%) sepia(86%) saturate(2186%) hue-rotate(174deg) brightness(102%) contrast(97%)',
  },
  {
    title: 'Configurações',
    icon: settings,
    path: '/settings',
    navColor: 'var(--color-primary-blue)',
    navFilter: 'brightness(0) saturate(100%) invert(20%) sepia(86%) saturate(2186%) hue-rotate(174deg) brightness(102%) contrast(97%)',
  }
];

export const logoutIcon: ISidebarData = {
  title: 'Sair',
  icon: logout,
  path: '/',
  navColor: 'var(--color-primary-red)',
  navFilter: 'brightness(0) saturate(100%) invert(28%) sepia(45%) saturate(1541%) hue-rotate(317deg) brightness(95%) contrast(99%)',
};

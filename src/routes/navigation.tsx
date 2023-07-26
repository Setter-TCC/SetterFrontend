import { ReactElement } from 'react';
import Athletes from '../pages/Athletes';
import SignIn from '../pages/SignIn';
import LandingPage from '../pages/LandingPage';
import AccountCreated from '../pages/AccountCreated';
import Cash from '../pages/Cash';
import Settings from '../pages/Settings';
import SignUp from '../pages/SignUp';
import Events from '../pages/Events';

interface NavItem {
  path: string;
  element: ReactElement;
  name: string;
  isPrivate: boolean;
}

export const navigation: NavItem[] = [
  { path: '/', element: <LandingPage />, name: 'LandingPage', isPrivate: false },
  { path: '/signin', element: <SignIn />, name: 'SignIn', isPrivate: false },
  { path: '/signup', element: <SignUp />, name: 'SignUp', isPrivate: false },
  { path: '/success', element: <AccountCreated />, name: 'AccountCreated', isPrivate: true },
  { path: '/athletes', element: <Athletes />, name: 'Athletes', isPrivate: true },
  { path: '/cash', element: <Cash />, name: 'Cash', isPrivate: true },
  { path: '/settings', element: <Settings />, name: 'Settings', isPrivate: true },
  { path: '/events', element: <Events />, name: 'Presence', isPrivate: true },
];

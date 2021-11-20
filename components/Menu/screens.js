import { CreateChallenge, Home, UserSettings } from '../../screens';

export const screens = [
  { name: 'Home', component: Home, key: 'home' },
  { name: 'Create a new challenge', component: CreateChallenge, key: 'createChallenge' },
  { name: 'Settings', component: UserSettings, key: 'userSettings' },
];

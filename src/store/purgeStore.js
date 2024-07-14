import { persistor } from './store';

export const purgePersistedStore = () => {
  persistor.purge();
};

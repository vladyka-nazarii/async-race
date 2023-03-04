import { addCreateListener } from './create-listener';
import { addGarageListeners } from './garage-listener';
import { addGenerateListener } from './generate-listener';
import { addToGarageListener, addToWinnersListener } from './menu-listeners';
import { addPaginationListener } from './pagination-listener';
import { addRaceListener } from './race-listener';
import { addResetListener } from './reset-listener';
import { addSortingListener } from './sorting-listener';
import { addUpdateListener } from './update-listener';

export const addListeners = () => {
  addToGarageListener();
  addToWinnersListener();
  addCreateListener();
  addUpdateListener();
  addRaceListener();
  addResetListener();
  addGenerateListener();
  addGarageListeners();
  addPaginationListener();
  addSortingListener();
};

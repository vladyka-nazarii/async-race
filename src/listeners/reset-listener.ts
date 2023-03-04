import { stopEngine } from '../api/engine';
import { setDefaultPosition } from '../utils/animation';
import { store } from '../utils/store';

export const addResetListener = () => {
  const resetButton = document.querySelector('#reset') as HTMLButtonElement;
  resetButton.addEventListener('click', async () => {
    const raceButton = document.querySelector('#race') as HTMLButtonElement;
    const startButtons = document.querySelectorAll('.start-engine-button') as NodeListOf<HTMLButtonElement>;
    resetButton.disabled = true;
    store.cars.forEach(async (car) => {
      await stopEngine(car.id);
      store.animationReset.push(car.id);
      setDefaultPosition(car.id);
    });
    raceButton.disabled = false;
    startButtons.forEach((button) => (button.disabled = false));
  });
};

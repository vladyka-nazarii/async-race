import { drive, startEngine } from '../api/engine';
import { saveWinner } from '../api/winners';
import { updateWinners } from '../ui/update-winners';
import { animatePosition, findDistance } from '../utils/animation';
import { showModal } from '../utils/show-modal';
import { store } from '../utils/store';

export const addRaceListener = () => {
  const raceButton = document.querySelector('#race') as HTMLButtonElement;
  raceButton.addEventListener('click', async () => {
    const resetButton = document.querySelector('#reset') as HTMLButtonElement;
    const startButtons = document.querySelectorAll('.start-engine-button') as NodeListOf<HTMLButtonElement>;
    const startTime = Date.now();
    raceButton.disabled = true;
    startButtons.forEach((button) => (button.disabled = true));
    store.animationStop = [];
    store.animationReset = [];
    store.winner = null;
    store.cars.forEach(async (car) => {
      const { velocity, distance } = await startEngine(car.id);
      animatePosition(car.id, findDistance(), distance / velocity);
      const error = await drive(car.id);
      if (error.success) {
        if (!store.winner) {
          const time = Math.round((Date.now() - startTime) / 10) / 100;
          store.winner = {
            id: car.id,
            time,
          };
          await saveWinner(car.id, time);
          await updateWinners();
          showModal(car.id, time);
        }
      } else if (!error.success) {
        store.animationStop.push(car.id);
      }
    });
    resetButton.disabled = false;
  });
};

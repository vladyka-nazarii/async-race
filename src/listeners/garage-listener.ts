import { deleteCar } from '../api/cars';
import { drive, startEngine, stopEngine } from '../api/engine';
import { deleteWinner } from '../api/winners';
import { store } from '../utils/store';
import { updateGarage } from '../ui/update-garage';
import { updateWinners } from '../ui/update-winners';
import { animatePosition, findDistance, setDefaultPosition } from '../utils/animation';

const getID = (target: HTMLElement, classname: string) => +target.id.replace(classname, '');

const removeCar = async (target: HTMLElement) => {
  const id = getID(target, 'remove-car-');
  await deleteCar(id);
  await updateGarage();
  if (store.winners.find((winner) => winner.id === id)) {
    await deleteWinner(id);
    await updateWinners();
  }
};

const selectCar = async (target: HTMLElement) => {
  const nameInput = document.querySelector('#update-name') as HTMLInputElement;
  const colorInput = document.querySelector('#update-color') as HTMLInputElement;
  const submitButton = document.querySelector('#update-submit') as HTMLButtonElement;
  const id = getID(target, 'select-car-');
  const currentCar = store.cars.find((car) => car.id === id);
  nameInput.disabled = false;
  nameInput.value = currentCar ? currentCar.name : '';
  colorInput.disabled = false;
  colorInput.value = currentCar ? currentCar.color : '';
  submitButton.disabled = false;
  submitButton.name = `${id}`;
};

const driveCar = async (target: HTMLElement) => {
  const targetButton = target as HTMLButtonElement;
  const id = getID(target, 'start-engine-car-');
  const stopButton = document.querySelector(`#stop-engine-car-${id}`) as HTMLButtonElement;
  targetButton.disabled = true;
  store.animationStop = store.animationStop.filter((animation) => animation !== id);
  store.animationReset = store.animationReset.filter((animation) => animation !== id);
  const { velocity, distance } = await startEngine(id);
  animatePosition(id, findDistance(), distance / velocity);
  stopButton.disabled = false;
  const error = await drive(id);
  if (!error.success) store.animationStop.push(id);
};

const stopCar = async (target: HTMLElement) => {
  const targetButton = target as HTMLButtonElement;
  const id = getID(target, 'stop-engine-car-');
  const startButton = document.querySelector(`#start-engine-car-${id}`) as HTMLButtonElement;
  targetButton.disabled = true;
  await stopEngine(id);
  store.animationReset.push(id);
  setDefaultPosition(id);
  startButton.disabled = false;
};

export const addGarageListeners = () => {
  const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
  garageContainer.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('remove-button')) removeCar(target);
    if (target.classList.contains('select-button')) selectCar(target);
    if (target.classList.contains('start-engine-button')) driveCar(target);
    if (target.classList.contains('stop-engine-button')) stopCar(target);
  });
};

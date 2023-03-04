import { store } from '../utils/store';
import { renderTrack } from './render-track';

export const renderGarage = (): string => {
  const { carsCount, carsPage } = store;
  return `
  <h1>Garage (${carsCount})</h1>
  <h2>Page #${carsPage}</h2>
  <ul class="garage">
    ${store.cars.map((car) => `<li class="track">${renderTrack(car.id, car.name, car.color, false)}</li>`).join('')}
  </ul>
  `;
};

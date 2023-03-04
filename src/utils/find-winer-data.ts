import { store } from './store';

export const findWinnerData = (id: number) => {
  const winnerData = {
    name: store.allCars.find((car) => car.id === id)?.name,
    color: store.allCars.find((car) => car.id === id)?.color,
  };

  return winnerData;
};

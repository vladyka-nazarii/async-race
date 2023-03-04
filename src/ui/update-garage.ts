import { getCars } from '../api/cars';
import { CountType, FIRST_PAGE, Limit, PageType } from '../enum';
import { renderGarage } from './render-garage';
import { store } from '../utils/store';
import { updatePagintion } from './update-pagination';

export const updateGarage = async () => {
  const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;

  const { cars: allCars } = await getCars();
  const { cars, carsCount } = await getCars(store.carsPage, Limit.Cars);
  store.allCars = allCars;
  store.cars = cars;
  store.carsCount = carsCount;

  if (store.carsCount) {
    if (Math.ceil(+store.carsCount / Limit.Cars) < store.carsPage && store.carsPage !== FIRST_PAGE) {
      store.carsPage -= 1;
      const { cars: newCars, carsCount: newCarsCount } = await getCars(store.carsPage, Limit.Cars);
      store.cars = newCars;
      store.carsCount = newCarsCount;
    }
  }

  garageContainer.innerHTML = renderGarage();
  updatePagintion(PageType.CarsPage, CountType.CarsCount, Limit.Cars);
};

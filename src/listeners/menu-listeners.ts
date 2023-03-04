import { store } from '../utils/store';
import { CountType, Limit, PageType, View } from '../enum';
import { updatePagintion } from '../ui/update-pagination';

export const addToGarageListener = () => {
  const toGarageButton = document.querySelector('#garage-menu') as HTMLButtonElement;
  toGarageButton.addEventListener('click', () => {
    const garageView = document.querySelector('.garage-view') as HTMLDivElement;
    const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

    garageView.classList.remove('hide');
    garageContainer.classList.remove('hide');
    winnersContainer.classList.add('hide');

    store.view = View.Garage;
    updatePagintion(PageType.CarsPage, CountType.CarsCount, Limit.Cars);
  });
};

export const addToWinnersListener = () => {
  const toWinnersButton = document.querySelector('#winners-menu') as HTMLButtonElement;
  toWinnersButton.addEventListener('click', () => {
    const garageView = document.querySelector('.garage-view') as HTMLDivElement;
    const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

    garageView.classList.add('hide');
    garageContainer.classList.add('hide');
    winnersContainer.classList.remove('hide');

    store.view = View.Winners;
    updatePagintion(PageType.WinnersPage, CountType.WinnersCount, Limit.Winners);
  });
};

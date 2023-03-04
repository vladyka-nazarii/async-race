import { CountType, Limit, PageType, View } from '../enum';
import { store } from '../utils/store';
import { updateGarage } from '../ui/update-garage';
import { updateWinners } from '../ui/update-winners';
import { updatePagintion } from '../ui/update-pagination';

export const addPaginationListener = () => {
  const pagination = document.querySelector('.pagination') as HTMLDivElement;
  pagination.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement;
    if (store.view === View.Garage) {
      store.carsPage = target.id === 'prev' ? store.carsPage - 1 : store.carsPage + 1;
      await updateGarage();
    } else {
      store.winnersPage = target.id === 'prev' ? store.winnersPage - 1 : store.winnersPage + 1;
      await updateWinners();
      updatePagintion(PageType.WinnersPage, CountType.WinnersCount, Limit.Winners);
    }
  });
};

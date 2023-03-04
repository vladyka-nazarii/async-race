import { Order, OrderButton, Sort } from '../enum';
import { updateWinners } from '../ui/update-winners';
import { store } from '../utils/store';

export const addSortingListener = () => {
  const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;
  winnersContainer.addEventListener('click', async (event) => {
    const target = event.target as HTMLTableCellElement;
    if (target.id === OrderButton.Wins || target.id === OrderButton.Time) {
      if (target.id === OrderButton.Wins) {
        store.sortBy = Sort.ByWins;
      } else {
        store.sortBy = Sort.ByTime;
      }
      store.sortOrder = store.sortOrder || store.sortOrder === Order.ByDesc ? Order.ByAsc : Order.ByDesc;
      await updateWinners();
    }
  });
};

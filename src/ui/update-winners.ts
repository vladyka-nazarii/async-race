import { getWinners } from '../api/winners';
import { Limit } from '../enum';
import { renderWinners } from '../ui/render-winners';
import { store } from '../utils/store';

export const updateWinners = async () => {
  const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

  const { winners, winnersCount } = await getWinners(store.winnersPage, Limit.Winners, store.sortBy, store.sortOrder);

  store.winners = winners;
  store.winnersCount = winnersCount;

  winnersContainer.innerHTML = renderWinners();
};

import { CountType, FIRST_PAGE, Limit, PageType } from '../enum';
import { store } from '../utils/store';

export const updatePagintion = (page: PageType, count: CountType, limit: Limit) => {
  const prevButton = document.querySelector('#prev') as HTMLButtonElement;
  const nextButton = document.querySelector('#next') as HTMLButtonElement;
  const countOfElements = store[count];
  prevButton.disabled = store[page] === FIRST_PAGE;
  if (countOfElements) {
    nextButton.disabled = !(store[page] * limit < +countOfElements);
  }
};

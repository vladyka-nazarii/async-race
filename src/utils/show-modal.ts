import { getCarIcon } from '../ui/render-track-components';
import { findWinnerData } from './find-winer-data';

export const showModal = (id: number, time: number) => {
  const modal = document.querySelector('.modal') as HTMLDivElement;
  const text = document.createElement('p');
  const car = document.createElement('div');

  text.innerText = `Winner!
  ${findWinnerData(id).name}
  ${time} sec`;
  car.innerHTML = getCarIcon(findWinnerData(id).color);
  modal.innerHTML = '';
  modal.appendChild(text);
  modal.appendChild(car);
  modal.classList.remove('hide');

  setTimeout(() => modal.classList.add('hide'), 5000);
};

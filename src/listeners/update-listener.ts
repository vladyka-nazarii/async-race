import { updateCar } from '../api/cars';
import { updateGarage } from '../ui/update-garage';
import { updateWinners } from '../ui/update-winners';

export const addUpdateListener = () => {
  const updateSubmitButton = document.querySelector('#update-submit') as HTMLButtonElement;
  updateSubmitButton.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement;
    const nameInput = document.querySelector('#update-name') as HTMLInputElement;
    const colorInput = document.querySelector('#update-color') as HTMLInputElement;
    const id = +target.name;
    event.preventDefault();
    await updateCar(id, { name: nameInput.value, color: colorInput.value });
    await updateGarage();
    await updateWinners();
    nameInput.value = '';
    nameInput.disabled = true;
    colorInput.value = '#ffffff';
    colorInput.disabled = true;
    target.disabled = true;
  });
};

import { createCar } from '../api/cars';
import { updateGarage } from '../ui/update-garage';

export const addCreateListener = () => {
  const createSubmitButton = document.querySelector('#create-submit') as HTMLButtonElement;
  createSubmitButton.addEventListener('click', async (event) => {
    const nameInput = document.querySelector('#create-name') as HTMLInputElement;
    const colorInput = document.querySelector('#create-color') as HTMLInputElement;
    event.preventDefault();
    await createCar({ name: nameInput.value, color: colorInput.value });
    await updateGarage();
    nameInput.value = '';
    colorInput.value = '#ffffff';
  });
};

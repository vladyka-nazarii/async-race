import { generateNewCars } from '../utils/generate-cars';
import { updateGarage } from '../ui/update-garage';

export const addGenerateListener = () => {
  const generateButton = document.querySelector('#generate') as HTMLButtonElement;
  generateButton.addEventListener('click', async () => {
    generateNewCars();
    await updateGarage();
  });
};

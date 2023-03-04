import { createCar } from '../api/cars';
import { INewCar } from '../interface';

const MAX_COLOR_NUMBER = 255;
const CARS_TO_GENERATE = 100;

const generateColor = (): string => {
  const getRandomColor = () => Math.round(Math.random() * MAX_COLOR_NUMBER).toString(16);
  return `#${getRandomColor()}${getRandomColor()}${getRandomColor()}`;
};

const generateName = (brand: string[], model: string[]): string => {
  return (
    brand[Math.round(Math.random() * (brand.length - 1))] + ' ' + model[Math.round(Math.random() * (model.length - 1))]
  );
};

const cartBrands = [
  'Acura',
  'Alfa Romeo',
  'Aston Martin',
  'Audi',
  'Bentley',
  'BMW',
  'Bugatti',
  'Buick',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Dodge',
  'Ferrari',
  'Fiat',
  'Ford',
  'Genesis',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'Kia',
  'Land Rover',
  'Lamborghini',
  'Lexus',
  'Lincoln',
  'Maserati',
  'Mazda',
  'Mercedes-Benz',
  'Nissan',
  'Porsche',
  'Rolls-Royce',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
];

const carModels = [
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'Q5',
  'Q7',
  'Q8',
  'Model 3',
  'Model X',
  'Model Y',
  'Model S',
  'X1',
  'X2',
  'X3',
  'X4',
  'X5',
  'X6',
  'X7',
  'M3',
  'M5',
  'M8',
  'Mustang',
  'F-150',
  'Fiesta',
  'Focus',
  'Mondeo',
  'Escape',
  'Edge',
  'Explorer',
  '911',
  'Panamera',
  'Macan',
  'Cayen',
];

const generateCars = (): INewCar[] => {
  return new Array(CARS_TO_GENERATE).fill(null).map(() => ({
    name: generateName(cartBrands, carModels),
    color: generateColor(),
  }));
};

export const generateNewCars = () => {
  generateCars().forEach(async (car) => createCar(car));
};

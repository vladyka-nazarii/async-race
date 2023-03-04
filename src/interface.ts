import { Order, Sort, View } from './enum';

export interface INewCar {
  name: string;
  color: string;
}

export interface ICar extends INewCar {
  id: number;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IDrive {
  success: boolean;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IResponseCar {
  cars: ICar[];
  carsCount: string | null;
}

export interface IResponseWinner {
  winners: IWinner[];
  winnersCount: string | null;
}

export interface IStore {
  allCars: ICar[];
  carsPage: number;
  cars: ICar[];
  carsCount: string | null;
  winnersPage: number;
  winners: IWinner[];
  winnersCount: string | null;
  view: View;
  sortBy: Sort | null;
  sortOrder: Order | null;
  selectedID: number | null;
  animationStop: number[];
  animationReset: number[];
  winner: { id: number; time: number } | null;
}

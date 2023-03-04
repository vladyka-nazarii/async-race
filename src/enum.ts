export enum Path {
  Garage = 'http://localhost:3000/garage',
  Engine = 'http://localhost:3000/engine',
  Winners = 'http://localhost:3000/winners',
}

export enum OrderButton {
  Wins = 'wins',
  Time = 'time',
}

export enum Order {
  ByAsc = 'ASC',
  ByDesc = 'DESC',
}

export enum Sort {
  ByWins = 'wins',
  ByTime = 'time',
}

export enum View {
  Garage = 'garage',
  Winners = 'winners',
}

export enum Limit {
  Cars = 7,
  Winners = 10,
}

export enum PageType {
  CarsPage = 'carsPage',
  WinnersPage = 'winnersPage',
}

export enum CountType {
  CarsCount = 'carsCount',
  WinnersCount = 'winnersCount',
}

export enum Method {
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export const FIRST_PAGE = 1;

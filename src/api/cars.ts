import { Method, Path } from '../enum';
import { ICar, INewCar, IResponseCar } from '../interface';
import { fetchRequest } from '../utils/fetch';

export const getCars = async (page?: number, limit?: number): Promise<IResponseCar> => {
  let response: Response;
  if (page && limit) {
    response = await fetch(`${Path.Garage}?_page=${page}&_limit=${limit}`);
  } else {
    response = await fetch(Path.Garage);
  }

  return {
    cars: await response.json(),
    carsCount: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number): Promise<ICar> => (await fetch(`${Path.Garage}/${id}`)).json();

export const createCar = async (body: INewCar) => {
  fetchRequest(Path.Garage, Method.Post, body);
};

export const deleteCar = async (id: number) => {
  (await fetch(`${Path.Garage}/${id}`, { method: Method.Delete })).json();
};

export const updateCar = async (id: number, body: INewCar) => {
  fetchRequest(`${Path.Garage}/${id}`, Method.Put, body);
};

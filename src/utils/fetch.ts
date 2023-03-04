import { INewCar, IWinner } from '../interface';

export const fetchRequest = async (path: string, method: 'POST' | 'PUT', body: INewCar | IWinner) => {
  (
    await fetch(path, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

import { Method, Path } from '../enum';
import { IDrive, IEngine } from '../interface';

export const startEngine = async (id: number): Promise<IEngine> =>
  (await fetch(`${Path.Engine}?id=${id}&status=started`, { method: Method.Patch })).json();

export const stopEngine = async (id: number) => {
  (await fetch(`${Path.Engine}?id=${id}&status=stopped`, { method: Method.Patch })).json();
};

export const drive = async (id: number): Promise<IDrive> => {
  const res = await fetch(`${Path.Engine}?id=${id}&status=drive`, { method: Method.Patch });
  return !res.ok ? { success: false } : { ...(await res.json()) };
};

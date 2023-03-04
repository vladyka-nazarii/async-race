import { store } from './store';

export const findDistance = () => {
  const road = document.querySelector('.road') as HTMLDivElement;
  const launch = document.querySelector('.launch') as HTMLDivElement;

  return road.clientWidth - launch.clientWidth;
};

export const setDefaultPosition = (id: number) => {
  const car = document.querySelector(`#car-${id}`) as HTMLDivElement;
  const frontWheel = document.querySelector(`#front-wheel-${id}`) as SVGElement;
  const rearWheel = document.querySelector(`#rear-wheel-${id}`) as SVGElement;
  car.style.transition = frontWheel.style.transform = rearWheel.style.transform = '0s';
  car.style.transform = 'translateX(0px)';
  frontWheel.style.transform = rearWheel.style.transform = 'rotate(0deg)';
};

export const animatePosition = (id: number, offset: number, duration: number) => {
  const car = document.querySelector(`#car-${id}`) as HTMLDivElement;
  const frontWheel = document.querySelector(`#front-wheel-${id}`) as SVGElement;
  const rearWheel = document.querySelector(`#rear-wheel-${id}`) as SVGElement;

  car.style.transition = frontWheel.style.transition = rearWheel.style.transition = 'ease-out 0.3s';

  let currentX = 0;
  let currentR = 0;
  const framesCount = (duration / 1000) * 60;
  const dX = offset / framesCount;
  const rX = ((offset / 77.5) * 360) / framesCount;

  const tick = () => {
    currentX += dX;
    currentR += rX;
    car.style.transform = `translateX(${currentX}px)`;
    frontWheel.style.transform = rearWheel.style.transform = `rotate(${currentR}deg)`;
    if (currentX < offset) {
      const animationId = requestAnimationFrame(tick);
      if (store.animationStop.includes(id)) cancelAnimationFrame(animationId);
      if (store.animationReset.includes(id)) {
        cancelAnimationFrame(animationId);
        setDefaultPosition(id);
      }
    }
  };
  tick();
};

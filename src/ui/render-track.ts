import { getCarControls, getCarImage, getGarageControls } from './render-track-components';

export const renderTrack = (id: number, name: string, color: string, isEngineStarted: boolean): string => `
  <div class="garage-controls">
    ${getGarageControls(id, name)}
  </div>
  <div class="road">
    <div class="launch">
      <div class="car-controls">
        ${getCarControls(id, isEngineStarted)}
      </div>
      <div class="car" id="car-${id}">
        ${getCarImage(id, color)}
      </div>
    </div>
    <img class="flag" src="./flag.png" alt="finish">
  </div>
  `;

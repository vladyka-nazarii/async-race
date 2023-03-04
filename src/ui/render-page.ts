import { renderGarage } from './render-garage';
import { renderGarageView } from './render-garage-view';
import { renderHeader } from './render-header';
import { renderPagination } from './render-pagination';
import { renderWinners } from './render-winners';

export const renderPage = () => {
  document.body.innerHTML = `
    ${renderHeader()}
    ${renderGarageView()}
    <div class="garage-container">
      ${renderGarage()}
    </div>
    <div class="winners-container hide">
      ${renderWinners()}
    </div>
    ${renderPagination()}
  `;
};

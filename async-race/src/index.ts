import { renderPage } from './ui/render-page';
import { addListeners } from './listeners/all-listeners';
import { CountType, Limit, PageType } from './interface';
import { updatePagintion } from './utils/update-pagination';

import './styles.scss';

renderPage();
updatePagintion(PageType.CarsPage, CountType.CarsCount, Limit.Cars);
addListeners();

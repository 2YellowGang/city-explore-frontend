import { createBrowserRouter } from 'react-router-dom';

import { Home } from './views/Home/Home';
import { NotFound } from './views/NotFound/NotFound';
import { Place } from './views/Place/Place';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/place/:place/:locales', element: <Place /> },
]);

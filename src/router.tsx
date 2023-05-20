import { createBrowserRouter } from 'react-router-dom';

import { Home } from './views/Home';
import { Guiders } from './views/Guiders';
import { NotFound } from './views/NotFound';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/guides', element: <Guiders />, errorElement: <NotFound /> },
]);

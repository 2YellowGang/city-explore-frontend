import { createBrowserRouter } from 'react-router-dom';

import { Home } from './views/Home';
import { NotFound } from './views/NotFound';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
]);

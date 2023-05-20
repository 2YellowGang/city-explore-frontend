import { createBrowserRouter } from 'react-router-dom';

import { Home } from './views/Home/Home';
import { Guiders } from './views/Guiders';
import { NotFound } from './views/NotFound/NotFound';
import { Place } from './views/Place/Place';
import { Register } from './views/Register/Register';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/place/:place/:locales', element: <Place /> },
  { path: '/guiders', element: <Guiders />, errorElement: <NotFound /> },
  { path: '/register', element: <Register />, errorElement: <NotFound /> },
]);

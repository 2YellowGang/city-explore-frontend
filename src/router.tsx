import { createBrowserRouter } from 'react-router-dom';

import { Home } from './views/Home/Home';
import { NotFound } from './views/NotFound/NotFound';
import { Place } from './views/Place/Place';
import { Register } from './views/Register/Register';
import { GuiderDetails } from './views/GuiderDetails/GuiderDetails';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/place/:place/:locales', element: <Place /> },
  { path: '/register', element: <Register />, errorElement: <NotFound /> },
  { path: '/guiders', element: <Guiders /> },
  { path: '/guider/:id', element: <GuiderDetails /> },
]);

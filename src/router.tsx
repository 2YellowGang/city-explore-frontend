import { createBrowserRouter } from 'react-router-dom';

import { Home } from './views/Home/Home';
import { NotFound } from './views/NotFound/NotFound';
import { Place } from './views/Place/Place';
import { Guiders } from './views/Guiders/Guiders';
import { Register } from './views/Register/Register';
import { GuiderDetails } from './views/GuiderDetails/GuiderDetails';
import { PlaceDetails } from './views/PlaceDetails/PlaceDetails';

export const router = createBrowserRouter(
  [
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/register', element: <Register /> },
    { path: '/place/:place/:locales', element: <Place /> },
    { path: '/guiders/:place/:object', element: <Guiders /> },
    { path: '/guider/:id', element: <GuiderDetails /> },
    { path: '/place-details', element: <PlaceDetails /> },
  ],
  {
    basename: import.meta.env.PROD ? '/city-explore-frontend/' : '/',
  },
);

import { FC, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop: FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

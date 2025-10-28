import { Navigate } from 'react-router-dom';
import { AppRoute } from '../const';
import { ReactNode } from 'react';

type PrivateRouteProps = {
  redirectTo: AppRoute;
  children: ReactNode;
};

function PrivateRoute({redirectTo, children}: PrivateRouteProps): JSX.Element {
  const hasAccess = true;

  return hasAccess
    ? children as JSX.Element
    : <Navigate to={redirectTo}/>;
}

export default PrivateRoute;

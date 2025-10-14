import {Navigate} from 'react-router-dom';
import {AppRoute} from '../const';

type PrivateRouteProps = {
  redirectTo: AppRoute;
  children: JSX.Element;
};

function PrivateRoute({redirectTo, children}: PrivateRouteProps): JSX.Element {
  const hasAccess = false;

  return hasAccess
    ? children
    : <Navigate to={redirectTo} />;
}

export default PrivateRoute;

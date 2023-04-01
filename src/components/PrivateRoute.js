import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector, isRefreshingSelector } from 'redux/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(isLoggedInSelector);
    const isRefreshing = useSelector(isRefreshingSelector);
 
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

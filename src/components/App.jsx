import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { NotFound } from 'pages/NotFound';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInSelector, isRefreshingSelector } from 'redux/selectors';
import { getUserInfo} from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const isRefreshing = useSelector(isRefreshingSelector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

 /*  useEffect(()=>{
    if(isLoggedIn) {
      navigate("/contacts", { replace: true });
      return;
    };
  },[isLoggedIn, navigate]); */
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            path='contacts' 
              element={
                <PrivateRoute redirectTo="/" component={<Contacts />} />
              }/>
          <Route 
            path='login' 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }/>
          <Route 
            path='register' 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />
            }/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { NotFound } from 'pages/NotFound';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/selectors';

export const App = () => {

  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelector);
  //navigate("/contacts", { replace: true });

  useEffect(()=>{
    if(isLoggedIn) {
      navigate("/contacts", { replace: true });
      return;
    };
    //navigate("/login", { replace: true });
  },[isLoggedIn, navigate]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='contacts' element={<Contacts />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

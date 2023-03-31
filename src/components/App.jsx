import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { NotFound } from 'pages/NotFound';



export const App = () => {
  
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

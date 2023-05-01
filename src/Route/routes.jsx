import React from 'react';
import { Navigate, createBrowserRouter, } from "react-router-dom";
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home/Home';
import Catogory from '../Pages/Home/catogory/Catogory';
import Newslayout from '../LayOut/Newslayout';
import News from '../Pages/News/News';
import Loginlayout from '../LayOut/Loginlayout';
import Login from '../Pages/Login/Login/Login';
import Regester from '../Pages/Login/Login/Regester';
import Privetroute from './Privetroute';
import Term from '../Pages/Shared/Term/Term';

const routes = createBrowserRouter([

  {
    path: "/",
    element: <Loginlayout></Loginlayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: 'regester',
        element: <Regester></Regester>
      },
      {
        path: 'terms',
        element: <Term></Term>
      }

    ]

  }
  ,

  {
    path: "category",
    element: <Main></Main>,

    children: [
     
      {
        path: ':id',
        element: <Catogory></Catogory>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ],
  },
  {
    path: '/news',
    element: <Newslayout></Newslayout>,
    children: [
      {
        path: ":id",
        element: <Privetroute><News></News></Privetroute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  },

]);

export default routes;
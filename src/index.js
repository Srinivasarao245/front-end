import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Students from './features/Students';
import AddStudents from './features/AddStudents';
import StudentDetails from './features/StudentDetails';
// import AddStudents from './features/AddStudents';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Students/>,
      },
      {
        path:'/addstud',
        element:<AddStudents/>
      },
      {
        path:`/studetails/:id`,
        element:<StudentDetails/>
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

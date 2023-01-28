import App from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getFirebaseConfig } from "./firebase-config";
import { Error, LeaderBoard, LandingPage, UserSpace, GameBoard } from './components/ImportCaller';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
const config = getFirebaseConfig()
// This line might be helpful later on
// const app = initializeApp() doesn't work without firebase before
firebase.initializeApp(config);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/leader_board',
        element: <LeaderBoard />
      },
      {
        path: '/game',
        element: <GameBoard />
      },
      {
        path: '/user_space',
        element: <UserSpace />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

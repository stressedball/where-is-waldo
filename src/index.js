import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import { Error, LeaderBoard, LandingPage, UserSpace, GameBoard } from './components/ImportCaller';
import characters from './components/characters.json'
const config = getFirebaseConfig()
const firebaseApp = initializeApp(config);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <LandingPage characters={characters}/>
      },
      {
        path: '/leader_board',
        element: <LeaderBoard />
      },
      {
        path: '/game',
        element: <GameBoard characters={characters}/>
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

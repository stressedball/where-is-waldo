import App from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error, LeaderBoard, LandingPage, UserSpace, GameBoard } from './components/ImportCaller';
import {fetchData} from './components/fetchAndSet';
let picture = {}
let characters = []
// this scares me.
fetchData().then((data) => {
  picture = data.picture
  characters = data.characters
})
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
export {picture, characters}
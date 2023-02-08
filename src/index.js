import App from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error, LeaderBoard, LandingPage, UserSpace, GameBoard } from './components/ImportCaller';
import { fetchData } from './components/fetchAndSet';
let picture = {}
let characters = []

// this scares me.
fetchData().then((data) => {

  picture = data.picture
  characters = data.characters

}).then(() => {

  const router = createBrowserRouter([
  
    {
      path: '/where-is-waldo',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: '/where-is-waldo/',
          element: <LandingPage
            characters={characters}
          />
        },
        {
          path: '/where-is-waldo/leader_board',
          element: <LeaderBoard
          />
        },
        {
          path: '/where-is-waldo/game/:chars',
          element: <GameBoard
            characters={characters}
            picture={picture}
          />
        },
        {
          path: '/where-is-waldo/user_space',
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
})

export { picture, characters }
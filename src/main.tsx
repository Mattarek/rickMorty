import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Details } from './components/Details/Details.tsx';
import { characterLoader } from './utils/api/characterLoader.ts';

const router = createBrowserRouter([
    {
        path: 'details/:id',
        element: <Details />,
        loader: ({ params }) => {
            return fetch(
                `https://rickandmortyapi.com/api/character/${params.id}`,
            );
        },
    },
    {
        path: '',
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);

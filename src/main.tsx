import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Details } from './components/Details/Details.tsx';

import './index.css';

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
    },
    {
        path: 'details/:id',
        element: <Details />,
        loader: ({ params }) => {
            return fetch(
                `https://rickandmortyapi.com/api/character/${params.id}`,
            );
        },
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';
import { Details } from './components/Details/Details.tsx';

import './index.css';

const router = createBrowserRouter([
    {
        path: '',
        element: (
            <Navigate
                to='page/1'
                replace
            />
        ),
    },
    {
        path: 'page/:pageNumber',
        element: <App />,
        loader: ({ params: { pageNumber } }) => {
            return fetch(
                `https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
            );
        },
    },
    {
        path: 'page/:pageNumber/character/:id',
        element: <Details />,
        loader: ({ params: { id } }) => {
            return fetch(`https://rickandmortyapi.com/api/character/${id}`);
        },
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);

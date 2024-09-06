import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Produtos from './Produtos.jsx'
import Api from './Api.jsx'
import Mapa from './Mapa.jsx'
import Grafico from './Grafico.jsx'
import React from 'react'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Produtos />,
  },
  {
    path: "/Api",
    element: <Api />,
  },
  {
    path: "/Mapa",
    element: <Mapa />,
  },
  {
    path: "/Grafico",
    element: <Grafico />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

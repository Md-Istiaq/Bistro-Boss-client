import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import {DataProvider} from "./context/DataContext.tsx"
import router from "./router";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <DataProvider>
         <RouterProvider router={router} />
     </DataProvider>
  </React.StrictMode>,
)

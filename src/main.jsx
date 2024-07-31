import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import Signin from './pages/Signin'

import Census from './pages/Census'
import CensusItem from './pages/CensusItem'
import Household from './pages/Household'
import HouseholdNew from './pages/HouseholdNew'
import Receipts from './pages/Receipts'
import ReceiptItem from './pages/ReceiptItem'
import Cedula from './pages/Cedula'
import Residents from './pages/Residents'
import ResidentItem from './pages/ResidentItem'
import { Toaster } from 'react-hot-toast'
import Business from './pages/Business'
import BusinessItem from './pages/BusinessItem'
import Indigent from './pages/Indigent'
import BlockLog from './pages/BlockLogs'
import CedulaItem from './pages/CedulaItem'
import Temp from './pages/Temp'
import Forms from './pages/Forms'
import Borrow from './pages/Borrow'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error/>,
    children:[
      {
        path: 'census',
        element: <Census />,
      },
      {
        path: 'census/:id',
        element: <CensusItem />,
      },
      {
        path: 'receipts',
        element: <Receipts />
      },
      {
        path: 'receipts/:id',
        element: <ReceiptItem />
      },
      {
        path: 'cedula',
        element: <Cedula />
      },
      {
        path: 'cedula/:id',
        element: <CedulaItem /> //TODO
      },
      {
        path:'residents',
        element: <Residents />
      },
      {
        path: 'residents/:id',
        element: <ResidentItem />
      },
      {
        path: 'business',
        element: <Business />
      },
      {
        path: 'business/:id',
        element: <BusinessItem />
      },
      {
        path: 'indigent',
        element: <Indigent />
      },
      {
        path: 'blocklist',
        element: <BlockLog/>
      },
      {
        path: 'temp',
        element: <Temp/>
      },
      {
        path: 'forms',
        element: <Forms />
      },
      {
        path: 'borrow',
        element: <Borrow />
      }
    ]
  },
  {
    path: '/census/:id/:householdId',
    element: <Household />
  },
  {
    path: '/census/:id/household/new',
    element: <HouseholdNew />
  },

  {
    path: '/signin',
    element: <Signin />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster 
      position='top-center'
      reverseOrder={false}
    />
  </React.StrictMode>,
)

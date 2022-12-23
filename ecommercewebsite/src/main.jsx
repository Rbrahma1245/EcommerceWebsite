import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { AppProvider } from './screens/Context/ProductContext'
import { FilterContextProvider } from './screens/Context/FilterContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppProvider >
    <FilterContextProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter >

    </FilterContextProvider>
  </AppProvider>

)

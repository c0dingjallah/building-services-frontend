import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { AdminContextProvider } from './context/AdminContext'
import { OrdersContextProvider } from './context/OrderContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthContextProvider>
     <AdminContextProvider>
      <OrdersContextProvider>
    <App />
    </OrdersContextProvider>
    </AdminContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


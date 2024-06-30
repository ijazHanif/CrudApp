import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import Todo from './Todo/CRUD';
import CRUD from './CRUD/CrudApp'
import PasswordGen from './password/PasswordGen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        {/* <PasswordGen/> */}
        {/* <App /> */}
        {/* <CRUD/> */}
         <Todo/>
      </Provider>
  </React.StrictMode>
);
reportWebVitals();

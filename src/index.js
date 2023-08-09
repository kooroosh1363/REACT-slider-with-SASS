import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const imageProduct = [
  require('./assets/images/1.jpeg'),
  require('./assets/images/2.jpg'),
  require('./assets/images/3.jpg'),
  require('./assets/images/4.jpg'),
  require('./assets/images/5.jpeg'),
  require('./assets/images/6.jpg')
]

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

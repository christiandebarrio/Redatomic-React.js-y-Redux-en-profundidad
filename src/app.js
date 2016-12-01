import React from 'react';
import ReactDOM from 'react-dom';
import Saludo from './components/Saludo';
import Counter from './components/Counter';
import Cronometro from './components/CronoStartStop';
import Buscador from './components/buscador';
import Ecommerce from './components/ecommerce';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
window.store = store;

ReactDOM.render(<Provider store={ store }><Ecommerce /></Provider>,
  document.getElementById('app'));
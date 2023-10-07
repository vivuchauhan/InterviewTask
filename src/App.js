// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ProductList from './ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;

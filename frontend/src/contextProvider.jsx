// src/context/ContextProvider.js

import React, { createContext } from 'react';
import Store from './store/store';

// Створюємо екземпляр Store
const store = new Store();

// Створюємо контекст
export const Context = createContext({
  store,
});

// Контекст Провайдер, який оточує ваш додаток
const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{ store }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskDataProvider from './contexts/TaskDataContextProvedr.js'
import UIProvider from './contexts/uiContextProvider.js'  
import { Provider } from 'react-redux'
import store from './utils/store.js'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TaskDataProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </TaskDataProvider>
    </Provider>
  </StrictMode>,
);
  

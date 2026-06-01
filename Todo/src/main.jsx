import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskDataProvider from './contexts/TaskDataContextProvedr.js'
import UIProvider from './contexts/uiContextProvider.js'  
createRoot(document.getElementById('root')).render(
 
    <TaskDataProvider>
    <UIProvider>
      <App />
    </UIProvider>
  </TaskDataProvider>)
  

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './router.jsx'
import './styles.css'
import './looks.css'
import { initialLook, setLookAttributes } from './lib/looks.js'

// set before the first paint so the chosen look does not flash in
setLookAttributes(initialLook())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

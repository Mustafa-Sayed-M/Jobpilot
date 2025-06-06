import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
import { BrowserRouter } from 'react-router-dom'

// Clerk
import { ClerkProvider } from '@clerk/clerk-react'

// Swiper styles
import 'swiper/css';

// App Providers
import AppProviders from './Contexts/AppProviders.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
        <AppProviders>
          <App />
        </AppProviders>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)

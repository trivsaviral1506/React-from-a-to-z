import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    //chaho to iske andar function bnalo jo same return krega jo app return kr rha tha ,par same object jaise vo parse krta hai react vaisa kroge to dikkat hai kyuki vo apna khud ka syntax aur properties ke name me todta hai
    <App />
  </StrictMode>,
)

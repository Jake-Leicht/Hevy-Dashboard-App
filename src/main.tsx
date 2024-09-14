import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChartExample from './components/ChartExample.tsx'
import ParseExample from './components/ParseExample.tsx';
import "./styles/index.scss";

// Notes:
// * (Charts Library) https://recharts.org/en-US/examples/SimpleScatterChart

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParseExample/>
    <ChartExample/>
  </StrictMode>,
)

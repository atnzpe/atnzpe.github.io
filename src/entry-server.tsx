import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// Usado só no build: gera o HTML pronto para buscadores, IAs e quem navega sem JavaScript.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export * as dados from './data'

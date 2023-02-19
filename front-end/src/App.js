import React, { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './app/components/errorBoundary/ErrorBoundary'

//Nota: Implementado un lazy laoding, ideal para reducir el tamaño de los bundles de producción y reducir tiempos de carga.
const Metrics = React.lazy(() => import('./app/components/metrics/Metrics'));

function App() {
  // Nota: Usando el wrap con el método componentDidCatch podemos mostrar un placeholder en 
  // caso de fallo y evitar la tipica pantalla blanca o bloqueo que ocurre cuando falla react
  return (
    <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <Metrics />
          </ErrorBoundary>
        </Suspense>
    </div>
  );
}

export default App;

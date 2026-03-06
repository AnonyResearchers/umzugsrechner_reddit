import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
        Hallo
      </h1>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

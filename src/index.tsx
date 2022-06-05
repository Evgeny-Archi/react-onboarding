import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootContaier = document.getElementById('root');
const root = createRoot(rootContaier!);
root.render(<App />);

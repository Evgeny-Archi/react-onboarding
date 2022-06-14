import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const rootContaier = document.getElementById('root');
console.log(rootContaier);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootContaier!);
root.render(<App />);

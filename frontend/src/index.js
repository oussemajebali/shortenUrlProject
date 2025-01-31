import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';
import './App.css';

// Create a root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
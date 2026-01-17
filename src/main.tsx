import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Error boundary for production
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; text-align: center;">
      <div>
        <h1>Something went wrong</h1>
        <p>Please refresh the page or contact support if the problem persists.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    </div>
  `;
}
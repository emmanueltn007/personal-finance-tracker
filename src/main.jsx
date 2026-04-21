import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { IncomeProvider } from "./hooks/IncomeContext.jsx";
import { ExpenseProvider } from "./hooks/ExpenseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IncomeProvider>
        <ExpenseProvider>
          <App />
        </ExpenseProvider>
      </IncomeProvider>
    </BrowserRouter>
  </StrictMode>,
);
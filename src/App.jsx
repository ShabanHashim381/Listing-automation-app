import React from "react";
import AppRoutes from "./Routes/Index";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeToaster } from "./components/UI/ThemeToaster";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ThemeToaster />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

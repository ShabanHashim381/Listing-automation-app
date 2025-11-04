import React from "react";
import AppRoutes from "./Routes/Index";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToaster } from "./components/UI/ThemeToaster";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          {/* <ThemeProvider> */}
          <ThemeToaster />
          <AppRoutes />
          {/* </ThemeProvider> */}
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

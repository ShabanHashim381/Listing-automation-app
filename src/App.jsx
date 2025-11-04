import React from "react";
import AppRoutes from "./Routes/Index";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { ThemeToaster } from "./Components/UI/ThemeToaster";

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

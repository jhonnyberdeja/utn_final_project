import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { useReducer, useState } from 'react';
import { AuthorizationContext } from './context/authorization';
import AuthMiddleware from './middlewares/Auth';
import { ThemeContext } from './context/theme';
import { StoreContext } from './context/store';
import { globalReducer } from './reducers/global';


export default function App() {

  const [globalState, setGlobalState] = useReducer(globalReducer, {
    isLoggedIn: false,
    isDarkMode: true
  })

  const { isDarkMode } = globalState;

  const value = {
    globalState,
    setGlobalState
  }
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light', // 'dark' or 'light'
    },
  });

  return (
    <StoreContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <AuthMiddleware>
                  <Dashboard />
                </AuthMiddleware>
              } />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </StoreContext.Provider >
  );
}
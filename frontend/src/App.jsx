import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();
  const location = useLocation();

  console.log({ onlineUsers });
  console.log({ authUser });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Show loader while checking auth
  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  // Hide Navbar on landing page (/) and auth pages (/login, /signup)
  const shouldShowNavbar =
    location.pathname !== "/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/signup";

  return (
    <div data-theme={theme}>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        {/* Landing Page at root - shows to non-authenticated users */}
        <Route
          path="/"
          element={authUser ? <Navigate to="/chat" /> : <Landing />}
        />

        {/* Auth Routes - redirect to chat if already authenticated */}
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/chat" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/chat" />}
        />

        {/* Protected Routes - Chat/Home */}
        <Route
          path="/chat"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={authUser ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
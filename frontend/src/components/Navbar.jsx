import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed w-full top-0 z-40 flex justify-center pt-4">
      <nav className="bg-base-100/80 backdrop-blur-xl border border-base-300/50 rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center gap-6">
          {/* Logo/Home */}
          <Link
            to="/"
            className="flex items-center justify-center hover:scale-110 transition-transform"
            title="Home"
          >
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-base-300/50"></div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-2">
            <Link
              to="/settings"
              className="p-2 rounded-lg hover:bg-base-200 transition-all hover:scale-110"
              title="Settings"
            >
              <Settings className="w-5 h-5 text-base-content/70 hover:text-base-content" />
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="p-2 rounded-lg hover:bg-base-200 transition-all hover:scale-110"
                  title="Profile"
                >
                  <User className="w-5 h-5 text-base-content/70 hover:text-base-content" />
                </Link>

                <button
                  onClick={logout}
                  className="p-2 rounded-lg hover:bg-error/10 transition-all hover:scale-110 group"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5 text-base-content/70 group-hover:text-error" />
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
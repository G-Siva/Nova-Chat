import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, Users, Zap, Shield } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 bg-base-100">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Graphic Design */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-8 max-w-md">
          {/* Illustration Container */}
          <div className="relative">
            {/* Main device mockup */}
            <div className="relative mx-auto w-80">
              {/* Phone mockup */}
              <div className="bg-base-100 rounded-[2.5rem] shadow-2xl border-8 border-base-300 overflow-hidden">
                {/* Screen */}
                <div className="bg-gradient-to-b from-base-200 to-base-100 p-6 h-[500px] flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-xs font-semibold text-base-content/60">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-base-content/60 rounded-full"></div>
                      <div className="w-1 h-3 bg-base-content/60 rounded-full"></div>
                      <div className="w-1 h-3 bg-base-content/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-base-content/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base-content">Messages</h3>
                      <p className="text-xs text-base-content/60">5 new messages</p>
                    </div>
                  </div>

                  {/* Message list */}
                  <div className="space-y-3 flex-1">
                    {/* Message 1 */}
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer animate-slide-in-right">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500"></div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-base-100"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold text-sm text-base-content">Emma Wilson</p>
                          <span className="text-xs text-base-content/50">2m</span>
                        </div>
                        <p className="text-xs text-base-content/60 truncate">Hey! Are you ready for the meeting?</p>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-primary text-primary-content text-xs flex items-center justify-center font-bold">
                        2
                      </div>
                    </div>

                    {/* Message 2 */}
                    <div className="flex items-center gap-3 p-3 bg-base-200/50 rounded-xl hover:bg-base-200 transition-colors cursor-pointer animate-slide-in-right animation-delay-200">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-base-100"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold text-sm text-base-content">Team Updates</p>
                          <span className="text-xs text-base-content/50">15m</span>
                        </div>
                        <p className="text-xs text-base-content/60 truncate">New feature deployed successfully! 🚀</p>
                      </div>
                    </div>

                    {/* Message 3 */}
                    <div className="flex items-center gap-3 p-3 bg-base-200/50 rounded-xl hover:bg-base-200 transition-colors cursor-pointer animate-slide-in-right animation-delay-400">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold text-sm text-base-content">Alex Chen</p>
                          <span className="text-xs text-base-content/50">1h</span>
                        </div>
                        <p className="text-xs text-base-content/60 truncate">Thanks for your help yesterday!</p>
                      </div>
                    </div>

                    {/* Message 4 */}
                    <div className="flex items-center gap-3 p-3 bg-base-200/50 rounded-xl hover:bg-base-200 transition-colors cursor-pointer animate-slide-in-right animation-delay-600">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold text-sm text-base-content">Design Team</p>
                          <span className="text-xs text-base-content/50">3h</span>
                        </div>
                        <p className="text-xs text-base-content/60 truncate">Review the new mockups when you can</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="flex justify-around pt-4 border-t border-base-content/10 mt-4">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <Users className="w-5 h-5 text-base-content/40" />
                    <Zap className="w-5 h-5 text-base-content/40" />
                    <Shield className="w-5 h-5 text-base-content/40" />
                  </div>
                </div>
              </div>

              {/* Floating notification badge */}
              <div className="absolute -top-4 -right-4 animate-bounce-slow">
                <div className="bg-primary text-primary-content rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-base-content">Welcome back!</h2>
            <p className="text-base-content/70 leading-relaxed">
              Sign in to continue your conversations and catch up with your messages.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-xs text-base-content/60">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-xs text-base-content/60">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-xs text-base-content/60">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Login;
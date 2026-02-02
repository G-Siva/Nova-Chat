import { MessageSquare, Sparkles, Users, Zap } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full h-full flex flex-1 flex-col items-center justify-center p-6 sm:p-12 md:p-16 bg-base-100/50 relative overflow-hidden">
      {/* Animated background orbs - reduced size & positioning on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-[30%] right-[5%] w-48 h-48 sm:w-64 sm:h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[40%] sm:left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md sm:max-w-lg text-center space-y-6 sm:space-y-8 relative z-10">
        {/* Animated Icon Display */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-40 sm:opacity-50 group-hover:opacity-70 transition-opacity animate-pulse"></div>

            {/* Main icon container */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
              <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-primary drop-shadow-lg" />

              {/* Floating sparkle decorations - smaller on mobile */}
              <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 animate-bounce-slow">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              </div>

              <div className="absolute -bottom-1 -left-1 sm:-bottom-1 sm:-left-1 animate-bounce-slow animation-delay-1000">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-secondary to-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient leading-tight">
            Welcome to Nova Chat!
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 leading-relaxed px-2 sm:px-0">
            Select a conversation to start chatting
          </p>
        </div>

        {/* Feature highlights - responsive grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-10">
          <div className="group cursor-default">
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 active:scale-98">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-base-content/80">Instant</p>
              <p className="text-[10px] sm:text-xs text-base-content/50 mt-0.5 sm:mt-1">Real-time</p>
            </div>
          </div>

          <div className="group cursor-default">
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 active:scale-98">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-base-content/80">Connect</p>
              <p className="text-[10px] sm:text-xs text-base-content/50 mt-0.5 sm:mt-1">Anyone</p>
            </div>
          </div>

          <div className="group cursor-default">
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 active:scale-98">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-base-content/80">Secure</p>
              <p className="text-[10px] sm:text-xs text-base-content/50 mt-0.5 sm:mt-1">Private</p>
            </div>
          </div>
        </div>

        {/* Subtle hint text - more visible on mobile */}
        <div className="pt-6 sm:pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-base-200/50 backdrop-blur-sm rounded-full border border-base-300/50 text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base text-base-content/70 font-medium">
              Tap a contact to begin
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(60px, 40px) scale(1.05); }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(4deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Reduce motion on mobile if user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-float,
          .animate-bounce-slow,
          .animate-gradient,
          .animate-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NoChatSelected;
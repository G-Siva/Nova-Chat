import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Lock,
  Globe,
  Rocket,
  MessageSquare,
  Users,
  Moon,
  ArrowRight,
} from "lucide-react";

const Landing = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background gradient orbs for subtle visual depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10">
        {/* HERO SECTION: Engaging introduction to capture user attention */}
        <section ref={heroRef} className="container mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT - Content: Compelling headline and value proposition */}
            <div className="space-y-8 fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-gray-300">Now in public beta</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Conversations that feel{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  instant
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Experience a cutting-edge real-time chat platform engineered for
                unparalleled speed, robust privacy protection, and seamless
                collaboration in modern teams. Our intuitive interface ensures
                effortless usability while delivering powerful features under
                the hood, including advanced encryption, cross-device
                synchronization, and customizable workspaces designed to boost
                productivity.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/signup"
                  className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>

                <Link
                  to="/login"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT - Visual Element: Interactive chat mockup to demonstrate core functionality */}
            <div className="fade-in animation-delay-500 relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Chat interface mockup with realistic elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Window controls for authentic app feel */}
                  <div className="flex items-center gap-2 p-4 border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 text-center text-sm text-gray-400">
                      #general
                    </div>
                  </div>

                  {/* Chat messages showcasing real-time interaction */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3 animate-slide-up">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex-shrink-0"></div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">Sarah Chen</div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-2 text-sm">
                          Just deployed the new feature! Exciting times ahead.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 animate-slide-up animation-delay-300">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex-shrink-0"></div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">Alex Kumar</div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-2 text-sm">
                          Amazing work! The performance metrics look
                          outstanding.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 animate-slide-up animation-delay-700">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0"></div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">Maya Torres</div>
                        <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-2 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          typing...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating connection indicator for status awareness */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-300">Connected</span>
                  </div>
                </div>

                {/* Decorative elements for enhanced visual appeal */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION: Key metrics to build trust and highlight advantages */}
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  Icon: Zap,
                  label: "Real-time",
                  desc: "Experience instant message delivery with zero noticeable delay, ensuring fluid and responsive conversations.",
                },
                {
                  Icon: Lock,
                  label: "Secure",
                  desc: "Benefit from end-to-end encryption that safeguards your data privacy across all communications and devices.",
                },
                {
                  Icon: Globe,
                  label: "Global",
                  desc: "Connect seamlessly with users in over 50 countries, supported by our worldwide infrastructure for reliable access.",
                },
                {
                  Icon: Rocket,
                  label: "Fast",
                  desc: "Achieve ultra-low latency under 10ms, optimized for high-performance interactions in demanding environments.",
                },
                // eslint-disable-next-line no-unused-vars
              ].map(({ Icon, label, desc }, index) => (
                <div
                  key={label}
                  className="text-center fade-in group hover:scale-105 transition-transform cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="mx-auto mb-3 size-8 text-gray-300 group-hover:text-white transition-colors" />
                  <div className="text-lg font-bold mb-1">{label}</div>
                  <div className="text-sm text-gray-500">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION: Detailed overview of core capabilities */}
        <section className="container mx-auto px-6 py-32">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-bold mb-4">
              Built for modern communication
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover a comprehensive suite of features tailored for today's
              dynamic teams. Our platform provides everything essential for
              efficient collaboration without unnecessary complexity, empowering
              you to focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: MessageSquare,
                title: "Instant Messaging",
                desc: "Enjoy messages delivered in mere milliseconds, complete with real-time synchronization across all your devices, ensuring you never miss a beat in fast-paced discussions.",
                gradient: "from-violet-500/10 to-violet-500/5",
                border: "border-violet-500/20",
              },
              {
                Icon: Users,
                title: "Group Chats",
                desc: "Effortlessly create and manage team workspaces with dedicated channels, threaded conversations, mentions, and role-based permissions to streamline collaboration and organization.",
                gradient: "from-cyan-500/10 to-cyan-500/5",
                border: "border-cyan-500/20",
              },
              {
                Icon: Moon,
                title: "Dark Mode",
                desc: "Protect your eyes during extended sessions with our beautifully crafted dark themes, offering full customization options to match your preferences and enhance usability in any lighting condition.",
                gradient: "from-fuchsia-500/10 to-fuchsia-500/5",
                border: "border-fuchsia-500/20",
              },
              // eslint-disable-next-line no-unused-vars
            ].map(({ Icon, title, desc, gradient, border }, index) => (
              <div
                key={title}
                className={`fade-in group p-8 bg-gradient-to-br ${gradient} backdrop-blur-sm border ${border} rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-default`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Icon className="size-10 mb-4 text-gray-300 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION: Strong call-to-action to drive conversions */}
        <section className="container mx-auto px-6 pb-32">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 border border-white/10 p-16 text-center backdrop-blur-sm fade-in">
            {/* Decorative gradient orbs for visual interest */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/30 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-4">
                Start chatting in seconds
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of teams already transforming their
                communication. No credit card required, no complex setup—just
                instant access to powerful, secure conversations that scale with
                your business.
              </p>

              <Link
                to="/signup"
                className="inline-flex items-center gap-2 group relative px-10 py-5 bg-white text-slate-900 rounded-lg font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Create your account</span>
                <ArrowRight className="size-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-bold text-white">
                  Create your account →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }

        .fade-in.animate-in {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Landing;

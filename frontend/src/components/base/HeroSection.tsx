import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, BarChart3, Users } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-slate-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl animate-blob anim-delay-2"
        />
        <div
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-300/10 rounded-full blur-3xl animate-blob anim-delay-4"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-purple-700 border border-purple-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Where opinions meet
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Clash
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              Discover the better choice, together
            </p>

            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Upload images, start clashes, and let the community decide
              what&apos;s best. Real votes, real opinions, real fast.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 cursor-pointer"
                asChild
              >
                <Link href="/login">
                  Start Clashing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-xl border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white hover:border-slate-300 cursor-pointer"
                asChild
              >
                <Link href="/login">Learn more</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-500" />
                <span className="font-semibold text-slate-700">10K+</span>
                <span className="text-sm text-slate-500">Votes cast</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-pink-500" />
                <span className="font-semibold text-slate-700">5K+</span>
                <span className="text-sm text-slate-500">Active users</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/banner.svg"
                alt="Clash illustration"
                className="w-full max-w-lg opacity-80 drop-shadow-2xl"
              />
            </div>

            <div className="absolute top-8 left-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-slate-100 animate-float shadow-purple-500/10">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  A
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Option A</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[64%] bg-gradient-to-r from-pink-400 to-pink-500 rounded-full" />
                    </div>
                    <span className="text-sm font-bold text-pink-500">64%</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-12 right-0 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-slate-100 animate-float shadow-purple-500/10 anim-delay-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  B
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Option B</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[36%] bg-gradient-to-r from-purple-400 to-purple-500 rounded-full" />
                    </div>
                    <span className="text-sm font-bold text-purple-500">
                      36%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-10">
              <span className="text-lg font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                VS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

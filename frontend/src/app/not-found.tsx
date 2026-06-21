import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl animate-blob anim-delay-2" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="relative inline-block">
          <div className="text-[200px] font-black leading-none bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient select-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-2xl shadow-2xl flex items-center justify-center border border-slate-100">
            <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              VS
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-slate-800">
          This page doesn&apos;t exist
        </h1>

        <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed">
          Looks like this clash got a bit too heated. The page you&apos;re
          looking for has been knocked out.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-purple-500/25 text-base px-8 py-6 cursor-pointer"
            asChild
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

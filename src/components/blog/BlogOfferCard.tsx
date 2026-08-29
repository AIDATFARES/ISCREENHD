import React from "react";
import Link from "next/link";
import { Tv, ShieldCheck, Zap } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="my-10 rounded-[22px] border border-white/10 bg-[#121a2e] p-6 shadow-2xl sm:p-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#FF5528]/10 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 mb-4">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wide text-blue-400">Premium IPTV Experience</span>
          </div>
          
          <h3 className="text-2xl font-black italic tracking-tight text-white sm:text-3xl uppercase mb-3 leading-[1.1]">
            <span className="block">Transform Your TV with</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00dce5]">iScreenHD IPTV</span>
          </h3>
          
          <p className="text-sm text-slate-300 leading-relaxed max-w-lg mb-6">
            Stop dealing with buffering and hidden fees. Get access to 50,000+ live channels, 120,000+ VODs, and exclusive 4K sports with instant setup on all devices.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Tv className="h-4 w-4 text-[#FF5528]" />
              <span>All Devices Supported</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Zap className="h-4 w-4 text-[#FF5528]" />
              <span>Zero Buffering</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col sm:items-center">
          <Link
            href="/pricing"
            className="btn-primary-voltra inline-flex items-center justify-center rounded-full px-8 py-4 text-sm uppercase transition-transform"
          >
            Get Started Now
          </Link>
          <span className="mt-3 text-center text-xs text-slate-400">
            Instant activation • 24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
}

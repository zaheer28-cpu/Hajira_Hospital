import React from "react";
import { Phone, Heart, Smartphone } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export function TopBar() {
  return (
    <div className="border-b border-[#ECE7DE] bg-[#FAF8F5]/90 text-xs text-[#53625B] px-4 sm:px-8 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3 tracking-wide font-normal">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#1C382B]" />
            <span className="font-medium text-[#1C382B]">{HOSPITAL_INFO.tagline}</span>
            <span className="text-[#A2B0A8]">·</span>
            <span className="text-[11px] text-[#718279]">Regd. No. {HOSPITAL_INFO.regdNo}</span>
          </div>

          <span className="hidden lg:inline-block text-[#D1CAC0]">·</span>

          {/* Live Reception Pulse Status */}
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-[#2F523E]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Kanispora Baramulla · Two visits valid in 14 days</span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${HOSPITAL_INFO.phoneLandline}`}
            className="flex items-center gap-1.5 hover:text-[#1C382B] transition-colors font-medium group"
          >
            <Phone className="w-3 h-3 text-[#1C382B] group-hover:scale-115 transition-transform" />
            <span>Ph: {HOSPITAL_INFO.phoneLandline}</span>
          </a>

          <span className="text-[#D1CAC0]">|</span>

          <a
            href={`tel:${HOSPITAL_INFO.phoneCell}`}
            className="flex items-center gap-1.5 hover:text-[#1C382B] transition-colors font-medium group"
          >
            <Smartphone className="w-3 h-3 text-[#1C382B] group-hover:scale-115 transition-transform" />
            <span>Cell: {HOSPITAL_INFO.phoneCell}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

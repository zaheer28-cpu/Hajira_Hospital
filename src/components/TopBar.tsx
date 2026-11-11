import React from "react";
import {
  MapPin,
  Phone,
  Smartphone,
  MessageCircle,
  Clock,
  ShieldCheck,
  FileCheck,
  Activity,
  Pill,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

function TickerItemSet() {
  return (
    <div className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
      {/* 24x7 Critical Care Badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-950 font-bold text-[11px] shadow-2xs">
        <Activity className="w-3.5 h-3.5 text-emerald-700 shrink-0 animate-pulse" />
        <span>Critical Care 24×7</span>
      </div>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* 24x7 Pharmacy Badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EDE7DC] border border-[#D5CDBD] text-[#1C382B] font-bold text-[11px] shadow-2xs">
        <Pill className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
        <span>24×7 Pharmacy</span>
      </div>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* OPD Timings */}
      <div className="inline-flex items-center gap-1.5 text-[#3E4E46]">
        <Clock className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
        <span className="font-bold text-[#18231E]">Available:</span>
        <span className="font-semibold text-[#18231E]">Monday to Sunday · 8:00 AM – 8:00 PM</span>
      </div>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* Hospital Full Address */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Near+JK+Bank+Petrol+Pump+Kanispora+Baramulla"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:text-[#1C382B] hover:underline transition-colors group cursor-pointer"
        title="View on Google Maps"
      >
        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-[#18231E]">Address:</span>
        <span className="text-[#3E4E46]">{HOSPITAL_INFO.address}</span>
      </a>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* Hospital Landline Phone */}
      <a
        href={`tel:${HOSPITAL_INFO.phoneLandline}`}
        className="inline-flex items-center gap-1.5 hover:text-[#1C382B] hover:underline transition-colors group cursor-pointer"
        title="Call Landline"
      >
        <Phone className="w-3.5 h-3.5 text-[#1C382B] shrink-0 group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-[#18231E]">Landline:</span>
        <span className="text-[#3E4E46] font-medium">{HOSPITAL_INFO.phoneLandline}</span>
      </a>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* Hospital Cell Phone */}
      <a
        href={`tel:${HOSPITAL_INFO.phoneCell.replace(/\s+/g, "")}`}
        className="inline-flex items-center gap-1.5 hover:text-[#1C382B] hover:underline transition-colors group cursor-pointer"
        title="Call Mobile"
      >
        <Smartphone className="w-3.5 h-3.5 text-[#1C382B] shrink-0 group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-[#18231E]">Cell:</span>
        <span className="text-[#3E4E46] font-medium">{HOSPITAL_INFO.phoneCell}</span>
      </a>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* WhatsApp Helpdesk */}
      <a
        href={`https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:text-emerald-700 hover:underline transition-colors group cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20 shrink-0 group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-[#18231E]">WhatsApp:</span>
        <span className="font-bold text-emerald-800">{HOSPITAL_INFO.whatsappDisplay}</span>
      </a>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* Prescription Validity Policy */}
      <div className="inline-flex items-center gap-1.5 text-[#42544B]">
        <FileCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
        <span className="font-semibold text-[#18231E]">Prescription Policy:</span>
        <span>{HOSPITAL_INFO.prescriptionPolicy}</span>
      </div>

      <span className="text-[#D1CAC0] select-none">✦</span>

      {/* Official Registration */}
      <div className="inline-flex items-center gap-1.5 text-[#42544B]">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
        <span className="font-semibold text-[#18231E]">Regd. No:</span>
        <span className="text-[11px] text-[#53625B] font-medium">{HOSPITAL_INFO.regdNo}</span>
      </div>
    </div>
  );
}

export function TopBar() {
  return (
    <div className="border-b border-[#ECE7DE] bg-[#FAF8F5] text-xs text-[#53625B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center gap-2.5 sm:gap-3">
        {/* Fixed badge with live indicator pulse */}
        <div className="shrink-0 z-20 flex items-center gap-1.5 bg-[#1C382B] text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="hidden sm:inline font-sans">Critical Care 24×7</span>
          <span className="sm:hidden font-sans">24×7 Care</span>
        </div>

        {/* Moving Ticker Container */}
        <div
          className="relative flex-1 overflow-hidden"
          title="Moving info ticker — hover or tap to pause"
        >
          {/* Subtle edge fade masks for smooth entrance & exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-r from-[#FAF8F5] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-l from-[#FAF8F5] to-transparent" />

          {/* Marquee Track: duplicated identical sets create a seamless infinite loop */}
          <div className="animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            <TickerItemSet />
            <TickerItemSet />
          </div>
        </div>
      </div>
    </div>
  );
}

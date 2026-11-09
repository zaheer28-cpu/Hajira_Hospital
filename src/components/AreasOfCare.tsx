"use client";

import React from "react";
import {
  Stethoscope,
  HeartHandshake,
  Baby,
  Activity,
  ShieldCheck,
  Microscope,
  ArrowUpRight,
  Check,
  Calendar,
} from "lucide-react";
import { DEPARTMENTS } from "@/data/hospitalData";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SpotlightCard } from "@/components/SpotlightCard";

interface AreasOfCareProps {
  onSelectDepartment: (deptId: string) => void;
  onOpenBookingModal: (deptId: string) => void;
  selectedDepartmentId: string | null;
}

export function AreasOfCare({
  onSelectDepartment,
  onOpenBookingModal,
  selectedDepartmentId,
}: AreasOfCareProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-[#1C382B]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[#1C382B]" />;
      case "Baby":
        return <Baby className="w-5 h-5 text-[#1C382B]" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-[#1C382B]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#1C382B]" />;
      case "Microscope":
        return <Microscope className="w-5 h-5 text-[#1C382B]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#1C382B]" />;
    }
  };

  return (
    <section id="care" className="py-16 sm:py-24 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#6B7B73]"></span>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#63746C] font-semibold">
                  Our areas of care
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18231E] max-w-xl font-normal leading-[1.18]">
                The care you need, <br />
                <span className="italic">with you at the centre.</span>
              </h2>
            </div>

            <div className="max-w-xs text-sm text-[#5D6B64] border-l-2 border-[#1C382B]/30 pl-4">
              Not sure where to begin? Our patient team can help you find the right place to start.
            </div>
          </div>
        </AnimateOnScroll>

        {/* 6 Specialty Cards Grid with Spotlight and Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {DEPARTMENTS.map((dept, idx) => {
            const isSelected = selectedDepartmentId === dept.id;
            return (
              <AnimateOnScroll key={dept.id} delayMs={idx * 100}>
                <SpotlightCard
                  spotlightColor={isSelected ? "rgba(28, 56, 43, 0.12)" : "rgba(28, 56, 43, 0.06)"}
                  onClick={() => onSelectDepartment(dept.id)}
                  className={`group text-left p-6 sm:p-7 rounded-2xl border card-hover-lift cursor-pointer flex flex-col justify-between h-full ${
                    isSelected
                      ? "bg-[#F3F6F3] border-[#1C382B] shadow-md ring-2 ring-[#1C382B]/40 scale-[1.01]"
                      : "bg-white border-[#E7E2D8] hover:border-[#1C382B]/50"
                  }`}
                >
                  <div>
                    {/* Icon & Arrow */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#EAEFEA] transition-all duration-300">
                        {getIcon(dept.iconName)}
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E7E2D8] flex items-center justify-center text-[#68786F] group-hover:text-[#1C382B] group-hover:bg-[#EAEFEA] transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-editorial text-2xl text-[#18231E] mb-2 font-normal group-hover:text-[#1C382B] transition-colors">
                      {dept.title}
                    </h3>
                    <p className="text-sm text-[#53625B] leading-relaxed mb-4">
                      {dept.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-[#EFEBE4]">
                      {dept.bulletPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-[#63746C]">
                          <Check className="w-3 h-3 text-[#1C382B] shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Quick Book Action */}
                  <div className="pt-5 mt-5 border-t border-[#EFEBE4] flex items-center justify-between">
                    <span className="text-xs text-[#788880] group-hover:text-[#1C382B] font-medium transition-colors">
                      {isSelected ? "Specialty selected ✓" : "Click to view doctors"}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBookingModal(dept.id);
                      }}
                      className="text-xs font-medium text-[#1C382B] hover:text-[#12281E] flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Book visit</span>
                    </button>
                  </div>
                </SpotlightCard>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Disclaimer Footer Note */}
        <AnimateOnScroll delayMs={200}>
          <p className="text-center text-xs text-[#788880] italic">
            An illustrative care directory. Please confirm service availability when booking.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowUpRight, Calendar, Stethoscope } from "lucide-react";
import { DOCTORS, Doctor } from "@/data/hospitalData";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SpotlightCard } from "@/components/SpotlightCard";

interface OurDoctorsProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenBookingModal: (deptId?: string, doctorId?: string) => void;
  selectedDepartmentId: string | null;
  onClearFilter: () => void;
}

export function OurDoctors({
  onSelectDoctor,
  onOpenBookingModal,
  selectedDepartmentId,
  onClearFilter,
}: OurDoctorsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const effectiveFilter = selectedDepartmentId || activeFilter;

  const filteredDoctors =
    effectiveFilter === "all"
      ? DOCTORS
      : DOCTORS.filter((d) => d.departmentId === effectiveFilter);

  const displayedDoctors = filteredDoctors.length > 0 ? filteredDoctors : DOCTORS;

  return (
    <section id="doctors" className="py-16 sm:py-24 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#6B7B73]"></span>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#63746C] font-semibold">
                  Our doctors
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18231E] max-w-xl font-normal leading-[1.18]">
                Good care starts <br />
                <span className="italic">with good people.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#5D6B64] mt-2">
                Meet the people at the heart of a more personal kind of healthcare.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {selectedDepartmentId && (
                <button
                  onClick={onClearFilter}
                  className="text-xs bg-[#EAE5DB] hover:bg-[#DDD5C7] text-[#18231E] px-3.5 py-1.5 rounded-full transition-all duration-200 font-medium active:scale-95"
                >
                  Clear filter (Showing specialty)
                </button>
              )}
              <button
                onClick={() => {
                  setActiveFilter("all");
                  if (selectedDepartmentId) onClearFilter();
                }}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1C382B] hover:text-[#12281E] border-b border-[#1C382B] pb-0.5 group"
              >
                <span>View all doctors</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Doctor Profiles Grid with Staggered Delays & Spotlight Sheen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {displayedDoctors.map((doctor, idx) => {
            const isMatch = selectedDepartmentId === doctor.departmentId;

            return (
              <AnimateOnScroll key={doctor.id} delayMs={idx * 150}>
                <SpotlightCard
                  spotlightColor={isMatch ? "rgba(28, 56, 43, 0.14)" : "rgba(28, 56, 43, 0.07)"}
                  onClick={() => onSelectDoctor(doctor)}
                  className={`group bg-white rounded-2xl border card-hover-lift overflow-hidden cursor-pointer flex flex-col justify-between h-full ${
                    isMatch
                      ? "border-[#1C382B] ring-2 ring-[#1C382B]/30 shadow-xl scale-[1.01]"
                      : "border-[#E7E2D8] hover:border-[#1C382B]/50"
                  }`}
                >
                  {/* Portrait */}
                  <div className="relative aspect-[4/4] overflow-hidden bg-[#ECE8E0]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out filter saturate-[0.92]"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
                      <span className="bg-white/95 backdrop-blur-xs text-[10px] tracking-wider uppercase text-[#1C382B] font-semibold px-2.5 py-1 rounded-full border border-[#E4DFD5]">
                        {doctor.departmentName}
                      </span>
                      {doctor.regdNo && (
                        <span className="bg-[#1C382B]/90 backdrop-blur-xs text-[9px] tracking-wider uppercase text-white font-medium px-2 py-0.5 rounded-full shadow-2xs">
                          Regd. {doctor.regdNo}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[11px] text-[#47574F] font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 shadow-xs">
                      View profile ↗
                    </div>
                  </div>

                  {/* Info Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-editorial text-2xl text-[#18231E] group-hover:text-[#1C382B] transition-colors mb-1 font-normal">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-[#6B7B73] font-medium mb-3">
                        {doctor.tagline}
                      </p>
                      <p className="text-xs text-[#55645D] line-clamp-2 leading-relaxed">
                        {doctor.bio}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 mt-4 border-t border-[#ECE7DE] flex items-center justify-between">
                      <span className="text-[11px] text-[#788880] flex items-center gap-1">
                        <Stethoscope className="w-3 h-3 text-[#1C382B]" />
                        <span>{doctor.experience.split(" ")[0]} yrs practice</span>
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBookingModal(doctor.departmentId, doctor.id);
                        }}
                        className="inline-flex items-center gap-1 bg-[#FAF8F5] hover:bg-[#1C382B] text-[#1C382B] hover:text-white border border-[#DCD5C9] hover:border-[#1C382B] text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xs"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Book visit</span>
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Section Disclaimer */}
        <AnimateOnScroll delayMs={200}>
          <p className="text-center text-xs text-[#788880] italic">
            Doctors available at Hajira Hospital · Near J&K Bank / Petrol Pump, Kanispora – Baramulla.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { PATIENT_RESOURCES } from "@/data/hospitalData";
import { ChevronDown, ChevronUp, CheckSquare, Check } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface PatientResourcesProps {
  onOpenChecklistModal: (resourceId?: string) => void;
}

export function PatientResources({ onOpenChecklistModal }: PatientResourcesProps) {
  const [expandedId, setExpandedId] = useState<string | null>("what-to-bring");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="guide" className="py-16 sm:py-24 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#6B7B73]"></span>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#63746C] font-semibold">
                  Patient resources
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18231E] max-w-xl font-normal leading-[1.18]">
                Helpful next steps, <br />
                <span className="italic">before you arrive.</span>
              </h2>
            </div>

            <div className="max-w-md text-sm text-[#5D6B64]">
              Practical information to help you prepare, understand your visit and feel more confident before your appointment.
            </div>
          </div>
        </AnimateOnScroll>

        {/* 3 Resource Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {PATIENT_RESOURCES.map((resource, idx) => {
            const isExpanded = expandedId === resource.id;

            return (
              <AnimateOnScroll key={resource.id} delayMs={idx * 150}>
                <div
                  className={`bg-white rounded-2xl border card-hover-lift flex flex-col overflow-hidden h-full ${
                    isExpanded ? "border-[#1C382B] shadow-lg ring-1 ring-[#1C382B]/20" : "border-[#E7E2D8]"
                  }`}
                >
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE8E0] group">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover filter saturate-[0.92] group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[11px] text-[#1C382B] font-medium px-2.5 py-1 rounded-full border border-[#E4DFD5]">
                      Guide
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-editorial text-2xl text-[#18231E] mb-2 font-normal">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-[#53625B] leading-relaxed mb-4">
                        {resource.summary}
                      </p>
                    </div>

                    {/* Expandable Checklist Details */}
                    <div>
                      {isExpanded && (
                        <div className="pt-4 border-t border-[#ECE7DE] mb-4 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-xs uppercase tracking-wider text-[#63746C] font-semibold">
                            Recommended items:
                          </p>
                          {resource.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-[#43524B]">
                              <div className="w-4 h-4 rounded-sm bg-[#EAEFEA] flex items-center justify-center shrink-0 mt-0.5 text-[#1C382B]">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="pt-3 border-t border-[#ECE7DE] flex items-center justify-between">
                        <button
                          onClick={() => toggleExpand(resource.id)}
                          className="text-xs font-medium text-[#1C382B] hover:text-[#12281E] flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          {isExpanded ? (
                            <>
                              <span>Hide checklist</span>
                              <ChevronUp className="w-3.5 h-3.5 transition-transform" />
                            </>
                          ) : (
                            <>
                              <span>View details</span>
                              <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onOpenChecklistModal(resource.id)}
                          className="text-xs font-medium text-[#63746C] hover:text-[#18231E] flex items-center gap-1 transition-colors cursor-pointer group/btn"
                          title="Interactive printable version"
                        >
                          <CheckSquare className="w-3.5 h-3.5 text-[#1C382B] group-hover/btn:scale-110 transition-transform" />
                          <span>Interactive checklist</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Section Disclaimer */}
        <AnimateOnScroll delayMs={200}>
          <p className="text-center text-xs text-[#788880] italic">
            Illustrative patient resources. Please confirm hospital policies, arrival details and service availability before your visit.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}

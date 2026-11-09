import React from "react";
import { CARE_MOMENTS } from "@/data/hospitalData";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function CareInAction() {
  return (
    <section className="py-16 sm:py-24 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#6B7B73]"></span>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#63746C] font-semibold">
                  Care in action
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18231E] max-w-xl font-normal leading-[1.18]">
                Care that feels personal, <br />
                <span className="italic">from the first hello.</span>
              </h2>
            </div>

            <div className="max-w-md text-sm text-[#5D6B64]">
              A few moments that show how thoughtful care can make every visit feel more human.
            </div>
          </div>
        </AnimateOnScroll>

        {/* 3 Photo Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {CARE_MOMENTS.map((moment, idx) => (
            <AnimateOnScroll key={idx} delayMs={idx * 150}>
              <div className="bg-white rounded-2xl border border-[#E7E2D8] overflow-hidden card-hover-lift flex flex-col h-full group">
                <div className="relative aspect-[16/11] overflow-hidden bg-[#ECE8E0]">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover filter saturate-[0.92] group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-2xl text-[#18231E] mb-2 font-normal group-hover:text-[#1C382B] transition-colors">
                      {moment.title}
                    </h3>
                    <p className="text-sm text-[#53625B] leading-relaxed">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Disclaimer Note */}
        <AnimateOnScroll delayMs={200}>
          <p className="text-center text-xs text-[#788880] italic">
            Illustrative care moments. Please confirm hospital policies, service availability and visit details before booking.
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}

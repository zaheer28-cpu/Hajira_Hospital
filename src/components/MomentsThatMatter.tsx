import React from "react";
import { ArrowUpRight } from "lucide-react";
import { MOMENTS_THAT_MATTER } from "@/data/hospitalData";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface MomentsProps {
  onOpenChecklistModal: (resourceId?: string) => void;
}

export function MomentsThatMatter({ onOpenChecklistModal }: MomentsProps) {
  return (
    <section className="py-16 sm:py-20 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Eyebrow */}
        <AnimateOnScroll>
          <div className="flex items-center gap-2 mb-10">
            <span className="w-5 h-[1px] bg-[#6B7B73]"></span>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#63746C] font-semibold">
              Moments that matter
            </p>
          </div>
        </AnimateOnScroll>

        {/* 3 Photo Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {MOMENTS_THAT_MATTER.map((moment, idx) => (
            <AnimateOnScroll key={idx} delayMs={idx * 150}>
              <div className="group flex flex-col bg-white rounded-2xl border border-[#E7E2D8] overflow-hidden card-hover-lift h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5DC]">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out filter saturate-[0.92]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-editorial text-2xl text-[#18231E] mb-2.5 font-normal group-hover:text-[#1C382B] transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-[#53625B] leading-relaxed font-normal">
                    {moment.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* 3 Quick Navigation / Action Link Cards */}
        <AnimateOnScroll delayMs={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#care"
              className="flex items-center justify-between p-4 rounded-xl border border-[#E7E2D8] bg-[#FAF8F5] hover:bg-white hover:border-[#1C382B] card-hover-lift transition-all group"
            >
              <div>
                <p className="text-sm font-medium text-[#18231E] group-hover:text-[#1C382B] transition-colors">
                  Find the right specialist
                </p>
                <p className="text-xs text-[#73827A] mt-0.5">Explore our areas of care</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EAE6DF] group-hover:bg-[#1C382B] flex items-center justify-center text-[#55635B] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            <button
              onClick={() => onOpenChecklistModal("what-to-bring")}
              className="text-left flex items-center justify-between p-4 rounded-xl border border-[#E7E2D8] bg-[#FAF8F5] hover:bg-white hover:border-[#1C382B] card-hover-lift transition-all group cursor-pointer"
            >
              <div>
                <p className="text-sm font-medium text-[#18231E] group-hover:text-[#1C382B] transition-colors">
                  Plan your first visit
                </p>
                <p className="text-xs text-[#73827A] mt-0.5">A simple guide to getting started</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EAE6DF] group-hover:bg-[#1C382B] flex items-center justify-center text-[#55635B] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            <a
              href="#contact"
              className="flex items-center justify-between p-4 rounded-xl border border-[#E7E2D8] bg-[#FAF8F5] hover:bg-white hover:border-[#1C382B] card-hover-lift transition-all group"
            >
              <div>
                <p className="text-sm font-medium text-[#18231E] group-hover:text-[#1C382B] transition-colors">
                  Find your way here
                </p>
                <p className="text-xs text-[#73827A] mt-0.5">Location, directions & contact</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EAE6DF] group-hover:bg-[#1C382B] flex items-center justify-center text-[#55635B] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}

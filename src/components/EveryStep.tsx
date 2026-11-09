import React from "react";
import { UserPlus, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface EveryStepProps {
  onOpenChecklistModal: (resourceId?: string) => void;
}

export function EveryStep({ onOpenChecklistModal }: EveryStepProps) {
  const steps = [
    {
      number: "01",
      title: "Let’s find your starting point",
      description: "Tell our patient team what you need help with.",
    },
    {
      number: "02",
      title: "Come prepared, not worried",
      description: "Bring your prescription card, current medicines and any past reports.",
    },
    {
      number: "03",
      title: "Leave with a clearer next step",
      description: "Ask about your care plan. Every prescription card is valid for two visits within 14 days.",
    },
  ];

  return (
    <section className="bg-[#152A21] text-white py-16 sm:py-24 overflow-hidden border-b border-[#0E1C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            <AnimateOnScroll>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-[1px] bg-[#97AF9E]"></span>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#A5BCAC] font-semibold">
                  Here at every step
                </p>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.18] mb-6">
                A first visit shouldn’t <br />
                <span className="italic font-light text-[#D5E4D8]">feel like a big unknown.</span>
              </h2>

              <p className="text-base text-[#C2D1C7] leading-relaxed mb-10 max-w-xl">
                A little guidance can make all the difference. Here’s how to prepare for a
                calmer, more comfortable visit.
              </p>
            </AnimateOnScroll>

            {/* 3 Numbered Steps with Stagger */}
            <div className="space-y-4 w-full max-w-xl mb-10">
              {steps.map((step, idx) => (
                <AnimateOnScroll key={step.number} delayMs={idx * 120}>
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
                  >
                    <span className="font-editorial text-xl text-[#92B89D] group-hover:text-white transition-colors font-medium shrink-0 pt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-white mb-1 group-hover:translate-x-1 transition-transform">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#B4C5BA]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Companion Callout */}
            <AnimateOnScroll delayMs={350} className="w-full max-w-xl">
              <div className="bg-white/10 border border-white/15 rounded-xl p-4 flex items-center justify-between hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3">
                  <UserPlus className="w-4 h-4 text-[#A7C8AF]" />
                  <span className="text-xs sm:text-sm text-[#D7E3DA]">
                    Ask us about bringing someone you trust to your visit.
                  </span>
                </div>
                <button
                  onClick={() => onOpenChecklistModal("bringing-someone")}
                  className="text-xs font-semibold text-[#A7C8AF] hover:text-white flex items-center gap-1 transition-colors cursor-pointer group"
                >
                  <span>Read guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Right Column Photo */}
          <div className="lg:col-span-5">
            <AnimateOnScroll delayMs={200}>
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0E1C16] aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=80"
                  alt="Supportive patient consultation at Hajira Hospital"
                  className="w-full h-full object-cover filter saturate-[0.88] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating caption */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl p-3.5 text-center animate-float-slow">
                  <p className="text-xs text-[#E1EBE4]">
                    A calm, unhurried space tailored to your comfort and privacy.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CountUp } from "@/components/CountUp";

interface AboutHajiraProps {
  onOpenBookingModal: () => void;
}

export function AboutHajira({ onOpenBookingModal }: AboutHajiraProps) {
  const highlights = [
    "Time to listen, space to ask questions",
    "Clear explanations at every step",
    "Care shaped around you and your family",
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <AnimateOnScroll>
          <div className="bg-[#ECEEE9] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#DFE4DC] relative overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-500">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Narrative */}
              <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-[1px] bg-[#687C71]"></span>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#55695E] font-semibold">
                    This is Hajira
                  </p>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18231E] leading-[1.18] mb-6 font-normal">
                  More than a hospital. <br />
                  <span className="italic">A place to feel at ease.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#47574F] leading-relaxed mb-6">
                  At Hajira Hospital in Kanispora – Baramulla, our vision is simple: bring
                  experienced clinical leadership from leading medical colleges, modern surgical
                  and medical capabilities, and unhurried kindness together under one roof.
                </p>

                {/* 3 Key Principles with subtle delay */}
                <div className="space-y-3 mb-6">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-[#1C382B] shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base font-normal text-[#2A3B32]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Animated Reassurance Stats Band */}
                <div className="grid grid-cols-3 gap-4 pt-5 mb-8 border-t border-[#D5DDD2] w-full max-w-lg">
                  <div>
                    <div className="font-editorial text-2xl sm:text-3xl text-[#18231E] font-medium">
                      <CountUp end={30} suffix="+" /> min
                    </div>
                    <div className="text-[11px] text-[#63746C] mt-0.5">Average visit time</div>
                  </div>
                  <div>
                    <div className="font-editorial text-2xl sm:text-3xl text-[#18231E] font-medium">
                      <CountUp end={100} suffix="%" />
                    </div>
                    <div className="text-[11px] text-[#63746C] mt-0.5">Unhurried answers</div>
                  </div>
                  <div>
                    <div className="font-editorial text-2xl sm:text-3xl text-[#18231E] font-medium">
                      <CountUp end={15} suffix="+" /> yrs
                    </div>
                    <div className="text-[11px] text-[#63746C] mt-0.5">Avg clinician exp</div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="#doctors"
                    className="inline-flex items-center gap-1.5 bg-[#1C382B] hover:bg-[#12281E] text-white text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-300 group shadow-xs hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span>Get to know our doctors</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </a>

                  <button
                    onClick={onOpenBookingModal}
                    className="inline-flex items-center gap-1.5 border border-[#1C382B] text-[#1C382B] hover:bg-[#1C382B] hover:text-white text-sm font-medium px-5 py-3 rounded-full transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Schedule consultation</span>
                  </button>
                </div>
              </div>

              {/* Right Architectural Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#D5DDD2] shadow-md bg-stone-200 aspect-[4/3] lg:aspect-square group">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                    alt="A welcoming environment inside Hajira Hospital"
                    className="w-full h-full object-cover filter saturate-[0.88] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating caption badge with gentle float animation */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-[#DFE4DC] rounded-xl px-4 py-2.5 shadow-sm text-center animate-float-slow">
                    <p className="text-xs font-normal text-[#44554C]">
                      A welcoming environment, imagined around your comfort.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

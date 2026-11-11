import React from "react";
import { ArrowUpRight, MessageSquareHeart } from "lucide-react";

interface HeroProps {
  onOpenBookingModal: (departmentId?: string) => void;
}

export function Hero({ onOpenBookingModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="w-5 h-[1px] bg-[#6B7B73]"></span>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#63746C] font-semibold">
                Promoting Health & Care · Kanispora, Baramulla
              </p>
            </div>

            {/* Display Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18231E] leading-[1.12] mb-6 font-normal animate-in fade-in slide-in-from-bottom-4 duration-700">
              A little more care. <br />
              <span className="italic font-light text-[#224434] inline-block hover:scale-[1.01] transition-transform origin-left">
                A lot more human.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#53625B] leading-relaxed max-w-xl mb-8 font-normal animate-in fade-in slide-in-from-bottom-4 duration-800">
              From everyday questions to life’s bigger moments, find thoughtful care
              and people who take the time to listen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12 animate-in fade-in slide-in-from-bottom-5 duration-900">
              <a
                href="#care"
                className="inline-flex items-center justify-center bg-[#1C382B] hover:bg-[#12281E] text-white text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Find your care
              </a>
              <a
                href="#doctors"
                className="inline-flex items-center gap-1.5 border border-[#D8D2C6] hover:border-[#1C382B] bg-white/70 hover:bg-white text-[#18231E] text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 group"
              >
                <span>Meet our doctors</span>
                <ArrowUpRight className="w-4 h-4 text-[#68786F] group-hover:text-[#1C382B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Sub-card quote badge */}
            <div className="w-full max-w-lg bg-[#FAF8F5] border border-[#E3DDD2] rounded-2xl p-5 shadow-xs flex items-start gap-3.5 card-hover-lift animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <div className="w-9 h-9 rounded-full bg-[#EAEFEA] flex items-center justify-center shrink-0 mt-0.5 text-[#1C382B] animate-pulse-glow">
                <MessageSquareHeart className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wider text-[#68786F] font-semibold mb-1">
                  A listening ear. Clear answers. Care, together.
                </div>
                <div className="font-editorial text-base text-[#18231E] font-medium leading-snug">
                  “You deserve to feel heard. Let’s start with what matters to you.”
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#E4DFD5] shadow-lg bg-[#EDE8E0] group">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                  alt="Hajira Hospital clinician warmly consulting with senior patient"
                  className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.03] group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E3DDD2] rounded-2xl p-3.5 shadow-lg flex items-center justify-between animate-float-slow">
                  <div>
                    <p className="text-xs font-medium text-[#18231E]">
                      Empathetic, unhurried consultations
                    </p>
                    <p className="text-[11px] text-[#63746C]">
                      Kanispora Baramulla · 2 Visits valid in 14 days
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenBookingModal()}
                    className="shrink-0 bg-[#1C382B] text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full hover:bg-[#12281E] transition-all hover:scale-105 active:scale-95 shadow-xs"
                  >
                    Book now
                  </button>
                </div>
              </div>

              {/* Decorative subtle aura with soft pulse */}
              <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-[#E5ECE7] filter blur-2xl -z-10 opacity-70 animate-pulse-glow pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

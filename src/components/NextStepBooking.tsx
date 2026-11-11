"use client";

import React, { useState } from "react";
import { Phone, Calendar, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface NextStepBookingProps {
  onOpenBookingModal: (departmentId?: string) => void;
}

export function NextStepBooking({ onOpenBookingModal }: NextStepBookingProps) {
  const [selectedService, setSelectedService] = useState<string>("ent-surgery");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal(selectedService);
  };

  return (
    <section className="py-16 sm:py-24 border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
            <AnimateOnScroll>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#6B7B73]"></span>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#63746C] font-semibold">
                  {HOSPITAL_INFO.tagline}
                </p>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18231E] font-normal leading-[1.18] mb-6">
                Your health matters. <br />
                <span className="italic">Let’s make time for it.</span>
              </h2>

              <p className="text-base text-[#53625B] leading-relaxed mb-6 max-w-lg">
                Conveniently located Near J&K Bank / Petrol Pump in Kanispora – Baramulla. Book your consultation with our experienced specialists or reach our reception desk directly.
              </p>

              {/* Contact Card with Landline, WhatsApp, and Email */}
              <div className="space-y-2.5 w-full max-w-md">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EFECE6] border border-[#E1DBD0] card-hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1C382B] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#63746C] font-medium">Hospital Landline</p>
                      <a
                        href={`tel:${HOSPITAL_INFO.phoneLandline}`}
                        className="font-editorial text-lg font-medium text-[#18231E] hover:text-[#1C382B] transition-colors"
                      >
                        {HOSPITAL_INFO.phoneLandline}
                      </a>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#2F523E] font-medium px-2.5 py-1 bg-[#E1E8E2] rounded-full">
                    Reception
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#EAEFEA] border border-[#D5E1D8] card-hover-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#1C382B] font-semibold">WhatsApp Appointment Desk</p>
                      <a
                        href={`https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-editorial text-lg font-medium text-[#18231E] hover:text-[#1C382B] transition-colors"
                      >
                        {HOSPITAL_INFO.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#1C382B] font-medium px-2.5 py-1 bg-white rounded-full border border-[#C8D9CD]">
                    Instant Chat ↗
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E1DBD0] flex items-center gap-2.5 text-xs text-[#52635B]">
                  <Mail className="w-4 h-4 text-[#1C382B] shrink-0" />
                  <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:underline font-medium text-[#18231E] truncate">
                    {HOSPITAL_INFO.email}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Interactive Appointment Request Card */}
          <div className="lg:col-span-6">
            <AnimateOnScroll delayMs={150}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E4DFD5] shadow-lg card-hover-lift">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#18231E] font-normal">
                    How can we help you?
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider bg-[#EAEFEA] text-[#1C382B] px-2.5 py-1 rounded-full font-semibold">
                    14-Day Validity
                  </span>
                </div>
                <p className="text-xs text-[#6B7B73] mb-6">
                  Select your department to schedule a consultation at Kanispora Baramulla.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-2">
                      I’m looking for
                    </label>
                    <div className="relative group">
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full appearance-none bg-[#FAF8F5] border border-[#DCD5C8] rounded-xl px-4 py-3.5 text-sm text-[#18231E] focus:outline-hidden focus:ring-2 focus:ring-[#1C382B] transition-all cursor-pointer font-medium group-hover:border-[#1C382B]/60"
                      >
                        <option value="gynaecology">Gynaecology & Obstetrics (Consultant Obstetrician & Gynaecologist)</option>
                        <option value="ent-surgery">ENT & Head/Neck Surgery (Prof. Dr. Shafkat Ah. Lone)</option>
                        <option value="general-surgery">General & Laparoscopic Surgery (Dr. Shakeeb / Dr. Lubna / Dr. Aabid)</option>
                        <option value="cardiology">Cardiology & Heart Care (Dr. Mustafa Bashir)</option>
                        <option value="paediatrics">Paediatrics & Child Health (Prof. Dr. Suhail Ahmad)</option>
                        <option value="orthopaedics">Orthopaedics & Joint Care (Dr. Azhar)</option>
                        <option value="pulmonology">Chest & Respiratory Medicine (Dr. Shahid Majid)</option>
                        <option value="general-medicine">Internal & General Medicine (Dr. Javid Monga)</option>
                        <option value="general-consult">Help choosing the right specialist</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#66776F] group-hover:text-[#1C382B] transition-colors">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#1C382B] hover:bg-[#12281E] text-white text-sm font-medium py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request an appointment</span>
                  </button>

                  <p className="text-[11px] text-[#788880] text-center leading-normal pt-1">
                    Near J&K Bank / Petrol Pump, Kanispora – Baramulla · WhatsApp: {HOSPITAL_INFO.whatsappDisplay} · Landline: {HOSPITAL_INFO.phoneLandline}
                  </p>
                </form>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}

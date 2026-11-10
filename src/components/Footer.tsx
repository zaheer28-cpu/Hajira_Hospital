import React from "react";
import { Plus, Phone, Mail, MapPin, Clock, AlertCircle, ShieldCheck, Smartphone, MessageCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#FAF8F5] text-[#18231E] pt-16 pb-12 border-t border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#E8E2D6]">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#1C382B] flex items-center justify-center text-white text-sm font-semibold">
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-normal tracking-tight text-[#18231E] leading-none">
                  Hajira
                </span>
                <span className="text-[8px] tracking-[0.28em] uppercase text-[#73827A] font-semibold mt-0.5">
                  H O S P I T A L
                </span>
              </div>
            </div>
            <p className="text-xs font-medium text-[#1C382B] tracking-wide mt-2">
              {HOSPITAL_INFO.tagline}
            </p>
            <p className="text-xs text-[#5D6B64] leading-relaxed mt-2">
              Thoughtful medical care, experienced senior clinicians, and dedicated patient support under one roof.
            </p>
            <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-md bg-[#ECE8E0] text-[10px] text-[#47574F] font-medium">
              <ShieldCheck className="w-3 h-3 text-[#1C382B]" />
              <span>Regd. No. {HOSPITAL_INFO.regdNo}</span>
            </div>
          </div>

          {/* Visit Hajira */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C382B] mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Hajira</span>
            </div>
            <p className="text-sm font-medium text-[#18231E]">
              {HOSPITAL_INFO.address}
            </p>
            <p className="text-xs text-[#788880] mt-1.5">
              Convenient parking & direct highway access
            </p>
          </div>

          {/* Appointment Desk */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C382B] mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Appointment desk</span>
            </div>
            <p className="text-sm font-medium text-[#18231E]">
              Monday – Saturday
            </p>
            <p className="text-xs text-[#48574F]">8:00 am – 6:00 pm</p>
            <div className="mt-2 text-xs text-[#1C382B] bg-[#EAEFEA] p-2 rounded-lg font-medium">
              ✦ {HOSPITAL_INFO.prescriptionPolicy}
            </div>
          </div>

          {/* Talk to our team */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C382B] mb-3">
              <Phone className="w-3.5 h-3.5" />
              <span>Talk to our team</span>
            </div>
            <a
              href={`https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#1C382B] hover:text-[#0E1F17] flex items-center gap-1.5 mb-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
              <span>WhatsApp: {HOSPITAL_INFO.whatsappDisplay}</span>
            </a>
            <a
              href={`tel:${HOSPITAL_INFO.phoneLandline}`}
              className="text-xs font-medium text-[#18231E] hover:text-[#1C382B] block transition-colors"
            >
              Ph: {HOSPITAL_INFO.phoneLandline}
            </a>
            <a
              href={`tel:${HOSPITAL_INFO.phoneCell}`}
              className="text-xs font-medium text-[#18231E] hover:text-[#1C382B] block mt-1 transition-colors flex items-center gap-1"
            >
              <Smartphone className="w-3 h-3 text-[#1C382B]" />
              <span>Cell: {HOSPITAL_INFO.phoneCell}</span>
            </a>
            <a
              href={`mailto:${HOSPITAL_INFO.email}`}
              className="text-xs text-[#48574F] hover:text-[#18231E] block mt-1.5 transition-colors underline break-all flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-[#64756D] shrink-0" />
              <span>{HOSPITAL_INFO.email}</span>
            </a>
            <div className="mt-3 p-2 rounded-lg bg-[#F5ECE8] border border-[#EBDCD7] text-[10px] text-[#8C3A27] flex items-start gap-1 leading-snug">
              <AlertCircle className="w-3 h-3 shrink-0 mt-0.5" />
              <span>For acute emergencies, contact local emergency services immediately.</span>
            </div>
          </div>

          {/* Explore Hajira */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1C382B] mb-3">
              Our Specialties
            </p>
            <ul className="space-y-1.5 text-xs text-[#4E5E56]">
              <li>
                <a href="#care" className="hover:text-[#1C382B] transition-colors">
                  ENT & Head/Neck Surgery
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#1C382B] transition-colors">
                  General & Laparoscopic Surgery
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#1C382B] transition-colors">
                  Cardiology & Heart Care
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#1C382B] transition-colors">
                  Paediatrics & Child Health
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#1C382B] transition-colors">
                  Orthopaedics & Joint Care
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#1C382B] transition-colors">
                  Chest & Respiratory Medicine
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Helpful Patient Notes */}
        <div className="py-8 border-b border-[#E8E2D6] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-5 rounded-2xl bg-[#F4F1EB] border border-[#E4DFD5]">
            <h4 className="font-editorial text-lg text-[#18231E] mb-1 font-medium">
              Arrival and parking at Kanispora
            </h4>
            <p className="text-xs text-[#586860] leading-relaxed">
              Located conveniently Near J&K Bank and the Petrol Pump in Kanispora, Baramulla. Please arrive 15 minutes before your scheduled doctor consultation. Easy access and parking available right by the clinic.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F4F1EB] border border-[#E4DFD5]">
            <h4 className="font-editorial text-lg text-[#18231E] mb-1 font-medium">
              14-Day Two-Visit Reassurance Policy
            </h4>
            <p className="text-xs text-[#586860] leading-relaxed">
              Every Hajira Hospital prescription card is officially valid for two visits within 14 days. If your symptoms change or you need report evaluation, your follow-up is smoothly covered.
            </p>
          </div>
        </div>

        {/* Legal & Medical Concept Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#788880]">
          <div>
            © 2026 Hajira Hospital · Regd. No. {HOSPITAL_INFO.regdNo} · Kanispora, Baramulla
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Patient Rights</a>
            <a href="#" className="hover:underline">Hospital Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

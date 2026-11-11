import React from "react";
import { Plus, Phone, Mail, MapPin, Clock, AlertCircle, ShieldCheck, Smartphone, MessageCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

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
                  Hajira Hospital
                </span>
                <span className="text-[9px] tracking-wide text-[#5D6B64] font-medium mt-1">
                  {HOSPITAL_INFO.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#5D6B64] leading-relaxed mt-2">
              Thoughtful medical care, experienced senior clinicians, and dedicated patient support under one roof.
            </p>
            <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-md bg-[#ECE8E0] text-[10px] text-[#47574F] font-medium">
              <ShieldCheck className="w-3 h-3 text-[#1C382B]" />
              <span>Regd. No. {HOSPITAL_INFO.regdNo}</span>
            </div>

            {/* Social Media Follow Buttons */}
            <div className="mt-5 pt-4 border-t border-[#E8E2D6]">
              <p className="text-[11px] uppercase tracking-wider text-[#73827A] font-semibold mb-2.5">
                Connect With Us
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={HOSPITAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ECE8E0] hover:bg-[#E1306C] text-[#1C382B] hover:text-white text-xs font-medium transition-all duration-300 shadow-xs group"
                  aria-label="Instagram"
                  title="Follow Hajira Hospital on Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px]">Instagram</span>
                </a>

                <a
                  href={HOSPITAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ECE8E0] hover:bg-[#1877F2] text-[#1C382B] hover:text-white text-xs font-medium transition-all duration-300 shadow-xs group"
                  aria-label="Facebook"
                  title="Follow Hajira Hospital on Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px]">Facebook</span>
                </a>
              </div>
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
              href={`tel:${HOSPITAL_INFO.phoneCell.replace(/\s+/g, "")}`}
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

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Social Icons in footer bar */}
            <div className="flex items-center gap-2">
              <a
                href={HOSPITAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#ECE8E0] hover:bg-[#E1306C] text-[#1C382B] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-108"
                aria-label="Follow on Instagram"
                title="Follow Hajira Hospital on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 fill-current" />
              </a>

              <a
                href={HOSPITAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#ECE8E0] hover:bg-[#1877F2] text-[#1C382B] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-108"
                aria-label="Follow on Facebook"
                title="Follow Hajira Hospital on Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>

            <span className="text-[#D1CAC0] hidden xs:inline">|</span>

            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Patient Rights</a>
            <a href="#" className="hover:underline">Hospital Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

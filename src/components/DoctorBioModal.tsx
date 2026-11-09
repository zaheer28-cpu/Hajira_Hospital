"use client";

import React, { useEffect } from "react";
import { X, Calendar, GraduationCap, Languages, Clock, Award, Stethoscope, ShieldCheck } from "lucide-react";
import { Doctor } from "@/data/hospitalData";

interface DoctorBioModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookWithDoctor: (deptId: string, doctorId: string) => void;
}

export function DoctorBioModal({
  doctor,
  onClose,
  onBookWithDoctor,
}: DoctorBioModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && doctor) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [doctor, onClose]);

  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF8F5] border border-[#E4DFD5] rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#ECE7DE] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-[#63746C] font-semibold">
              Hajira Hospital · {doctor.departmentName}
            </span>
            {doctor.regdNo && (
              <span className="text-[10px] bg-[#EAEFEA] text-[#1C382B] px-2 py-0.5 rounded-md font-semibold">
                Regd. No: {doctor.regdNo}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EAE5DB] hover:bg-[#DDD6C9] flex items-center justify-center text-[#18231E] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Top Profile Summary */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 rounded-2xl overflow-hidden bg-[#ECE8E0] border border-[#E0D9CE] shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top filter saturate-[0.92]"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-editorial text-3xl text-[#18231E] font-normal mb-1">
                {doctor.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#1C382B] font-semibold mb-2">
                {doctor.tagline}
              </p>
              <p className="text-xs text-[#5D6D65] flex items-center justify-center sm:justify-start gap-1.5 font-medium">
                <Award className="w-3.5 h-3.5 text-[#1C382B]" />
                <span>{doctor.credentials}</span>
              </p>
            </div>
          </div>

          {/* Philosophy / Bio */}
          <div className="p-4 rounded-2xl bg-white border border-[#E6E0D6]">
            <h4 className="text-xs uppercase tracking-wider text-[#63746C] font-semibold mb-2">
              Clinical Background & Specialization
            </h4>
            <p className="text-sm text-[#3E4E46] leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Clinical Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#44534B]">
            <div className="p-3.5 rounded-xl bg-[#F3EFE9] border border-[#E2DCD1]">
              <div className="flex items-center gap-1.5 text-[#1C382B] font-semibold mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Qualification</span>
              </div>
              <p className="text-[11px] leading-snug">{doctor.education}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F3EFE9] border border-[#E2DCD1]">
              <div className="flex items-center gap-1.5 text-[#1C382B] font-semibold mb-1">
                <Languages className="w-4 h-4" />
                <span>Languages Spoken</span>
              </div>
              <p className="text-[11px] leading-snug">{doctor.languages.join(", ")}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F3EFE9] border border-[#E2DCD1]">
              <div className="flex items-center gap-1.5 text-[#1C382B] font-semibold mb-1">
                <Clock className="w-4 h-4" />
                <span>Consultation Days</span>
              </div>
              <p className="text-[11px] leading-snug">{doctor.availableDays.join(", ")}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F3EFE9] border border-[#E2DCD1]">
              <div className="flex items-center gap-1.5 text-[#1C382B] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Prescription Validity</span>
              </div>
              <p className="text-[11px] leading-snug">Two visits valid within 14 days</p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="sticky bottom-0 bg-[#FAF8F5] border-t border-[#ECE7DE] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#63746C] hover:text-[#18231E]"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookWithDoctor(doctor.departmentId, doctor.id);
            }}
            className="inline-flex items-center gap-2 bg-[#1C382B] hover:bg-[#12281E] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-xs hover:shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book with {doctor.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import {
  DEPARTMENTS,
  DOCTORS,
  HOSPITAL_INFO,
  createWhatsAppAppointmentUrl,
} from "@/data/hospitalData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartmentId?: string | null;
  initialDoctorId?: string | null;
}

export function BookingModal({
  isOpen,
  onClose,
  initialDepartmentId,
  initialDoctorId,
}: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [departmentId, setDepartmentId] = useState<string>(
    initialDepartmentId || "gynaecology"
  );
  const [doctorId, setDoctorId] = useState<string>(initialDoctorId || "any");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("morning");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [visitNotes, setVisitNotes] = useState<string>("");
  const [bookingRef, setBookingRef] = useState<string>("");
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  // Sync state when props change (idiomatic React 19 render-time adjustment)
  const [prevDeptProp, setPrevDeptProp] = useState(initialDepartmentId);
  const [prevDoctorProp, setPrevDoctorProp] = useState(initialDoctorId);

  if (initialDepartmentId !== prevDeptProp) {
    setPrevDeptProp(initialDepartmentId);
    if (initialDepartmentId) {
      setDepartmentId(initialDepartmentId);
    }
  }

  if (initialDoctorId !== prevDoctorProp) {
    setPrevDoctorProp(initialDoctorId);
    if (initialDoctorId) {
      setDoctorId(initialDoctorId);
    }
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDept = DEPARTMENTS.find((d) => d.id === departmentId) || DEPARTMENTS[0];
  const availableDoctors = DOCTORS.filter(
    (doc) => doc.departmentId === departmentId || departmentId === "general-consult"
  );
  const chosenDoctor = DOCTORS.find((doc) => doc.id === doctorId);

  const handleNextStep = () => {
    if (step === 3) {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const newRef = `HAJ-2026-${randomCode}`;
      setBookingRef(newRef);

      const targetDoctor = DOCTORS.find((doc) => doc.id === doctorId);
      const effectiveDate =
        selectedDate ||
        new Date(Date.now() + 86400000).toISOString().split("T")[0];
      const waUrl = createWhatsAppAppointmentUrl({
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim(),
        departmentName: currentDept ? currentDept.title : "General Care",
        doctorName: targetDoctor ? targetDoctor.name : "First available specialist",
        date: effectiveDate,
        timeSlot: selectedTimeSlot,
        notes: visitNotes.trim(),
        bookingRef: newRef,
      });

      setWhatsappUrl(waUrl);

      // Automatically redirect to WhatsApp in a new tab/window
      try {
        if (typeof window !== "undefined") {
          window.open(waUrl, "_blank", "noopener,noreferrer");
        }
      } catch (err) {
        console.error("Popup prevented:", err);
      }

      setStep(4);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setVisitNotes("");
    setWhatsappUrl("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-300">
      <div
        className="bg-[#FAF8F5] border border-[#E4DFD5] rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#ECE7DE] px-6 py-5 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#687C71] font-semibold mb-1">
              <span>Hajira Care Desk · WhatsApp: {HOSPITAL_INFO.whatsappDisplay}</span>
              {step < 4 && (
                <div className="flex items-center gap-1.5 ml-2">
                  {[1, 2, 3].map((s) => (
                    <span
                      key={s}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        s === step
                          ? "w-5 bg-[#1C382B]"
                          : s < step
                          ? "w-2 bg-[#759080]"
                          : "w-2 bg-[#D8D2C6]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            <h3 className="font-editorial text-2xl text-[#18231E] font-medium leading-tight">
              {step === 4 ? "Visit Requested" : "Request an Appointment"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EAE5DB] hover:bg-[#DDD6C9] hover:rotate-90 flex items-center justify-center text-[#18231E] transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* STEP 1: Department & Doctor */}
          {step === 1 && (
            <div key="step-1" className="space-y-6 animate-in fade-in duration-300">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-2">
                  Choose Department / Care Specialty
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {DEPARTMENTS.map((dept) => (
                    <button
                      type="button"
                      key={dept.id}
                      onClick={() => {
                        setDepartmentId(dept.id);
                        setDoctorId("any");
                      }}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all duration-200 active:scale-[0.98] ${
                        departmentId === dept.id
                          ? "bg-[#1C382B] text-white border-[#1C382B] shadow-xs"
                          : "bg-white text-[#18231E] border-[#E2DCD1] hover:border-[#1C382B]/60"
                      }`}
                    >
                      {dept.title}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setDepartmentId("general-consult");
                      setDoctorId("any");
                    }}
                    className={`text-left p-3 rounded-xl border text-xs font-medium transition-all duration-200 active:scale-[0.98] sm:col-span-2 ${
                      departmentId === "general-consult"
                        ? "bg-[#1C382B] text-white border-[#1C382B] shadow-xs"
                        : "bg-white text-[#18231E] border-[#E2DCD1] hover:border-[#1C382B]/60"
                    }`}
                  >
                    I’m not sure · Help me choose the right care
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-2">
                  Doctor Preference
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-[#E2DCD1] bg-white cursor-pointer hover:border-[#1C382B]/40 transition-colors">
                    <input
                      type="radio"
                      name="doctor"
                      value="any"
                      checked={doctorId === "any"}
                      onChange={() => setDoctorId("any")}
                      className="accent-[#1C382B]"
                    />
                    <span className="text-xs font-medium text-[#18231E]">
                      First available specialist in {currentDept.title}
                    </span>
                  </label>

                  {availableDoctors.map((doc) => (
                    <label
                      key={doc.id}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#E2DCD1] bg-white cursor-pointer hover:border-[#1C382B]/40 transition-colors"
                    >
                      <input
                        type="radio"
                        name="doctor"
                        value={doc.id}
                        checked={doctorId === doc.id}
                        onChange={() => setDoctorId(doc.id)}
                        className="accent-[#1C382B]"
                      />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-[#18231E]">{doc.name}</p>
                        <p className="text-[11px] text-[#63746C]">{doc.tagline}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Time slot */}
          {step === 2 && (
            <div key="step-2" className="space-y-6 animate-in fade-in slide-in-from-right-3 duration-300">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-2">
                  Preferred Appointment Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    onFocus={(e) => {
                      if (!e.target.min) {
                        e.target.min = new Date().toISOString().split("T")[0];
                      }
                    }}
                    className="w-full bg-white border border-[#DCD5C8] rounded-xl px-4 py-3.5 text-sm text-[#18231E] focus:outline-hidden focus:ring-2 focus:ring-[#1C382B] transition-all font-medium"
                  />
                </div>
                <p className="text-[11px] text-[#788880] mt-1.5">
                  Clinic hours: Monday through Saturday, 8:00 am – 6:00 pm.
                </p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-2">
                  Preferred Time Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "morning", label: "Morning", time: "09:00 am – 12:00 pm" },
                    { id: "afternoon", label: "Afternoon", time: "01:00 pm – 04:00 pm" },
                    { id: "evening", label: "Late Day", time: "04:00 pm – 06:00 pm" },
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot.id}
                      onClick={() => setSelectedTimeSlot(slot.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 active:scale-[0.98] ${
                        selectedTimeSlot === slot.id
                          ? "bg-[#1C382B] text-white border-[#1C382B] shadow-xs"
                          : "bg-white text-[#18231E] border-[#E2DCD1] hover:border-[#1C382B]/60"
                      }`}
                    >
                      <p className="text-xs font-semibold">{slot.label}</p>
                      <p className={`text-[11px] mt-0.5 ${selectedTimeSlot === slot.id ? "text-stone-300" : "text-[#788880]"}`}>
                        {slot.time}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EFECE6] border border-[#E1DBD0] text-xs text-[#55645D]">
                <p className="font-semibold text-[#18231E] mb-1">Unhurried consultations</p>
                Each visit at Hajira is scheduled with ample buffer time so your doctor has plenty of time to listen and answer your questions.
              </div>
            </div>
          )}

          {/* STEP 3: Patient Details */}
          {step === 3 && (
            <div key="step-3" className="space-y-4 animate-in fade-in slide-in-from-right-3 duration-300">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-1.5">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Maryam Siddiqui"
                    className="w-full bg-white border border-[#DCD5C8] rounded-xl pl-10 pr-4 py-3 text-sm text-[#18231E] focus:outline-hidden focus:ring-2 focus:ring-[#1C382B] font-medium"
                  />
                  <User className="w-4 h-4 text-[#8A9A92] absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 94190XXXXX"
                      className="w-full bg-white border border-[#DCD5C8] rounded-xl pl-10 pr-4 py-3 text-sm text-[#18231E] focus:outline-hidden focus:ring-2 focus:ring-[#1C382B] font-medium"
                    />
                    <Phone className="w-4 h-4 text-[#8A9A92] absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-[#DCD5C8] rounded-xl pl-10 pr-4 py-3 text-sm text-[#18231E] focus:outline-hidden focus:ring-2 focus:ring-[#1C382B] font-medium"
                    />
                    <Mail className="w-4 h-4 text-[#8A9A92] absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#55635B] mb-1.5">
                  Reason for visit or symptoms (Optional)
                </label>
                <textarea
                  rows={3}
                  value={visitNotes}
                  onChange={(e) => setVisitNotes(e.target.value)}
                  placeholder="Tell us what you'd like to discuss or any questions you have in mind..."
                  className="w-full bg-white border border-[#DCD5C8] rounded-xl p-3 text-sm text-[#18231E] focus:outline-hidden focus:ring-2 focus:ring-[#1C382B]"
                ></textarea>
              </div>

              <div className="p-3 bg-[#EAEFEA] rounded-xl border border-[#D1DDD3] text-xs text-[#1C382B] flex items-center gap-2">
                <MessageCircle className="w-4 h-4 shrink-0 text-[#1C382B]" />
                <span>
                  Upon confirming, your appointment details will float directly to our WhatsApp desk at <strong>{HOSPITAL_INFO.whatsappDisplay}</strong>.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation & WhatsApp Redirection */}
          {step === 4 && (
            <div key="step-4" className="text-center py-4 space-y-6 animate-in zoom-in-95 duration-400">
              <div className="w-16 h-16 rounded-full bg-[#EAEFEA] text-[#1C382B] flex items-center justify-center mx-auto shadow-inner animate-pulse-glow">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#63746C] font-semibold">
                  Reference: {bookingRef}
                </span>
                <h4 className="font-editorial text-3xl text-[#18231E] font-medium mt-1 mb-2">
                  Thank you, {fullName || "Patient"}.
                </h4>
                <p className="text-sm text-[#55645D] max-w-md mx-auto">
                  Your appointment details are being routed directly to our hospital coordinator on WhatsApp (<strong>{HOSPITAL_INFO.whatsappDisplay}</strong>).
                </p>
              </div>

              {/* WhatsApp Action Button */}
              {whatsappUrl && (
                <div className="space-y-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Open in WhatsApp ({HOSPITAL_INFO.whatsappDisplay})</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                  </a>
                  <p className="text-[11px] text-[#718279]">
                    If WhatsApp didn’t open automatically, tap the button above to float your booking.
                  </p>
                </div>
              )}

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E4DFD5] text-left space-y-2.5 text-xs text-[#45544D]">
                <div className="flex justify-between border-b border-[#ECE7DE] pb-2">
                  <span className="text-[#788880]">Department:</span>
                  <span className="font-semibold text-[#18231E]">{currentDept.title}</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE7DE] pb-2">
                  <span className="text-[#788880]">Doctor:</span>
                  <span className="font-semibold text-[#18231E]">
                    {chosenDoctor ? chosenDoctor.name : "First Available Specialist"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#ECE7DE] pb-2">
                  <span className="text-[#788880]">Requested Date:</span>
                  <span className="font-semibold text-[#18231E]">{selectedDate || "Tomorrow"}</span>
                </div>
                <div className="flex justify-between border-b border-[#ECE7DE] pb-2">
                  <span className="text-[#788880]">Window:</span>
                  <span className="font-semibold text-[#18231E] capitalize">{selectedTimeSlot} slot</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#788880]">Location:</span>
                  <span className="font-semibold text-[#18231E]">Near J&K Bank/Petrol Pump, Kanispora – Baramulla</span>
                </div>
              </div>

              <div className="p-3 bg-[#EAEFEA] rounded-xl text-xs text-[#1C382B] text-left space-y-1">
                <p>✦ <strong>Hospital Policy:</strong> Prescription card is valid for two visits within 14 days.</p>
                <p className="text-[11px] text-[#42544B]">Desk contact: {HOSPITAL_INFO.phoneLandline} · WhatsApp: {HOSPITAL_INFO.whatsappDisplay} · Cell: {HOSPITAL_INFO.phoneCell}</p>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-[#1C382B] text-white text-sm font-medium py-3.5 rounded-full hover:bg-[#12281E] transition-all hover:shadow-md cursor-pointer"
              >
                Done · Return to Home
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="sticky bottom-0 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#ECE7DE] px-6 py-4 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#55635B] hover:text-[#18231E] px-4 py-2.5 rounded-full border border-[#DCD5C9] bg-white transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            <button
              type="button"
              onClick={handleNextStep}
              disabled={step === 3 && (!fullName.trim() || !phoneNumber.trim())}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white px-6 py-3 rounded-full transition-all shadow-xs active:scale-95 cursor-pointer ${
                step === 3 && (!fullName.trim() || !phoneNumber.trim())
                  ? "bg-[#9FB2A8] cursor-not-allowed"
                  : "bg-[#1C382B] hover:bg-[#12281E] hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <span>{step === 3 ? "Send & Open WhatsApp" : "Continue"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Calendar,
  ChevronDown,
  ArrowRight,
  Compass,
  Stethoscope,
  HeartPulse,
  Activity,
  Baby,
  ShieldCheck,
  Microscope,
  HeartHandshake,
} from "lucide-react";
import { HajiraLogo } from "@/components/HajiraLogo";
import { DEPARTMENTS } from "@/data/hospitalData";

interface NavbarProps {
  onOpenBookingModal: (departmentId?: string, doctorId?: string) => void;
  onSelectDepartment?: (deptId: string) => void;
}

export function Navbar({ onOpenBookingModal, onSelectDepartment }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);

      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: "Our care", href: "#care" },
    { label: "About Hajira", href: "#about" },
    { label: "Our doctors", href: "#doctors" },
    { label: "Patient guide", href: "#guide" },
    { label: "Contact", href: "#contact" },
  ];

  const hospitalSections = [
    { title: "Our Areas of Care", desc: "8 specialized departments", targetId: "care" },
    { title: "Senior Medical Faculty", desc: "Consultants & GMC Professors", targetId: "doctors" },
    { title: "Patient Checklist", desc: "What to bring & 14-day policy", targetId: "guide" },
    { title: "About Hajira", desc: "Philosophy & clinical leadership", targetId: "about" },
    { title: "Care in Action", desc: "Unhurried, personal care moments", targetId: "care-in-action" },
    { title: "Here at Every Step", desc: "Step-by-step visit preparation", targetId: "every-step" },
    { title: "Appointment Request", desc: "Schedule or float to WhatsApp", targetId: "book" },
    { title: "Location & Contacts", desc: "Kanispora – Baramulla", targetId: "contact" },
  ];

  const handleJumpToDepartment = (deptId: string) => {
    onSelectDepartment?.(deptId);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    const target =
      document.getElementById(`dept-${deptId}`) || document.getElementById("care");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJumpToSection = (sectionId: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartPulse":
        return <HeartPulse className="w-4 h-4 text-[#1C382B]" />;
      case "Stethoscope":
        return <Stethoscope className="w-4 h-4 text-[#1C382B]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[#1C382B]" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-[#1C382B]" />;
      case "Baby":
        return <Baby className="w-4 h-4 text-[#1C382B]" />;
      case "Microscope":
        return <Microscope className="w-4 h-4 text-[#1C382B]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-4 h-4 text-[#1C382B]" />;
      default:
        return <Stethoscope className="w-4 h-4 text-[#1C382B]" />;
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E2DCD1] shadow-xs py-2.5"
          : "bg-[#FAF8F5]/98 backdrop-blur-xs border-b border-[#ECE7DE] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with gentle hover pulse */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1C382B] flex items-center justify-center text-white p-1.5 group-hover:scale-105 group-hover:bg-[#142920] transition-all duration-300 shadow-xs shrink-0">
            <HajiraLogo className="w-6 h-6 fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl sm:text-2xl font-normal tracking-tight text-[#18231E] leading-none group-hover:text-[#1C382B] transition-colors">
              Hajira Hospital
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-wide text-[#5A6D63] font-medium mt-1">
              Promoting Health and Smiles
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Animated Underlines and Dropdown */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Quick Jump Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                dropdownOpen
                  ? "bg-[#1C382B] text-white border-[#1C382B] shadow-xs"
                  : "bg-white/80 hover:bg-white text-[#1C382B] border-[#DDD5C8] hover:border-[#1C382B]/60"
              }`}
              aria-expanded={dropdownOpen}
              aria-label="Explore Specialties and Jump to Section"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Explore & Jump to</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2.5 w-[640px] bg-white border border-[#E3DDD2] rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="grid grid-cols-12 gap-6">
                  {/* Left Column: 8 Departments */}
                  <div className="col-span-7 border-r border-[#ECE7DE] pr-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#63746C]">
                        Specialized Departments (8)
                      </span>
                      <span className="text-[10px] text-[#86958E]">Click to jump</span>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5 max-h-[360px] overflow-y-auto pr-1">
                      {DEPARTMENTS.map((dept) => (
                        <button
                          key={dept.id}
                          onClick={() => handleJumpToDepartment(dept.id)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F4F7F4] text-left transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-[#E4DFD5] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#EAEFEA] transition-all">
                              {getDeptIcon(dept.iconName)}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-[#18231E] group-hover:text-[#1C382B] transition-colors leading-tight">
                                {dept.title}
                              </p>
                              <p className="text-[10px] text-[#718279] line-clamp-1">
                                {dept.description}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#A5B3AB] group-hover:text-[#1C382B] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Hospital Sections */}
                  <div className="col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#63746C]">
                          Quick Sections
                        </span>
                      </div>

                      <div className="space-y-1">
                        {hospitalSections.map((sec) => (
                          <button
                            key={sec.targetId}
                            onClick={() => handleJumpToSection(sec.targetId)}
                            className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#FAF8F5] text-left transition-colors group cursor-pointer"
                          >
                            <div>
                              <p className="text-xs font-semibold text-[#18231E] group-hover:text-[#1C382B] transition-colors leading-tight">
                                {sec.title}
                              </p>
                              <p className="text-[10px] text-[#718279]">{sec.desc}</p>
                            </div>
                            <ArrowRight className="w-3 h-3 text-[#A5B3AB] group-hover:text-[#1C382B] group-hover:translate-x-0.5 transition-all shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#ECE7DE]">
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          onOpenBookingModal();
                        }}
                        className="w-full flex items-center justify-center gap-1.5 bg-[#1C382B] hover:bg-[#12281E] text-white text-xs font-semibold py-2.5 rounded-xl transition-all shadow-xs"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book an Appointment</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-[#4D5C54] hover:text-[#18231E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1C382B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenBookingModal()}
            className="hidden sm:inline-flex items-center gap-2 bg-[#1C382B] hover:bg-[#12281E] text-white text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 opacity-80" />
            <span>Book an appointment</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 text-[#18231E] hover:bg-[#EFEAE2] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Reading / Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#2F523E] via-[#1C382B] to-[#3E6B56] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu with Full Dropdown Jump Capabilities */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E6E1D7] bg-[#FAF8F5] px-6 py-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {/* Quick Section Jump in Mobile */}
            <div className="pb-3 border-b border-[#E2DBD0]">
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#57695F] mb-1.5">
                Quick Jump to Section:
              </label>
              <select
                onChange={(e) => {
                  const val = e.target.value;
                  if (!val) return;
                  if (val.startsWith("dept-")) {
                    handleJumpToDepartment(val.replace("dept-", ""));
                  } else {
                    handleJumpToSection(val);
                  }
                }}
                className="w-full bg-white border border-[#DCD5C8] rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#18231E] focus:outline-hidden focus:ring-2 focus:ring-[#1C382B]"
              >
                <option value="">Select section or specialty to jump...</option>
                <optgroup label="🩺 Specialized Departments">
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={`dept-${dept.id}`}>
                      {dept.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="📌 Hospital Sections">
                  {hospitalSections.map((sec) => (
                    <option key={sec.targetId} value={sec.targetId}>
                      {sec.title}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#18231E] font-medium py-1.5 border-b border-[#ECE8E0]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#1C382B] text-white text-sm font-medium py-3 rounded-full cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

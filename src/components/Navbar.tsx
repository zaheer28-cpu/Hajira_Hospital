"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { HajiraLogo } from "@/components/HajiraLogo";

interface NavbarProps {
  onOpenBookingModal: (departmentId?: string, doctorId?: string) => void;
}

export function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { label: "Our care", href: "#care" },
    { label: "About Hajira", href: "#about" },
    { label: "Our doctors", href: "#doctors" },
    { label: "Patient guide", href: "#guide" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E2DCD1] shadow-xs py-2.5"
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

        {/* Desktop Navigation with animated underlines */}
        <nav className="hidden md:flex items-center gap-8">
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
            className="hidden sm:inline-flex items-center gap-2 bg-[#1C382B] hover:bg-[#12281E] text-white text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-3.5 h-3.5 opacity-80" />
            <span>Book an appointment</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="md:hidden p-2 text-[#18231E] hover:bg-[#EFEAE2] rounded-lg transition-colors"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6E1D7] bg-[#FAF8F5] px-6 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
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
                className="w-full flex items-center justify-center gap-2 bg-[#1C382B] text-white text-sm font-medium py-3 rounded-full"
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

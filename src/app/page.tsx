"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MomentsThatMatter } from "@/components/MomentsThatMatter";
import { AreasOfCare } from "@/components/AreasOfCare";
import { PatientResources } from "@/components/PatientResources";
import { AboutHajira } from "@/components/AboutHajira";
import { OurDoctors } from "@/components/OurDoctors";
import { CareInAction } from "@/components/CareInAction";
import { EveryStep } from "@/components/EveryStep";
import { NextStepBooking } from "@/components/NextStepBooking";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { DoctorBioModal } from "@/components/DoctorBioModal";
import { ResourceChecklistModal } from "@/components/ResourceChecklistModal";
import { Doctor } from "@/data/hospitalData";

export default function HomePage() {
  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDepartmentId, setBookingDepartmentId] = useState<string | null>(null);
  const [bookingDoctorId, setBookingDoctorId] = useState<string | null>(null);

  // Selected doctor modal
  const [selectedDoctorForBio, setSelectedDoctorForBio] = useState<Doctor | null>(null);

  // Selected department filter for doctors
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string | null>(null);

  // Patient checklist modal
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  const handleOpenBookingModal = (deptId?: string, docId?: string) => {
    setBookingDepartmentId(deptId || null);
    setBookingDoctorId(docId || null);
    setIsBookingModalOpen(true);
  };

  const handleSelectDepartment = (deptId: string) => {
    // If already selected, clear filter, else set and scroll gently to doctors
    if (selectedDepartmentId === deptId) {
      setSelectedDepartmentId(null);
    } else {
      setSelectedDepartmentId(deptId);
    }
  };

  const handleSelectDoctorForBio = (doctor: Doctor) => {
    setSelectedDoctorForBio(doctor);
  };

  const handleBookWithDoctor = (deptId: string, doctorId: string) => {
    setSelectedDoctorForBio(null);
    handleOpenBookingModal(deptId, doctorId);
  };

  const handleOpenChecklistModal = (resourceId?: string) => {
    setSelectedResourceId(resourceId || "what-to-bring");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18231E] flex flex-col font-sans selection:bg-[#1C382B] selection:text-white">
      {/* 1. Top Announcement Header */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* 4. Moments That Matter */}
        <MomentsThatMatter onOpenChecklistModal={handleOpenChecklistModal} />

        {/* 5. Our Areas of Care */}
        <AreasOfCare
          onSelectDepartment={handleSelectDepartment}
          onOpenBookingModal={handleOpenBookingModal}
          selectedDepartmentId={selectedDepartmentId}
        />

        {/* 6. Patient Resources */}
        <PatientResources onOpenChecklistModal={handleOpenChecklistModal} />

        {/* 7. This is Hajira (Brand & Philosophy) */}
        <AboutHajira onOpenBookingModal={handleOpenBookingModal} />

        {/* 8. Our Doctors */}
        <OurDoctors
          onSelectDoctor={handleSelectDoctorForBio}
          onOpenBookingModal={handleOpenBookingModal}
          selectedDepartmentId={selectedDepartmentId}
          onClearFilter={() => setSelectedDepartmentId(null)}
        />

        {/* 9. Care in Action */}
        <CareInAction />

        {/* 10. Here at Every Step (Evergreen Calm Walkthrough) */}
        <EveryStep onOpenChecklistModal={handleOpenChecklistModal} />

        {/* 11. Let's Take the Next Step (Interactive Form) */}
        <NextStepBooking onOpenBookingModal={handleOpenBookingModal} />
      </main>

      {/* 12. Detailed Hospital Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialDepartmentId={bookingDepartmentId}
        initialDoctorId={bookingDoctorId}
      />

      <DoctorBioModal
        doctor={selectedDoctorForBio}
        onClose={() => setSelectedDoctorForBio(null)}
        onBookWithDoctor={handleBookWithDoctor}
      />

      <ResourceChecklistModal
        resourceId={selectedResourceId}
        onClose={() => setSelectedResourceId(null)}
      />
    </div>
  );
}

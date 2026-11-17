"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import {
  HOSPITAL_INFO,
} from "@/data/hospitalData";
import { HajiraLogo } from "@/components/HajiraLogo";

interface MessageAction {
  label: string;
  type: "book-modal" | "whatsapp" | "call" | "scroll" | "select-dept";
  departmentId?: string;
  doctorId?: string;
  targetId?: string;
  url?: string;
}

interface ChatMessage {
  id: string;
  sender: "agent" | "user";
  text: string;
  timestamp: string;
  actions?: MessageAction[];
}

interface HajiraCareAgentProps {
  onOpenBookingModal: (departmentId?: string, doctorId?: string) => void;
  onSelectDepartment?: (deptId: string) => void;
}

export function HajiraCareAgent({
  onOpenBookingModal,
  onSelectDepartment,
}: HajiraCareAgentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageCounterRef = useRef<number>(100);

  const initialGreeting: ChatMessage = {
    id: "init-1",
    sender: "agent",
    text: `As-salamu alaykum / Hello! I am the **Hajira Hospital Care Assistant**.\n\nI can answer questions about our **doctors & faculties**, **specialized departments**, **hospital timings & location**, and guide you in **booking an appointment** (routing straight to our official WhatsApp desk). How can I assist you today?`,
    timestamp: "Just now",
    actions: [
      {
        label: "📅 Book an Appointment",
        type: "book-modal",
      },
      {
        label: "👨‍⚕️ Meet Senior Doctors",
        type: "scroll",
        targetId: "doctors",
      },
      {
        label: "🩺 Explore All 8 Specialties",
        type: "scroll",
        targetId: "care",
      },
      {
        label: "💬 WhatsApp Desk (+91 6005090515)",
        type: "whatsapp",
        url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I would like to enquire about consultation.")}`,
      },
    ],
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Hide greeting bubble after 10s if user hasn't clicked
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingBubble(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasUnread(false);
    setShowGreetingBubble(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleResetChat = () => {
    messageCounterRef.current += 1;
    setMessages([
      {
        ...initialGreeting,
        id: `init-${messageCounterRef.current}`,
        timestamp: "Just now",
      },
    ]);
  };

  const executeAction = (action: MessageAction) => {
    if (action.type === "book-modal") {
      onOpenBookingModal(action.departmentId, action.doctorId);
    } else if (action.type === "whatsapp") {
      const url =
        action.url ||
        `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else if (action.type === "call") {
      window.open(`tel:${HOSPITAL_INFO.phoneLandline}`, "_self");
    } else if (action.type === "scroll" && action.targetId) {
      const el = document.getElementById(action.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else if (action.type === "select-dept" && action.departmentId) {
      onSelectDepartment?.(action.departmentId);
      const el =
        document.getElementById(`dept-${action.departmentId}`) ||
        document.getElementById("care");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  // Natural Language Knowledge Engine
  const processQuery = (rawQuery: string): { response: string; actions?: MessageAction[] } => {
    const q = rawQuery.toLowerCase().trim();

    // 1. APPOINTMENT BOOKING
    if (
      q.includes("book") ||
      q.includes("appointment") ||
      q.includes("schedule") ||
      q.includes("slot") ||
      q.includes("consult") ||
      q.includes("visit hospital")
    ) {
      return {
        response: `We make booking seamless and direct:\n\n• **Instant Online Request**: Pick your department & doctor, choose your preferred date/time slot, and it will immediately generate your booking code.\n• **WhatsApp Routing**: Every appointment automatically floats to our coordination desk on **WhatsApp (+91 6005090515)** for instant confirmation.\n• **Prescription Policy**: Every prescription card is valid for **two full visits within 14 days**.\n\nWould you like to open our booking form or chat directly with our WhatsApp desk?`,
        actions: [
          {
            label: "📅 Open Appointment Form",
            type: "book-modal",
          },
          {
            label: "💬 WhatsApp Desk (+91 6005090515)",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I would like to book an appointment.")}`,
          },
          {
            label: "📞 Call Reception (01952-452973)",
            type: "call",
          },
        ],
      };
    }

    // 2. GYNAECOLOGY & OBSTETRICS
    if (
      q.includes("gynec") ||
      q.includes("gynaec") ||
      q.includes("obsteric") ||
      q.includes("pregnant") ||
      q.includes("pregnancy") ||
      q.includes("baby delivery") ||
      q.includes("maternity") ||
      q.includes("maternal") ||
      q.includes("women") ||
      q.includes("period") ||
      q.includes("menstrual") ||
      q.includes("antenatal")
    ) {
      return {
        response: `**Gynaecology & Obstetrics Care at Hajira Hospital**:\n\nOur department offers comprehensive and compassionate women's healthcare, led by our **Consultant Gynaecologist & Obstetrician (MBBS, MS Obstetrics & Gynaecology)**.\n\n**Services Provided**:\n• Antenatal, prenatal & post-natal maternal health\n• Routine and high-risk pregnancy wellness\n• Gynaecological screening, pelvic health & pelvic ultrasounds\n• Adolescent reproductive health & hormonal wellness\n\n**OPD Days**: Monday through Saturday.`,
        actions: [
          {
            label: "📅 Book Gynaecology Visit",
            type: "book-modal",
            departmentId: "gynaecology",
          },
          {
            label: "💬 Enquire via WhatsApp",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I want to book an appointment for Gynaecology & Obstetrics.")}`,
          },
          {
            label: "🔍 View Gynaecology on Page",
            type: "select-dept",
            departmentId: "gynaecology",
          },
        ],
      };
    }

    // 3. ENT & HEAD/NECK SURGERY / DR. SHAFKAT LONE
    if (
      q.includes("ent") ||
      q.includes("ear") ||
      q.includes("nose") ||
      q.includes("throat") ||
      q.includes("shafkat") ||
      q.includes("hearing") ||
      q.includes("sinus") ||
      q.includes("tonsil") ||
      q.includes("head and neck")
    ) {
      return {
        response: `**ENT & Head/Neck Surgery Department**:\n\nLed by **Prof. Dr. Shafkat Ah. Lone** (MBBS, MS ENT, Regd No. 4587):\n• **Position**: Head of Department of ENT at Government Medical College (GMC) Baramulla\n• **Experience**: 20+ years of premier surgical and clinical expertise\n• **Treatments**: Complex ear microsurgery, hearing restoration, nasal airway & sinus procedures, and head & neck surgical evaluations.\n• **OPD Days**: Monday, Wednesday, Friday.`,
        actions: [
          {
            label: "📅 Book with Prof. Dr. Shafkat Lone",
            type: "book-modal",
            departmentId: "ent-surgery",
            doctorId: "prof-dr-shafkat-ah-lone",
          },
          {
            label: "💬 WhatsApp Booking for ENT",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I would like to consult Prof. Dr. Shafkat Ah. Lone (ENT).")}`,
          },
          {
            label: "🔍 View ENT Department",
            type: "select-dept",
            departmentId: "ent-surgery",
          },
        ],
      };
    }

    // 4. GENERAL & LAPAROSCOPIC SURGERY / DR. SHAKEEB / DR. LUBNA / DR. AABID
    if (
      q.includes("laparoscop") ||
      q.includes("surgery") ||
      q.includes("surgeon") ||
      q.includes("gallbladder") ||
      q.includes("hernia") ||
      q.includes("appendix") ||
      q.includes("shakeeb") ||
      q.includes("lubna") ||
      q.includes("aabid")
    ) {
      return {
        response: `**General & Laparoscopic Surgery Team**:\n\n• **Dr. Shakeeb Nabi Lone** (MBBS, MS, FMAS): Fellowship in Minimal Access Surgery. Expert in advanced keyhole (laparoscopic) gallbladder, hernia, and day-care digestive procedures (Tue, Thu, Sat).\n• **Dr. Lubna Rashid** (MBBS, MS): Senior Consultant General Surgeon from SMHS Hospital & J&K Health Services (Mon, Wed, Fri).\n• **Dr. Aabid Hussain Wani** (MBBS, MS): Assistant Professor, Department of Surgery GMC Baramulla (Tue, Thu, Fri).\n\nWe provide rapid recovery, day-care surgical packages, and minimal surgical scarring.`,
        actions: [
          {
            label: "📅 Book Surgical Consultation",
            type: "book-modal",
            departmentId: "general-surgery",
          },
          {
            label: "💬 Float to WhatsApp",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I need an appointment for General / Laparoscopic Surgery.")}`,
          },
          {
            label: "🔍 View Surgical Specialty",
            type: "select-dept",
            departmentId: "general-surgery",
          },
        ],
      };
    }

    // 5. CARDIOLOGY & HEART CARE / DR. MUSTAFA BASHIR
    if (
      q.includes("cardio") ||
      q.includes("heart") ||
      q.includes("mustafa") ||
      q.includes("bp") ||
      q.includes("blood pressure") ||
      q.includes("hypertension") ||
      q.includes("ecg") ||
      q.includes("chest pain")
    ) {
      const isUrgent = q.includes("severe chest pain") || q.includes("heart attack");
      return {
        response: `${isUrgent ? "⚠️ **URGENT**: If experiencing acute, radiating chest pressure or difficulty breathing, visit our emergency stabilization desk immediately or call emergency services!\n\n" : ""}**Cardiology & Heart Care Department**:\n\nLed by **Dr. Mustafa Bashir** (MBBS, MD SKIMS, DM/Dr NB Cardiology GMC Srinagar):\n• **Position**: Assistant Professor, Department of Cardiology at GMC Baramulla\n• **Specialization**: Interventional cardiology, acute coronary evaluation, hypertension management, ECG and cardiovascular wellness diagnostics.\n• **OPD Days**: Monday, Wednesday, Friday.`,
        actions: [
          {
            label: "📅 Book Cardiology Visit",
            type: "book-modal",
            departmentId: "cardiology",
            doctorId: "dr-mustafa-bashir",
          },
          {
            label: "💬 WhatsApp Cardiology Desk",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I would like to book an appointment with Dr. Mustafa Bashir (Cardiology).")}`,
          },
          {
            label: "📞 Call Hospital (01952-452973)",
            type: "call",
          },
        ],
      };
    }

    // 6. PAEDIATRICS / CHILD HEALTH / PROF. SUHAIL AHMAD
    if (
      q.includes("child") ||
      q.includes("pediatric") ||
      q.includes("paediatric") ||
      q.includes("baby") ||
      q.includes("infant") ||
      q.includes("suhail") ||
      q.includes("newborn") ||
      q.includes("kids")
    ) {
      return {
        response: `**Paediatrics & Child Health Department**:\n\nLed by **Prof. Dr. Suhail Ahmad** (MBBS, MD Paediatrics, Regd No. 1417):\n• **Position**: Professor & Head of Department of Paediatrics at GMC Baramulla\n• **Scope**: Compassionate, unhurried consultations for infants, toddlers, growing children, and adolescents.\n• **Services**: Well-child visits, developmental checks, childhood asthma, acute infections, and newborn care.\n• **OPD Days**: Monday, Tuesday, Thursday, Saturday.`,
        actions: [
          {
            label: "📅 Book Pediatric Consultation",
            type: "book-modal",
            departmentId: "paediatrics",
            doctorId: "prof-dr-suhail-ahmad",
          },
          {
            label: "💬 WhatsApp Child Care Desk",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I want to book an appointment with Prof. Dr. Suhail Ahmad (Paediatrics).")}`,
          },
          {
            label: "🔍 View Paediatrics on Page",
            type: "select-dept",
            departmentId: "paediatrics",
          },
        ],
      };
    }

    // 7. ORTHOPAEDICS / DR. AZHAR / BONES & JOINTS
    if (
      q.includes("ortho") ||
      q.includes("bone") ||
      q.includes("joint") ||
      q.includes("knee") ||
      q.includes("fracture") ||
      q.includes("azhar") ||
      q.includes("arthritis") ||
      q.includes("spine") ||
      q.includes("back pain")
    ) {
      return {
        response: `**Orthopaedics & Joint Care Department**:\n\nLed by **Dr. Azhar** (MS Orthopaedics, Regd No. 13228):\n• **Scope**: Specialist treatment for fractures, knee & shoulder arthritis, spinal aches, tendon injuries, and sports trauma.\n• **Care Approach**: Focus on restoring comfortable mobility, joint health preservation, and post-injury rehabilitation.\n• **OPD Days**: Tuesday, Thursday, Saturday.`,
        actions: [
          {
            label: "📅 Book with Dr. Azhar",
            type: "book-modal",
            departmentId: "orthopaedics",
            doctorId: "dr-azhar",
          },
          {
            label: "💬 WhatsApp Orthopaedic Desk",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I would like to book with Dr. Azhar (Orthopaedics).")}`,
          },
          {
            label: "🔍 View Orthopaedics on Page",
            type: "select-dept",
            departmentId: "orthopaedics",
          },
        ],
      };
    }

    // 8. PULMONOLOGY / CHEST MEDICINE / DR. SHAHID MAJID
    if (
      q.includes("chest") ||
      q.includes("lung") ||
      q.includes("pulmono") ||
      q.includes("respiratory") ||
      q.includes("asthma") ||
      q.includes("cough") ||
      q.includes("breath") ||
      q.includes("shahid") ||
      q.includes("bronchitis")
    ) {
      return {
        response: `**Chest & Respiratory Medicine (Pulmonology)**:\n\nLed by **Dr. Shahid Majid** (MBBS, MD Chest Medicine, Member American Thoracic Society):\n• **Position**: Registrar, Chest Disease Hospital Srinagar\n• **Focus**: Chronic cough, asthma, allergic bronchitis, COPD, post-viral pulmonary recovery, and chest diagnostics.\n• **OPD Days**: Monday, Wednesday, Saturday.`,
        actions: [
          {
            label: "📅 Book with Dr. Shahid Majid",
            type: "book-modal",
            departmentId: "pulmonology",
            doctorId: "dr-shahid-majid",
          },
          {
            label: "💬 WhatsApp Chest Clinic",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I want an appointment with Dr. Shahid Majid (Chest & Respiratory).")}`,
          },
          {
            label: "🔍 View Pulmonology on Page",
            type: "select-dept",
            departmentId: "pulmonology",
          },
        ],
      };
    }

    // 9. INTERNAL MEDICINE / DR. JAVID MONGA
    if (
      q.includes("medicine") ||
      q.includes("physician") ||
      q.includes("monga") ||
      q.includes("diabetes") ||
      q.includes("sugar") ||
      q.includes("fever") ||
      q.includes("infection") ||
      q.includes("general checkup")
    ) {
      return {
        response: `**Internal & General Medicine**:\n\nLed by **Dr. Javid Monga** (Internal Medicine Specialist):\n• **Background**: Ex-Physician Taif Saudi Arabia & Ex-Senior Resident Medicines GMC Baramulla.\n• **Scope**: Comprehensive adult medical diagnosis, diabetes and metabolic disease balance, viral illness & fever care, and routine full-body checkups.\n• **OPD Days**: Monday, Tuesday, Wednesday, Thursday, Saturday.`,
        actions: [
          {
            label: "📅 Book with Dr. Javid Monga",
            type: "book-modal",
            departmentId: "general-medicine",
            doctorId: "dr-javid-monga",
          },
          {
            label: "💬 WhatsApp Medicine Desk",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I want to consult Dr. Javid Monga (Internal Medicine).")}`,
          },
          {
            label: "🔍 View Internal Medicine",
            type: "select-dept",
            departmentId: "general-medicine",
          },
        ],
      };
    }

    // 10. LIST OF ALL DOCTORS
    if (
      q.includes("doctor") ||
      q.includes("faculty") ||
      q.includes("specialist") ||
      q.includes("who is available")
    ) {
      return {
        response: `**Hajira Hospital Senior Medical Faculty**:\n\n1. **Prof. Dr. Shafkat Ah. Lone** – Head & Neck Surgeon, HOD ENT GMC Baramulla\n2. **Dr. Shakeeb Nabi Lone** – Consultant Minimal Access & Laparoscopic Surgeon\n3. **Consultant Gynaecologist & Obstetrician** – Women's Health & Maternal Care\n4. **Dr. Mustafa Bashir** – Interventional Cardiologist, Asst. Prof GMC Baramulla\n5. **Prof. Dr. Suhail Ahmad** – HOD Department of Paediatrics GMC Baramulla\n6. **Dr. Lubna Rashid** – Senior Consultant General Surgeon (SMHS)\n7. **Dr. Azhar** – Orthopaedic Specialist & Joint Care\n8. **Dr. Shahid Majid** – Pulmonologist, Member American Thoracic Society\n9. **Dr. Aabid Hussain Wani** – Asst. Prof General Surgery GMC Baramulla\n10. **Dr. Javid Monga** – Internal Medicine (Ex. Physician Taif KSA)`,
        actions: [
          {
            label: "👨‍⚕️ View Doctor Directory on Page",
            type: "scroll",
            targetId: "doctors",
          },
          {
            label: "📅 Book an Appointment",
            type: "book-modal",
          },
        ],
      };
    }

    // 11. LOCATION, ADDRESS & DIRECTIONS
    if (
      q.includes("location") ||
      q.includes("address") ||
      q.includes("where") ||
      q.includes("directions") ||
      q.includes("kanispora") ||
      q.includes("baramulla") ||
      q.includes("parking")
    ) {
      return {
        response: `**Hajira Hospital Location**:\n\n📍 **Address**: Near J&K Bank / Petrol Pump, Kanispora – Baramulla, Jammu & Kashmir.\n\n• **Landmarks**: Right adjacent to the J&K Bank and Petrol Pump on the main Kanispora stretch.\n• **Accessibility**: Direct highway connectivity, easy wheelchair access, and convenient patient parking.\n• **Regd. No.**: CMO/CE/269.`,
        actions: [
          {
            label: "📍 View Contact Section",
            type: "scroll",
            targetId: "contact",
          },
          {
            label: "📞 Call for Directions (01952-452973)",
            type: "call",
          },
          {
            label: "💬 WhatsApp Location Assistance",
            type: "whatsapp",
            url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, please send me your location pin.")}`,
          },
        ],
      };
    }

    // 12. TIMINGS, HOURS & 24x7 PHARMACY
    if (
      q.includes("time") ||
      q.includes("timing") ||
      q.includes("hour") ||
      q.includes("open") ||
      q.includes("close") ||
      q.includes("sunday") ||
      q.includes("pharmacy") ||
      q.includes("emergency")
    ) {
      return {
        response: `**Hospital Operating Hours**:\n\n• **OPD Consultation Hours**: Monday – Sunday · **8:00 AM – 8:00 PM**\n• **24x7 Services**: 24x7 In-house Emergency Pharmacy & Critical Care Emergency Stabilization\n• **Prescription Policy**: 14-day validity (valid for two full visits)\n\nOur pharmacy is fully stocked with authentic surgical medicines, pediatric formulations, and chronic prescriptions right on premises.`,
        actions: [
          {
            label: "📅 Book an Appointment",
            type: "book-modal",
          },
          {
            label: "📞 Call Reception (01952-452973)",
            type: "call",
          },
        ],
      };
    }

    // 13. PRESCRIPTION POLICY & WHAT TO BRING
    if (
      q.includes("policy") ||
      q.includes("14 day") ||
      q.includes("valid") ||
      q.includes("bring") ||
      q.includes("checklist") ||
      q.includes("document") ||
      q.includes("companion")
    ) {
      return {
        response: `**Hajira Hospital Patient Policies & Guide**:\n\n1. **14-Day Reassurance Policy**: Your Hajira Hospital prescription card is valid for **two full visits within 14 days**.\n2. **What to Bring Checklist**:\n   • Government photo ID (Aadhaar / Voter ID)\n   • Hajira Hospital prescription card\n   • Current medication strips or bottles\n   • Recent blood tests, X-rays, ultrasound scans, or previous discharge slips\n3. **Companions Welcome**: Family members are warmly encouraged to accompany patients into consultation rooms. Heated waiting areas are available.`,
        actions: [
          {
            label: "📋 View Patient Checklist on Page",
            type: "scroll",
            targetId: "guide",
          },
          {
            label: "📅 Book a Consultation",
            type: "book-modal",
          },
        ],
      };
    }

    // 14. DEFAULT COURTEOUS RESPONSE
    return {
      response: `Thank you for your question! At Hajira Hospital (Kanispora – Baramulla), we are committed to **"Promoting Health and Smiles"** with compassionate, unhurried care.\n\nHere is how I can guide you right now:\n\n• **Specialties**: We cover Gynaecology, ENT & Head/Neck Surgery, Laparoscopic Surgery, Cardiology, Paediatrics, Orthopaedics, Pulmonology, and Internal Medicine.\n• **Appointments**: All bookings float directly to WhatsApp (**+91 6005090515**) for confirmation.\n• **Contact Desk**: Landline 01952-452973 · Hours: Mon–Sun 8am–8pm (24x7 Pharmacy).\n\nWhat would you like to explore next?`,
      actions: [
        {
          label: "📅 Book an Appointment",
          type: "book-modal",
        },
        {
          label: "👨‍⚕️ Meet Doctors",
          type: "scroll",
          targetId: "doctors",
        },
        {
          label: "💬 Chat on WhatsApp (+91 6005090515)",
          type: "whatsapp",
          url: `https://wa.me/91${HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Hajira Hospital, I have an inquiry.")}`,
        },
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    messageCounterRef.current += 1;
    const userMsgId = `user-${messageCounterRef.current}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: "user",
      text,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Realistic empathetic delay
    setTimeout(() => {
      const { response, actions } = processQuery(text);
      messageCounterRef.current += 1;
      const agentMsg: ChatMessage = {
        id: `agent-${messageCounterRef.current}`,
        sender: "agent",
        text: response,
        timestamp: "Just now",
        actions,
      };
      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickPromptChips = [
    "📅 Book an appointment",
    "🩺 What departments do you offer?",
    "👨‍⚕️ Meet senior doctors",
    "⏰ Hospital hours & location",
    "🤰 Gynaecology & maternity care",
    "📋 14-day prescription policy",
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Soft Welcoming Speech Bubble (Auto-fades or dismissible) */}
        {!isOpen && showGreetingBubble && (
          <div className="bg-white border border-[#E1DBD0] text-[#18231E] text-xs px-4 py-2.5 rounded-2xl shadow-xl max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-300 relative group">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowGreetingBubble(false);
              }}
              className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-[#EAE5DC] text-[#47574F] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px]"
              aria-label="Dismiss message"
            >
              ✕
            </button>
            <div className="flex items-center gap-1.5 font-semibold text-[#1C382B] mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Hajira Care Assistant</span>
            </div>
            <p className="text-[11px] text-[#55635C] leading-snug">
              Have questions about our doctors, departments, or need an appointment? Click here to chat!
            </p>
          </div>
        )}

        {/* The Action Button */}
        <button
          onClick={handleOpenChat}
          aria-label="Open Hajira Care Assistant"
          className="group relative flex items-center gap-2.5 bg-[#1C382B] hover:bg-[#12281E] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
        >
          {/* Glowing Beacon */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>

          <div className="w-6 h-6 flex items-center justify-center">
            <HajiraLogo className="w-5 h-5 fill-white" />
          </div>

          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            Ask Hajira Agent
          </span>

          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white animate-bounce" />
          )}
        </button>
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 flex items-end sm:items-auto justify-center sm:justify-end">
          {/* Backdrop on mobile */}
          <div
            onClick={handleCloseChat}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden z-0"
          />

          <div
            className="relative z-10 w-full sm:w-[410px] h-[92vh] sm:h-[620px] max-h-[92vh] bg-[#FAF8F5] border border-[#E3DDD2] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#1C382B] text-white px-5 py-4 flex items-center justify-between shrink-0 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center p-1.5 border border-white/20 shrink-0">
                  <HajiraLogo className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial text-lg text-white font-medium leading-none">
                      Hajira Care Assistant
                    </h3>
                    <span className="flex items-center gap-1 text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Online
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A5BCB0] mt-0.5">
                    Hospital Knowledge · Doctors · Direct WhatsApp Booking
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset Conversation"
                  aria-label="Reset Conversation"
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCloseChat}
                  title="Close Assistant"
                  aria-label="Close Assistant"
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Prompt Scroll Bar */}
            <div className="bg-[#F0ECE4] border-b border-[#E3DDD2] px-3 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 text-xs">
              {quickPromptChips.map((chip, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(chip)}
                  className="shrink-0 bg-white hover:bg-[#1C382B] hover:text-white text-[#2B3B32] border border-[#DDD5C8] rounded-full px-3 py-1 text-[11px] font-medium transition-all shadow-2xs hover:shadow-xs active:scale-95"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-end gap-2 max-w-[88%]">
                    {msg.sender === "agent" && (
                      <div className="w-7 h-7 rounded-full bg-[#1C382B] text-white flex items-center justify-center shrink-0 p-1 mb-1 shadow-2xs">
                        <HajiraLogo className="w-4 h-4 fill-white" />
                      </div>
                    )}

                    <div
                      className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-[13px] leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#1C382B] text-white rounded-br-xs shadow-xs"
                          : "bg-white text-[#18231E] border border-[#E3DDD2] rounded-bl-xs shadow-xs"
                      }`}
                    >
                      {/* Render formatted message text */}
                      <div className="whitespace-pre-line space-y-1.5 font-normal">
                        {msg.text.split("\n\n").map((paragraph, pIdx) => (
                          <p key={pIdx}>
                            {paragraph.split("**").map((chunk, cIdx) =>
                              cIdx % 2 === 1 ? (
                                <strong key={cIdx} className="font-semibold text-[#0E1F17]">
                                  {chunk}
                                </strong>
                              ) : (
                                chunk
                              )
                            )}
                          </p>
                        ))}
                      </div>

                      {/* Interactive Actions within the bubble */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mt-3.5 pt-3 border-t border-[#ECE7DE] flex flex-wrap gap-2">
                          {msg.actions.map((act, actIdx) => (
                            <button
                              key={actIdx}
                              onClick={() => executeAction(act)}
                              className="inline-flex items-center gap-1.5 bg-[#FAF8F5] hover:bg-[#1C382B] text-[#1C382B] hover:text-white border border-[#D8D2C6] hover:border-[#1C382B] px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 active:scale-95 shadow-2xs cursor-pointer"
                            >
                              <span>{act.label}</span>
                              <ArrowRight className="w-3 h-3 opacity-70" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] text-[#86958E] px-9 mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 max-w-[85%] animate-in fade-in">
                  <div className="w-7 h-7 rounded-full bg-[#1C382B] text-white flex items-center justify-center shrink-0 p-1">
                    <HajiraLogo className="w-4 h-4 fill-white" />
                  </div>
                  <div className="bg-white border border-[#E3DDD2] rounded-2xl rounded-bl-xs px-4 py-3 flex items-center gap-1.5 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#1C382B] animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-[#1C382B] animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#1C382B] animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-[#ECE7DE] shrink-0">
              <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#DDD5C8] focus-within:border-[#1C382B] focus-within:ring-2 focus-within:ring-[#1C382B]/15 rounded-2xl px-3 py-1.5 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question or request an appointment..."
                  className="flex-1 bg-transparent border-none text-xs sm:text-[13px] text-[#18231E] placeholder:text-[#84948C] focus:outline-hidden py-1.5"
                />

                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    inputValue.trim()
                      ? "bg-[#1C382B] text-white shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                      : "bg-[#EAE5DC] text-[#9EAFA5] cursor-not-allowed"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] text-[#8C9C93] text-center mt-2 leading-tight">
                Hajira Care Desk · 24x7 WhatsApp: <strong>{HOSPITAL_INFO.whatsappDisplay}</strong> · Ph: {HOSPITAL_INFO.phoneLandline}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

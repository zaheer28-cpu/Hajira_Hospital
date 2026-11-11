export interface Doctor {
  id: string;
  name: string;
  departmentId: string;
  departmentName: string;
  tagline: string;
  image?: string;
  credentials: string;
  experience: string;
  education: string;
  languages: string[];
  bio: string;
  regdNo?: string;
  availableDays: string[];
}

export interface Department {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
}

export const HOSPITAL_INFO = {
  name: "Hajira Hospital",
  tagline: "Promoting Health and Smiles",
  secondaryTagline: "A little more care. A lot more human.",
  regdNo: "CMO/CE/269",
  address: "Near J&K Bank / Petrol Pump, Kanispora – Baramulla, Jammu & Kashmir",
  shortAddress: "Kanispora – Baramulla",
  phoneLandline: "01952-452973",
  phoneCell: "+91 9186022619",
  whatsappNumber: "6005090515",
  whatsappDisplay: "+91 6005090515",
  email: "shafkatlone786@gmail.com",
  prescriptionPolicy: "Valid for two visits, within 14 days",
  hours: "Monday – Saturday · 8:00 am – 6:00 pm",
};

export const DEPARTMENTS: Department[] = [
  {
    id: "gynaecology",
    title: "Gynaecology & Obstetrics",
    description: "Comprehensive women’s health, compassionate antenatal care, maternal wellness, and advanced gynaecological consultations.",
    iconName: "HeartPulse",
    bulletPoints: [
      "Antenatal, prenatal & post-natal maternal care",
      "Comprehensive women’s wellness & hormonal health",
      "Gynaecological screening, ultrasound & pelvic health",
    ],
  },
  {
    id: "ent-surgery",
    title: "ENT & Head/Neck Surgery",
    description: "Advanced surgical & medical care for ear, nose, throat, and head & neck disorders.",
    iconName: "Stethoscope",
    bulletPoints: [
      "Head & neck surgical consultation",
      "Ear microsurgery & hearing evaluation",
      "Sinusitis & nasal airway surgery",
    ],
  },
  {
    id: "general-surgery",
    title: "General & Laparoscopic Surgery",
    description: "State-of-the-art minimal access and laparoscopic procedures for digestive and surgical diseases.",
    iconName: "ShieldCheck",
    bulletPoints: [
      "Laparoscopic gallbladder & hernia surgery",
      "Digestive & gastrointestinal procedures",
      "Minimal access day-care surgery",
    ],
  },
  {
    id: "cardiology",
    title: "Cardiology & Heart Care",
    description: "Expert cardiac evaluation, preventative heart health, and interventional clinical consultation.",
    iconName: "Activity",
    bulletPoints: [
      "Hypertension & coronary artery evaluation",
      "Preventive cardiology consultations",
      "ECG & cardiovascular diagnostics",
    ],
  },
  {
    id: "paediatrics",
    title: "Paediatrics & Child Health",
    description: "Compassionate, expert medical care for infants, growing children, and adolescents.",
    iconName: "Baby",
    bulletPoints: [
      "Childhood well-visits & developmental reviews",
      "Acute pediatric infections & asthma",
      "Parental guidance & newborn care",
    ],
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics & Joint Care",
    description: "Specialized care for bones, joints, fractures, sports injuries, and arthritis management.",
    iconName: "ShieldCheck",
    bulletPoints: [
      "Fracture care & trauma management",
      "Arthritis & knee/shoulder joint care",
      "Spine, posture & mobility rehabilitation",
    ],
  },
  {
    id: "pulmonology",
    title: "Chest & Respiratory Medicine",
    description: "Comprehensive diagnostics and treatment for lungs, chronic cough, asthma, and breathing disorders.",
    iconName: "Microscope",
    bulletPoints: [
      "Asthma, COPD & chronic bronchitis",
      "Allergy testing & respiratory therapy",
      "Chest diagnostic evaluations",
    ],
  },
  {
    id: "general-medicine",
    title: "Internal & General Medicine",
    description: "Comprehensive adult medical diagnosis, chronic disease care, and preventive health reviews.",
    iconName: "HeartHandshake",
    bulletPoints: [
      "Diabetes & metabolic disease balance",
      "Fever, infections & viral illness care",
      "Routine comprehensive health checkups",
    ],
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: "prof-dr-shafkat-ah-lone",
    name: "Prof. Dr. Shafkat Ah. Lone",
    departmentId: "ent-surgery",
    departmentName: "ENT & Head/Neck Surgery",
    tagline: "Head & Neck Surgeon · HOD Department of ENT GMC Baramulla",
    image: "",
    credentials: "MBBS, MS (ENT)",
    regdNo: "4587",
    experience: "20+ years surgical expertise",
    education: "Master of Surgery (ENT), HOD ENT at GMC Baramulla",
    languages: ["Kashmiri", "Urdu", "English", "Hindi"],
    bio: "Prof. Dr. Shafkat Ah. Lone is a renowned Head & Neck Surgeon and Head of Department of ENT at Government Medical College Baramulla. He brings decades of specialized operative and clinical experience in complex ear, nose, throat, and head-neck conditions.",
    availableDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    id: "Dr. Rafia Aziz",
    name: "Dr. Rafia Aziz",
    departmentId: "gynaecology",
    departmentName: "Gynaecology & Obstetrics",
    tagline: "Consultant Obstetrician & Gynaecologist · Women’s Health Specialist",
    image: "",
    credentials: "MBBS, MS (Obstetrics & Gynaecology)",
    experience: "10+ yrs experience Specialized in Maternal, Antenatal & Gynaecological Health",
    education: "MS Obstetrics & Gynaecology",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "Offering compassionate, specialized healthcare for women at every stage of life — from antenatal counseling, pregnancy wellness, and reproductive health to gynaecological screening and menopause support.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  {
    id: "dr-shakeeb-nabi-lone",
    name: "Dr. Shakeeb Nabi Lone",
    departmentId: "general-surgery",
    departmentName: "General & Laparoscopic Surgery",
    tagline: "Consultant General & Laparoscopic Surgeon · Minimal Access Surgery",
    image: "",
    credentials: "MBBS, MS, FMAS",
    regdNo: "10544",
    experience: "10+ yrs experience in Minimal Access Surgery & Digestive Disease",
    education: "MS General Surgery, Fellowship Minimal Access Surgery (FMAS)",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "Dr. Shakeeb Nabi Lone specializes in advanced laparoscopic (keyhole) procedures and digestive diseases, providing faster patient recovery, minimal scarring, and modern surgical care.",
    availableDays: ["Saturday"],
  },
  {
    id: "dr-mustafa-bashir",
    name: "Dr. Mustafa Bashir",
    departmentId: "cardiology",
    departmentName: "Cardiology & Heart Care",
    tagline: "Interventional Cardiologist · Assistant Prof. Dept of Cardiology GMC Baramulla",
    image: "",
    credentials: "MBBS, MD (SKIMS), DM/Dr NB (Cardiology GMC Srinagar)",
    regdNo: "8344",
    experience: "Assistant Professor, Dept of Cardiology GMC Baramulla",
    education: "MD Internal Medicine & Pulmonology (SKIMS), DM/Dr NB Cardiology (GMC Srinagar)",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "Dr. Mustafa Bashir is a premier Interventional Cardiologist with super-specialty training from GMC Srinagar and SKIMS. He manages acute coronary care, hypertension, and long-term cardiac wellness.",
    availableDays: ["Monday", "Wednesday", "Friday"],
  },
  {
    id: "prof-dr-suhail-ahmad",
    name: "Prof. Dr. Suhail Ahmad",
    departmentId: "paediatrics",
    departmentName: "Paediatrics & Child Health",
    tagline: "HOD Department of Paediatric GMC Baramulla",
    image: "",
    credentials: "MBBS, MD",
    regdNo: "1417",
    experience: "Professor & Head of Paediatrics",
    education: "MD Paediatrics, HOD Paediatrics at GMC Baramulla",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "Leading pediatric care across the region, Prof. Dr. Suhail Ahmad provides attentive, empathetic consultations for children of all ages, from critical newborn guidance to adolescent growth.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
  },
  {
    id: "dr-lubna-rashid",
    name: "Dr. Lubna Rashid",
    departmentId: "general-surgery",
    departmentName: "General Surgery",
    tagline: "Senior Consultant General Surgeon (From SMHS) · J&K Health Services",
    image: "",
    credentials: "MBBS, MS",
    regdNo: "6186",
    experience: "Senior Consultant, SMHS & J&K Health Services",
    education: "MS General Surgery (SMHS Hospital)",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "Dr. Lubna Rashid is an experienced Senior Consultant General Surgeon from SMHS Hospital, with extensive clinical expertise across comprehensive elective and emergency surgical care.",
    availableDays: ["Monday", "Wednesday", "Friday"],
  },
  {
    id: "dr-azhar",
    name: "Dr. Azhar",
    departmentId: "orthopaedics",
    departmentName: "Orthopaedics & Joint Care",
    tagline: "Orthopaedic Specialist · Bone & Joint Care",
    image: "",
    credentials: "MS Orthopaedics",
    regdNo: "13228",
    experience: "Specialist Orthopaedic Surgeon",
    education: "Master of Surgery in Orthopaedics",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "Dr. Azhar treats bone fractures, chronic joint aches, arthritis, tendon injuries, and spinal discomfort, focusing on restoring comfortable mobility and joint health.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
  },
  {
    id: "dr-shahid-majid",
    name: "Dr. Shahid Majid",
    departmentId: "pulmonology",
    departmentName: "Chest & Respiratory Medicine",
    tagline: "Member American Thoracic Society · Registrar Chest Disease Hospital Srinagar",
    image: "",
    credentials: "MBBS, MD",
    regdNo: "7109",
    experience: "Registrar, Chest Disease Hospital Srinagar",
    education: "MD Chest & Respiratory Medicine, Member ATS",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "An active Member of the American Thoracic Society, Dr. Shahid Majid is an expert in pulmonary medicine, managing chronic respiratory conditions, asthma, seasonal allergic bronchitis, and post-viral lung recovery.",
    availableDays: ["Monday", "Wednesday", "Saturday"],
  },
  {
    id: "dr-aabid-hussain-wani",
    name: "Dr. Aabid Hussain Wani",
    departmentId: "general-surgery",
    departmentName: "General Surgery",
    tagline: "Assistant Prof. Department of General Surgery GMC Baramulla",
    image: "",
    credentials: "MBBS, MS",
    regdNo: "1846",
    experience: "Assistant Professor, GMC Baramulla",
    education: "MS General Surgery",
    languages: ["Kashmiri", "Urdu", "English"],
    bio: "Dr. Aabid Hussain Wani combines active academic teaching at GMC Baramulla with extensive clinical surgical practice, offering modern surgical management and pre-/post-operative care.",
    availableDays: ["Tuesday", "Thursday", "Friday"],
  },
  {
    id: "dr-javid-monga",
    name: "Dr. Javid Monga",
    departmentId: "general-medicine",
    departmentName: "Internal Medicine",
    tagline: "Ex. Physician Taif Saudi Arabia & Ex. Sr. Resident Medicines GMC Baramulla",
    image: "",
    credentials: "Physician & Internal Medicine Specialist",
    experience: "International & Senior Residency Clinical Practice",
    education: "Ex. Senior Resident GMC Baramulla, Ex. Physician Taif (KSA)",
    languages: ["Kashmiri", "Urdu", "Arabic", "English"],
    bio: "With valuable international clinical experience in Taif, Saudi Arabia, and senior residency at GMC Baramulla, Dr. Javid Monga provides comprehensive internal medicine consultations and chronic disease management.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
  },
];

export function getDoctorInitials(name: string): string {
  const clean = name.replace(/^(Prof\.|Dr\.|Ah\.|Mr\.|Mrs\.|Ms\.)\s*/gi, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return clean.slice(0, 2).toUpperCase() || "MD";
}

export function createWhatsAppAppointmentUrl(details: {
  fullName: string;
  phoneNumber: string;
  email?: string;
  departmentName: string;
  doctorName?: string;
  date?: string;
  timeSlot?: string;
  notes?: string;
  bookingRef: string;
}): string {
  const lines = [
    `*New Appointment Request · Hajira Hospital*`,
    `🔖 *Booking Ref:* ${details.bookingRef}`,
    ``,
    `👤 *Patient Name:* ${details.fullName}`,
    `📞 *Phone:* ${details.phoneNumber}`,
    details.email ? `📧 *Email:* ${details.email}` : null,
    `🩺 *Department:* ${details.departmentName}`,
    `👨‍⚕️ *Doctor Preference:* ${details.doctorName || "First available specialist"}`,
    `📅 *Preferred Date:* ${details.date || "Next available clinic date"}`,
    `⏰ *Time Slot:* ${details.timeSlot || "Standard Clinic Window"}`,
    details.notes ? `📝 *Reason/Symptoms:* ${details.notes}` : null,
    ``,
    `🏥 *Hajira Hospital*, Kanispora – Baramulla (Regd. No. CMO/CE/269)`,
    `✦ *Policy:* Prescription valid for two visits within 14 days`,
  ].filter(Boolean);

  const cleanPhone = HOSPITAL_INFO.whatsappNumber.replace(/[^0-9]/g, "");
  // Prepend 91 for India if not already present
  const targetNumber = cleanPhone.startsWith("91") && cleanPhone.length > 10 ? cleanPhone : `91${cleanPhone}`;
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const PATIENT_RESOURCES = [
  {
    id: "what-to-bring",
    title: "What to bring",
    summary: "A simple checklist for medicines, questions and anything else that helps us understand your visit.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    items: [
      "Government photo identification (Aadhaar Card, Passport, or Voter ID)",
      "Hajira Hospital Prescription Card (Valid for two visits within 14 days)",
      "All current medication strips, inhalers, or dosage bottles",
      "Recent blood test reports, X-rays, ultrasound scans, or previous discharge slips",
      "Written list of 2–3 questions you want your doctor to address",
    ],
  },
  {
    id: "bringing-someone",
    title: "Bringing someone with you",
    summary: "If you’d like a family member or companion to join your visit, we can help you plan ahead.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    items: [
      "Family companions are warmly welcomed inside all private consultation rooms",
      "Comfortable seating and heated waiting areas in Kanispora clinic",
      "Clear language support in Kashmiri, Urdu, and English",
      "Companions can help review treatment plans and note pharmacy prescriptions",
    ],
  },
  {
    id: "after-your-visit",
    title: "After your visit",
    summary: "Clear next steps, follow-up guidance and our 14-day policy reassurance.",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=800&q=80",
    items: [
      "Your prescription is valid for two complete visits within 14 days",
      "Clear written instructions and medication schedules explained in Kashmiri & Urdu",
      "Nearby pharmacy coordination right near the J&K Bank / Petrol Pump",
      "Direct telephone support for any post-consultation questions: 01952-452973",
    ],
  },
];

export const CARE_MOMENTS = [
  {
    title: "A listening start",
    description: "We begin with your story, your questions and the things that matter most to you right now.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Clear explanations",
    description: "We explain your care in a way that makes sense, so you can understand your next steps with confidence.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Support after you leave",
    description: "We help you stay connected with follow-up guidance, clear next steps and a team that is easy to reach.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
];

export const MOMENTS_THAT_MATTER = [
  {
    title: "A calm first visit",
    description: "From arrival to follow-up, we want your first visit to feel thoughtful, clear and easy to understand.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Time to ask questions",
    description: "We build visits around your questions, your concerns and the things that matter most to you.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Care for every age",
    description: "From pediatric care to senior wellness, our expert clinicians are here to support every chapter.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
  },
];

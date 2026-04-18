export type ServiceSpecRow = {
  label: string;
  mid: string;
  right: string;
};

export type ServiceTabEntry = {
  id: string;
  number: string;
  tabLabel: string;
  title: string;
  description: string;
  specs: ServiceSpecRow[];
  imageSrc: string;
  imageAlt: string;
  priceBlur: string;
  /** Large faint background word (e.g. Prevent track). */
  watermark?: string;
  /** Hide blurred price + unlock CTA (e.g. membership-included Prevent cards). */
  hideUnlockPricing?: boolean;
};

export const SERVICE_TABS: ServiceTabEntry[] = [
  {
    id: "invisalign",
    number: "01",
    tabLabel: "Invisalign",
    title: "Invisalign",
    description:
      "Straighten your teeth without anyone knowing. Clear aligners shift your smile gradually, no metal, no wires, done at home on your timeline.",
    specs: [
      { label: "Treatment length", mid: "6-18 months", right: "Varies by case" },
      { label: "Aligner changes", mid: "Every 2 weeks", right: "Done at home" },
      { label: "Check-in visits", mid: "Every 6-8 weeks", right: "In-office" },
      { label: "Member pricing", mid: "Member rate", right: "FSA/HSA eligible" },
    ],
    imageSrc: "/assets/slidea.png",
    imageAlt: "Invisalign clear aligners in case",
    priceBlur: "$2,210",
  },
  {
    id: "implants",
    number: "02",
    tabLabel: "Implants",
    title: "Implants",
    description:
      "Missing teeth age you faster than you think. Implants are the only permanent fix, a titanium root with a crown that looks and feels exactly like the real thing.",
    specs: [
      { label: "Procedure time", mid: "1-2 hours", right: "Per implant" },
      { label: "Healing period", mid: "3-6 months", right: "Osseointegration" },
      { label: "Longevity", mid: "Lifetime", right: "With proper care" },
      { label: "Member pricing", mid: "Member rate", right: "FSA/HSA eligible" },
    ],
    imageSrc: "/assets/slideb.png",
    imageAlt: "Dental implant crown, abutment, and titanium post",
    priceBlur: "$3,210",
  },
  {
    id: "veneers",
    number: "03",
    tabLabel: "Veneers",
    title: "Veneers",
    description:
      "Ultra-thin porcelain shells bonded directly to your teeth in one appointment. Chips, stains, gaps, and imperfections, permanently gone.",
    specs: [
      { label: "Treatment length", mid: "2-3 appointments", right: "Completed in weeks" },
      { label: "Material", mid: "Porcelain", right: "Custom match" },
      { label: "Longevity", mid: "10-20 years", right: "With proper care" },
      { label: "Member pricing", mid: "Member rate", right: "FSA/HSA eligible" },
    ],
    imageSrc: "/assets/slidec.png",
    imageAlt: "Patient with dental shade guide for veneers",
    priceBlur: "$2,650",
  },
  {
    id: "fillings-crowns",
    number: "04",
    tabLabel: "Fillings & crowns",
    title: "Fillings & crowns",
    description:
      "A cavity left alone becomes a root canal, a cracked tooth becomes an extraction. Fillings and crowns stop the damage before it spirals.",
    specs: [
      { label: "Fillings", mid: "Same day", right: "Tooth colored" },
      { label: "Crowns", mid: "2 appointments", right: "Porcelain" },
      { label: "Longevity", mid: "10-15 years", right: "With proper care" },
      { label: "Member pricing", mid: "Member rate", right: "FSA/HSA eligible" },
    ],
    imageSrc: "/assets/slided.png",
    imageAlt: "Illustration of fillings and crowns on teeth",
    priceBlur: "$240",
  },
  {
    id: "root-canal",
    number: "05",
    tabLabel: "Root canal",
    title: "Root canal",
    description:
      "Root canals have a reputation they don't deserve. Modern root canals are no more uncomfortable than a standard filling, and they save a tooth you'd otherwise lose.",
    specs: [
      { label: "Procedure time", mid: "60-90 mins", right: "Single visit" },
      { label: "Recovery", mid: "1-2 days", right: "Mild soreness" },
      { label: "Success rates", mid: "Over 95%", right: "With proper care" },
      { label: "Member pricing", mid: "Member rate", right: "FSA/HSA eligible" },
    ],
    imageSrc: "/assets/slidee.png",
    imageAlt: "Root canal procedure steps diagram",
    priceBlur: "$2,210",
  },
  {
    id: "sedation",
    number: "06",
    tabLabel: "Sedation dentistry",
    title: "Sedation dentistry",
    description:
      "Low pain tolerance or a lot of work to get done? You relax, we work, and you wake up with months of dental work already behind you.",
    specs: [
      { label: "Sedation type", mid: "Nitrous or IV", right: "Based on procedure" },
      { label: "Recovery time", mid: "30 min - few hours", right: "Varies by type" },
      { label: "Procedures covered", mid: "All services", right: "Single or multiple" },
      { label: "Member pricing", mid: "Member rate", right: "FSA/HSA eligible" },
    ],
    imageSrc: "/assets/slidef.png",
    imageAlt: "Patient receiving sedation dentistry",
    priceBlur: "$210",
  },
];

export const SERVICE_TABS_PREVENT: ServiceTabEntry[] = [
  {
    id: "prevent-cleanings",
    number: "01",
    tabLabel: "Cleanings",
    title: "Cleanings",
    description:
      "The reason you never need the drill. Unlimited professional cleanings included with every membership. Most people get 2 a year. Our members come whenever they want.",
    specs: [
      { label: "Frequency", mid: "Unlimited", right: "As needed" },
      { label: "Duration", mid: "45-60 mins", right: "In-office" },
      { label: "Technology", mid: "Ultrasonic", right: "+ polish" },
      { label: "Membership", mid: "Included", right: "Yes" },
    ],
    imageSrc: "/assets/preventa.png",
    imageAlt: "Professional dental cleaning with scaler and mirror",
    priceBlur: "",
    watermark: "UNLIMITED",
    hideUnlockPricing: true,
  },
  {
    id: "prevent-exams",
    number: "02",
    tabLabel: "Exams & checkups",
    title: "Exams & checkups",
    description:
      "Know exactly where your mouth stands. A full oral health assessment every visit. We check everything—teeth, gums, bite, jaw—and tell you exactly what we find. No surprises, no upsells.",
    specs: [
      { label: "Frequency", mid: "Every visit", right: "Included" },
      { label: "Duration", mid: "15-20 mins", right: "In-office" },
      { label: "Includes", mid: "Full assessment", right: "Teeth + gums" },
      { label: "Bite check", mid: "Included", right: "Every visit" },
    ],
    imageSrc: "/assets/preventb.png",
    imageAlt: "Dental exam with mirror and gloved hand",
    priceBlur: "",
    watermark: "UNLIMITED",
    hideUnlockPricing: true,
  },
  {
    id: "prevent-xrays",
    number: "03",
    tabLabel: "X-rays & diagnostics",
    title: "X-rays",
    description:
      "Catch it before it costs you. Digital X-rays detect problems at the earliest stage — before they become painful, expensive, or complicated. Included with your membership, no extra charge ever.",
    specs: [
      { label: "Technology", mid: "Digital X-ray", right: "3D imaging" },
      { label: "Radiation", mid: "90% less", right: "Than traditional" },
      { label: "Frequency", mid: "As needed", right: "Clinically guided" },
      { label: "Membership", mid: "Included", right: "Yes" },
    ],
    imageSrc: "/assets/preventc.png",
    imageAlt: "Digital panoramic dental X-ray",
    priceBlur: "",
    watermark: "UNLIMITED",
    hideUnlockPricing: true,
  },
  {
    id: "prevent-whitening",
    number: "04",
    tabLabel: "Whitening",
    title: "Whitening",
    description:
      "Part of the deal. Professional-grade whitening included with your Annual membership. Not an add-on, not an upsell — yours from the moment you sign up.",
    specs: [
      { label: "Method", mid: "In-office", right: "Professional" },
      { label: "Results", mid: "2-5 shades", right: "Brighter" },
      { label: "Duration", mid: "60 mins", right: "Single visit" },
      { label: "Included in", mid: "Annual plan", right: "Only" },
    ],
    imageSrc: "/assets/preventd.png",
    imageAlt: "In-office teeth whitening with blue light",
    priceBlur: "",
    hideUnlockPricing: true,
  },
  {
    id: "prevent-perio",
    number: "05",
    tabLabel: "Periodontal therapy",
    title: "Periodontal therapy",
    description:
      "Gum disease is silent. We're not. Half of adults have gum disease and don't know it. If we find it, we treat it same visit — no referral, no runaround, no separate bill.",
    specs: [
      { label: "Screening", mid: "Every visit", right: "Included" },
      { label: "Treatment", mid: "Same visit", right: "If needed" },
      { label: "Method", mid: "Deep clean", right: "+ irrigation" },
      { label: "Longevity", mid: "With proper", right: "Care" },
    ],
    imageSrc: "/assets/prevente.png",
    imageAlt: "Periodontal cleaning illustration",
    priceBlur: "",
    hideUnlockPricing: true,
  },
  {
    id: "prevent-night-guards",
    number: "06",
    tabLabel: "Night guards",
    title: "Night guards",
    description:
      "You grind your teeth at night. You just don't know it yet. A custom night guard stops the damage before it starts.",
    specs: [
      { label: "Fitting", mid: "Custom", right: "3D mold" },
      { label: "Material", mid: "Medical-grade", right: "Acrylic" },
      { label: "Appointments", mid: "2 visits", right: "To complete" },
      { label: "Longevity", mid: "3-5 years", right: "With care" },
    ],
    imageSrc: "/assets/preventf.png",
    imageAlt: "Patient placing a custom night guard",
    priceBlur: "",
    hideUnlockPricing: true,
  },
];

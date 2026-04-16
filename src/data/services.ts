export type ServiceCategory = "fitness" | "women" | "medical";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  description: string;
  benefits: string[];
  whoFor: string[];
  outcomes: string[];
}

export const categoryMeta: Record<ServiceCategory, { label: string; tagline: string }> = {
  fitness: { label: "Fitness Nutrition", tagline: "Bulking & muscle gain" },
  women: { label: "Women's Health", tagline: "Pregnancy, lactation, preconception" },
  medical: { label: "Medical & General Health", tagline: "Diabetes, hypertension and more" },
};

export const services: Service[] = [
  {
    slug: "gym-bulking",
    title: "Gym Bulking Nutrition",
    category: "fitness",
    short: "Strategic calorie and macro planning to build lean muscle.",
    description:
      "A structured nutrition framework designed for athletes and gym-goers focused on lean muscle growth. We calibrate calories, protein timing and recovery nutrition around your training schedule.",
    benefits: ["Lean muscle gain", "Optimized recovery", "Strength performance", "Sustainable habits"],
    whoFor: ["Gym-goers in a bulking phase", "Athletes preparing for competition", "Beginners building a foundation"],
    outcomes: ["Personalized macro plan", "Weekly progress reviews", "Training-day meal templates"],
  },
  {
    slug: "preconception",
    title: "Preconception Nutrition",
    category: "women",
    short: "Prepare your body for a healthy pregnancy through targeted nutrition.",
    description:
      "Build optimal nutrient stores before conception with a plan focused on fertility-supporting foods, micronutrients and lifestyle balance.",
    benefits: ["Fertility support", "Hormonal balance", "Nutrient optimization"],
    whoFor: ["Couples planning pregnancy", "Women optimizing health pre-conception"],
    outcomes: ["Nutrient assessment", "Custom meal plan", "Lifestyle coaching"],
  },
  {
    slug: "pregnancy",
    title: "Pregnancy Nutrition",
    category: "women",
    short: "Trimester-specific nutrition for mother and baby.",
    description:
      "Evidence-based nutrition guidance through every trimester to support healthy fetal development, manage symptoms, and maintain maternal wellbeing.",
    benefits: ["Healthy weight gain", "Reduced nausea", "Strong fetal development"],
    whoFor: ["Expecting mothers in any trimester"],
    outcomes: ["Trimester meal plans", "Symptom management", "Continuous follow-up"],
  },
  {
    slug: "lactation",
    title: "Lactation Meal Plan",
    category: "women",
    short: "Nutrient-dense plans to support breastfeeding mothers.",
    description:
      "Tailored meal planning to sustain milk supply, support recovery and meet the increased nutrient demands of breastfeeding.",
    benefits: ["Sustained milk supply", "Postpartum recovery", "Energy and mood"],
    whoFor: ["Breastfeeding mothers"],
    outcomes: ["Galactagogue-rich plan", "Hydration strategy", "Postpartum check-ins"],
  },
  {
    slug: "child-nutrition",
    title: "Child Nutrition Support",
    category: "women",
    short: "Healthy growth plans for infants and young children.",
    description:
      "Age-appropriate nutrition guidance covering weaning, picky eating, and balanced growth for children.",
    benefits: ["Healthy growth curves", "Better eating habits", "Immune support"],
    whoFor: ["Parents of children 6 months – 12 years"],
    outcomes: ["Age-tailored meal plan", "Parent coaching", "Growth tracking"],
  },
  {
    slug: "weight-loss",
    title: "Weight Loss Program",
    category: "medical",
    short: "Sustainable, evidence-based fat loss without crash diets.",
    description:
      "A long-term approach to weight management with personalized calorie targets, food preferences and behavior change coaching.",
    benefits: ["Sustainable fat loss", "Improved energy", "Better metabolic health"],
    whoFor: ["Adults seeking long-term weight loss"],
    outcomes: ["Custom calorie plan", "Weekly check-ins", "Behavior coaching"],
  },
  {
    slug: "weight-gain",
    title: "Weight Gain Program",
    category: "medical",
    short: "Healthy weight gain through nutrient-dense calorie surplus.",
    description:
      "For underweight individuals — structured plans to gain weight healthily without compromising metabolic markers.",
    benefits: ["Healthy weight gain", "Improved appetite", "Better energy"],
    whoFor: ["Underweight adults", "Recovery from illness"],
    outcomes: ["Calorie-dense meal plan", "Appetite strategies", "Progress tracking"],
  },
  {
    slug: "balanced-diet",
    title: "Balanced Diet Plan",
    category: "medical",
    short: "Daily-life nutrition aligned with your lifestyle and preferences.",
    description:
      "A foundational nutrition plan focused on balance, variety and sustainable habits for long-term wellbeing.",
    benefits: ["Better digestion", "Stable energy", "Long-term health"],
    whoFor: ["Anyone seeking a healthier baseline"],
    outcomes: ["Personalized plan", "Grocery guide", "Habit coaching"],
  },
  {
    slug: "diabetes",
    title: "Diabetes Nutrition Management",
    category: "medical",
    short: "Glycemic-focused plans to support blood sugar balance.",
    description:
      "Clinical nutrition for individuals with type 1, type 2 or pre-diabetes — designed in alignment with your medical care.",
    benefits: ["Stable blood sugar", "Reduced complications", "Improved A1C"],
    whoFor: ["Type 1, Type 2, pre-diabetes"],
    outcomes: ["Carb-balanced plan", "Glycemic education", "Medical coordination"],
  },
  {
    slug: "hypertension",
    title: "Hypertension Nutrition",
    category: "medical",
    short: "DASH-style plans to support healthy blood pressure.",
    description:
      "Evidence-based nutrition strategy to support blood pressure management through sodium balance, potassium-rich foods and lifestyle coaching.",
    benefits: ["Lower blood pressure", "Heart health", "Reduced medication needs"],
    whoFor: ["Adults with hypertension or pre-hypertension"],
    outcomes: ["DASH-aligned plan", "Sodium coaching", "Cardio-protective foods"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

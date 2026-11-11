export type Entry = {
  title: string;        // degree/role
  organization: string; // school/company
  period: string;       // in years. e.g. "xxxx" - "xxxx"
  note?: string;
};

// Education card
export const education: Entry[] = [
  {
    title: "BSc in Computer Science in Interactive Media and Game Development",
    organization: "Singapore Institute of Technology - DigiPen Institute of Technology",
    period: "2022 - 2026",
    note: `Achieved an Honours with Distiction`,
  },
  {
    title: "Diploma in Information Technology",
    organization: "Ngee Ann Polytechnic",
    period: "2017 - 2020",
    note: `Specialisation in Game Development`,
  },
];

// Experience card
export const experience: Entry[] = [
  {
    title: "Junior IT Analyst",
    organization: "Sea Limited",
    period: "May 2025 - Apr 2026",
    note: `First-level IT support for Shopee and Monee: troubleshot hardware/software/network issues, managed device deployment and inventory, and wrote knowledge-base articles behind the helpdesk chatbot. Ranked top 3 in CSAT (Aug-Oct 2025).`,
  },
  {
    title: "Business Analyst Intern",
    organization: "CrimsonLogic Pte Ltd",
    period: "Mar 2019 - Sep 2019",
    note: `Supported the full delivery cycle by documenting functional and interface specifications, designing screen mock-ups, running SIT and UAT with documented results, and contributing to requirement-gathering meetings and minutes.`,
  },
];

// Currently learning + Outside of code
export const learning: string[] = ["System design", "Kubernetes"];
export const interests: string[] = ["Gaming", "Gymming", "Photography", "Coffee", "Matcha"];
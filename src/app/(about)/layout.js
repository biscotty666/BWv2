import InsightRoll from "@/components/About/InsightRoll";

const insights = [
  "35+ Yrs Experience in Business, Technology and Education",
  "25+ Yrs of Linux",
  "Author",
  "Professor",
  "Financial Analyst",
  "WW Mgmt Localization/Internationalization Services",
  "Negotiator",
  "Physician",
];

export default function AboutLayout({ children }) {
  return (
    <main className="mt-20 w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

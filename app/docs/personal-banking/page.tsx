import { InfoCard, PageHero, SectionIntro, ImagePlaceholder } from "@/components/ui";

const offerings = [
  {
    title: "Checking",
    text: "Everyday banking with attentive service, treasury-grade security standards, and account structures suited to personal and household needs.",
  },
  {
    title: "Savings",
    text: "Reserve and savings accounts designed to support prudent liquidity management across changing stages of life.",
  },
  {
    title: "Credit Cards",
    text: "Card programs centered on service, security, and measured rewards rather than excess, with travel and household protections included.",
  },
  {
    title: "Mortgage Lending",
    text: "Residential financing guided by long-term affordability, careful underwriting, and relationship-based decision making.",
  },
  {
    title: "Student Banking",
    text: "Foundational banking for students and recent graduates establishing financial habits with confidence and support.",
  },
  {
    title: "Digital Banking",
    text: "Secure online and mobile access that extends the standards of the branch and advisory desk into daily life.",
  },
];

export default function PersonalBankingPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Personal Banking"
        title="Stability for today. Confidence for tomorrow."
        text="Our personal banking platform reflects the same values that define the broader institution: dependable service, conservative risk management, and a commitment to relationships that endure."
        aside={<ImagePlaceholder label="Townhouse branch salon placeholder" />}
      />

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Banking Services"
          title="Banking designed for every stage of life."
          text="From first accounts to home financing and retirement cash management, Commonwealth provides the essential banking services households expect from a long-established institution."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="surface p-10">
          <p className="eyebrow">Digital Access</p>
          <h2 className="subheadline mt-4">
            Modern delivery, carefully implemented.
          </h2>
          <p className="body-copy mt-5">
            Clients can manage accounts, transfers, card controls, mortgage
            payments, and secure correspondence through a digital experience
            designed to feel discreet and capable rather than overstated.
          </p>
          <p className="mt-5 text-sm leading-7 text-slate">
            Branch teams and relationship associates remain central. Digital
            tools are intended to extend service, not replace judgment.
          </p>
        </div>
        <ImagePlaceholder label="Digital banking screen system placeholder" />
      </section>
    </div>
  );
}

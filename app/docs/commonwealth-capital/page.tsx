import { DataTable, ImagePlaceholder, InfoCard, PageHero, SectionIntro, StatCard } from "@/components/ui";

const capabilities = [
  {
    title: "M&A Advisory",
    text: "Sell-side, buy-side, and board advisory for privately held companies, strategic acquirers, and long-duration sponsors.",
  },
  {
    title: "Corporate Lending",
    text: "Senior secured, asset-backed, and relationship-driven credit facilities structured for resilience and covenant clarity.",
  },
  {
    title: "Infrastructure Finance",
    text: "Financing and advisory across transport, ports, utilities, district energy, and public-private partnership projects.",
  },
  {
    title: "Sovereign Advisory",
    text: "Capital strategy and liability management support for governments, agencies, and state-linked issuers.",
  },
  {
    title: "Asset Management",
    text: "Institutional portfolios across fixed income, private credit, real assets, and tailored liability-aware mandates.",
  },
  {
    title: "Commercial Real Estate",
    text: "Structured financing and strategic advice for office, hospitality, multifamily, and mixed-use developments.",
  },
];

export default function CommonwealthCapitalPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Commonwealth Capital"
        title="Institutional advice and financing for complex mandates."
        text="Commonwealth Capital serves corporations, real asset sponsors, sovereign entities, and institutional investors with a conservative underwriting culture and an international advisory lens."
        aside={<ImagePlaceholder label="Marble boardroom placeholder" />}
      />

      <section className="section-shell mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard value="$126B" label="Assets under management" />
          <StatCard value="38" label="Countries served" />
          <StatCard value="2,900+" label="Institutional clients" />
        </div>
      </section>

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Capabilities"
          title="Global in scope, disciplined in execution."
          text="Our platform is built around sectors and mandates where patient balance sheet support, informed counsel, and credibility with long-term counterparties matter."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="surface p-10">
          <p className="eyebrow">Sector Orientation</p>
          <h2 className="subheadline mt-4">
            Essential industries, hard assets, and public systems.
          </h2>
          <p className="body-copy mt-5">
            Commonwealth Capital has historically focused on infrastructure,
            transport, property, utilities, logistics, and industries where
            long asset lives require a measured capital approach.
          </p>
        </div>
        <ImagePlaceholder label="Infrastructure portfolio placeholder" />
      </section>

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Selected Franchise Data"
          title="Believable scale, measured concentration."
          text="The division’s operating model favors fewer, longer-standing institutional relationships over broad distribution."
        />
        <div className="mt-10">
          <DataTable
            headers={["Metric", "Figure", "Notes"]}
            rows={[
              ["Advisory mandates completed in FY2025", "112", "Predominantly middle-market and infrastructure transactions"],
              ["Average institutional relationship tenure", "14.6 years", "Top 250 clients"],
              ["Commercial real estate commitments", "$18.4B", "Office, hospitality, multifamily, logistics"],
              ["Infrastructure finance portfolio", "$24.7B", "Transport, energy, utility, and port assets"],
            ]}
          />
        </div>
      </section>
    </div>
  );
}

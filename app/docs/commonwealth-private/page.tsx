import { ImagePlaceholder, InfoCard, PageHero, SectionIntro } from "@/components/ui";

const services = [
  {
    title: "Wealth Planning",
    text: "Strategic balance sheet planning integrating investment policy, liquidity reserves, and family governance priorities.",
  },
  {
    title: "Trust Services",
    text: "Administration and fiduciary oversight for trusts, foundations, and special-purpose entities across multiple generations.",
  },
  {
    title: "Estate Advisory",
    text: "Coordination of legal, tax, and legacy objectives to preserve continuity while navigating transition points with discretion.",
  },
  {
    title: "Philanthropic Strategy",
    text: "Advisory support for private foundations, donor-advised structures, and mission-aligned grantmaking programs.",
  },
  {
    title: "Family Office Coordination",
    text: "A single point of orchestration across advisors, administrators, lending teams, and operating business stakeholders.",
  },
];

export default function CommonwealthPrivatePage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Commonwealth Private"
        title="Private banking for families who think in generations."
        text="Commonwealth Private serves a limited client base whose needs extend beyond conventional wealth management into governance, succession, and the quiet administration of lasting private capital."
        dark
        aside={<ImagePlaceholder label="Private salon placeholder" tone="dark" />}
      />

      <section className="section-shell mt-20">
        <div className="dark-surface grid gap-8 p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Private Client Mandate"
            title="Discretion, continuity, and exacting service."
            text="Our private bankers coordinate closely with trust officers, lending specialists, investment professionals, and outside counsel to protect family balance sheets and support orderly succession."
            invert
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="font-serif text-2xl text-ivory">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-ivory/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <ImagePlaceholder label="Estate archive placeholder" tone="dark" />
        <div className="surface p-10">
          <p className="eyebrow">Client Experience</p>
          <h2 className="subheadline mt-4">A private office approach.</h2>
          <p className="body-copy mt-5">
            Mandates are intentionally selective. Each relationship is built
            around a senior coverage model with access to credit, trust, estate,
            and philanthropic capabilities without unnecessary complexity.
          </p>
          <p className="mt-5 text-sm leading-7 text-slate">
            Commonwealth Private is designed to feel personal, exacting, and
            quietly assured. The emphasis is on continuity of counsel rather
            than transaction volume.
          </p>
        </div>
      </section>

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Selected Focus Areas"
          title="Advisory calibrated for concentrated lives and assets."
          text="Private clients often require coordination across family, enterprise, and civic commitments. Our platform is structured accordingly."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Closely Held Businesses"
            text="Liquidity planning, shareholder coordination, and credit solutions around ownership transitions."
          />
          <InfoCard
            title="Family Foundations"
            text="Governance frameworks, mission planning, and multi-year grant strategy for institutional philanthropy."
          />
          <InfoCard
            title="Trust & Succession"
            text="Structures intended to preserve flexibility, reduce friction, and support clear stewardship roles over time."
          />
        </div>
      </section>
    </div>
  );
}

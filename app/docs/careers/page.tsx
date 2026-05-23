import { InfoCard, PageHero, SectionIntro } from "@/components/ui";

const roles = [
  {
    title: "Summer Internships",
    text: "Exposure to credit, advisory, private banking, and operations for students interested in disciplined institutional finance.",
  },
  {
    title: "Analyst Program",
    text: "Structured early-career training across banking fundamentals, risk culture, client service, and sector-specific financial work.",
  },
  {
    title: "Private Banking Careers",
    text: "Roles in client service, trust administration, and wealth planning for professionals with judgment, discretion, and polish.",
  },
  {
    title: "Technology Modernization",
    text: "Engineers and product specialists supporting digital banking, security, and infrastructure renewal within a conservative operating environment.",
  },
];

export default function CareersPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Careers"
        title="A place for professionals drawn to stewardship, rigor, and long-term responsibility."
        text="Commonwealth seeks individuals who value exacting standards, institutional accountability, and the patient modernization of a historic banking platform."
      />

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Working at Commonwealth"
          title="Demanding standards, durable careers."
          text="The culture prizes discretion, preparation, precision, and service. Colleagues are expected to think beyond immediate outputs toward the long-term integrity of client relationships and institutional reputation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <InfoCard key={role.title} title={role.title} text={role.text} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-2">
        <div className="surface p-10">
          <p className="eyebrow">Professional Development</p>
          <h2 className="subheadline mt-4">
            Apprenticeship remains part of the model.
          </h2>
          <p className="body-copy mt-5">
            Associates and analysts receive formal training in accounting,
            credit, markets, fiduciary practice, and client communication, with
            expectations calibrated to a high-trust institutional environment.
          </p>
        </div>
        <div className="surface p-10">
          <p className="eyebrow">Measured Modernization</p>
          <p className="mt-4 text-sm leading-7 text-slate">
            Commonwealth continues to modernize core systems, delivery
            channels, and security capabilities without compromising the
            operating discipline that defines the institution. Technology is a
            strategic function, but never an aesthetic.
          </p>
        </div>
      </section>
    </div>
  );
}

import { ExecutiveCard, PageHero, SectionIntro } from "@/components/ui";
import { leadership } from "@/data/site";

export default function LeadershipPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Leadership"
        title="Experienced leadership shaped by finance, diplomacy, and fiduciary responsibility."
        text="Commonwealth’s senior leadership and board reflect a longstanding preference for institutional steadiness, broad public service, and quiet competence."
      />

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Executive Leadership"
          title="Senior officers and directors."
          text="Backgrounds across banking, law, diplomacy, endowments, transport, and philanthropic institutions inform the bank’s operating posture and governance culture."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((person) => (
            <ExecutiveCard key={person.name} {...person} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { ImagePlaceholder, PageHero, SectionIntro, TimelineItem } from "@/components/ui";
import { historyTimeline } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="About & History"
        title="A New York institution shaped by continuity, credit discipline, and inherited duty."
        text="Founded in 1881, Commonwealth traces its origins to a merchant banking office established to finance rail links, warehouses, and industrial corridors serving an expanding Atlantic economy."
        aside={<ImagePlaceholder label="Archival portrait placeholder, Rudolf Wladyslaw Radwill" />}
      />

      <section className="section-shell mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface p-10">
          <SectionIntro
            eyebrow="Founding Narrative"
            title="From merchant capital to institutional banking."
            text="Rudolf Wladyslaw Radwill, descended from a Polish-Lithuanian noble line displaced and dispersed by nineteenth-century political upheaval, arrived in New York with family relationships in shipping, grain brokerage, and continental credit. He founded Commonwealth Banking House near the East River to connect American industrial demand with European capital, emphasizing careful underwriting and reserve discipline."
          />
          <p className="mt-8 body-copy">
            By the 1890s, the firm had become a quiet participant in railroad
            bond syndicates, freight terminals, and bridge financing. Its early
            practice favored collateral quality, covenant rigor, and patient
            balance sheet management rather than speculative expansion. That
            posture would define the institution through war, reconstruction,
            industrial modernization, and the development of its international
            private banking platform.
          </p>
        </div>
        <div className="grid gap-6">
          <ImagePlaceholder label="Rail corridor financing ledger placeholder, 1894" />
          <ImagePlaceholder label="War bond subscription desk placeholder, 1918" />
        </div>
      </section>

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Institutional Milestones"
          title="A record of expansion without abandoning restraint."
          text="The Commonwealth story is marked less by reinvention than by accumulation: of trust, mandates, and responsibilities accepted over time."
        />
        <div className="surface mt-10 p-10">
          {historyTimeline.map((item) => (
            <TimelineItem key={item.year} {...item} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-3">
        <div className="surface p-8">
          <p className="eyebrow">Railroad Origins</p>
          <p className="mt-4 text-sm leading-7 text-slate">
            The bank’s earliest credits supported rolling stock acquisitions,
            station modernization, and bonded corridor improvements linking New
            York to inland distribution routes.
          </p>
        </div>
        <div className="surface p-8">
          <p className="eyebrow">Industrial Expansion</p>
          <p className="mt-4 text-sm leading-7 text-slate">
            Commonwealth later financed port warehousing, machine works,
            regional utilities, and manufacturers participating in postwar
            domestic growth.
          </p>
        </div>
        <div className="surface p-8">
          <p className="eyebrow">Modern Role</p>
          <p className="mt-4 text-sm leading-7 text-slate">
            Today the institution serves private clients, operating companies,
            real asset sponsors, endowments, and public entities through a more
            diversified but still conservative model.
          </p>
        </div>
      </section>
    </div>
  );
}

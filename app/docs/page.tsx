import { InfoCard, PageHero, PrimaryButton, SectionIntro, StatCard, TimelineItem, ImagePlaceholder } from "@/components/ui";
import { divisions, historyTimeline } from "@/data/site";

export default function DocsHomePage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Stewardship Across Generations"
        title="Serving families, institutions, and industry with measured judgment since 1881."
        text="Commonwealth Bank combines the discipline of a historic banking house with the precision of a modern financial institution. Our role is unchanged: protect capital, allocate credit responsibly, and preserve continuity across generations."
        aside={
          <div className="surface w-full p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-slate">
              Institutional standing
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <StatCard value="$214B" label="Client assets under supervision" />
              <StatCard value="38" label="Countries served" />
              <StatCard value="141" label="Years of annual profitability" />
            </div>
          </div>
        }
      />

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Institutional Credibility"
          title="Built on trust, restraint, and continuity."
          text="For more than a century, Commonwealth has served as banker, fiduciary, and advisor to households, foundations, enterprises, and public institutions that value discretion over display and durability over fashion."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {divisions.map((division) => (
            <InfoCard key={division.title} {...division} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <ImagePlaceholder label="Private library, 1920s branch ledger room" />
        <div className="surface p-10">
          <p className="eyebrow">Wealth Management</p>
          <h2 className="subheadline mt-4">
            Private capital deserves patient structure.
          </h2>
          <p className="body-copy mt-5">
            Commonwealth Private serves families, entrepreneurs, and trusts
            whose planning horizon extends well beyond a single market cycle.
            Our work spans balance sheet management, estate governance,
            philanthropic planning, and continuity across generations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/docs/commonwealth-private">
              Explore Commonwealth Private
            </PrimaryButton>
            <PrimaryButton href="/docs/leadership" variant="dark">
              Meet our leadership
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Institutional Statistics"
          title="Scale with judgment."
          text="Our size supports broad capability, but our operating posture remains selective, capital-conscious, and relationship-led."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard value="$87B" label="Deposits" />
          <StatCard value="$126B" label="Assets under management" />
          <StatCard value="3,400+" label="Institutional mandates" />
          <StatCard value="17%" label="Tier 1 capital ratio" />
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface p-10">
          <p className="eyebrow">Our History</p>
          <h2 className="subheadline mt-4">
            A banking house shaped by railways, industry, and patient capital.
          </h2>
          <div className="mt-8 space-y-1">
            {historyTimeline.slice(0, 4).map((item) => (
              <TimelineItem key={item.year} {...item} />
            ))}
          </div>
          <div className="mt-8">
            <PrimaryButton href="/docs/about">Read the full history</PrimaryButton>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="surface p-8">
            <p className="eyebrow">Continuity</p>
            <p className="mt-4 font-serif text-3xl text-ink">
              Stewardship is measured not in quarters, but in generations.
            </p>
          </div>
          <div className="surface p-8">
            <p className="eyebrow">Ownership</p>
            <p className="mt-4 text-sm leading-7 text-slate">
              Commonwealth Bank operates as a principal banking subsidiary of
              R. W. Radwill &amp; Co., whose oversight remains deliberate,
              understated, and long-term in orientation.
            </p>
          </div>
          <ImagePlaceholder label="Archive photograph placeholder, lower Manhattan façade" />
        </div>
      </section>

      <section className="section-shell mt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface p-10">
            <p className="eyebrow">For Individuals & Families</p>
            <h3 className="font-serif text-3xl text-ink">
              Banking designed for every stage of life.
            </h3>
            <p className="mt-4 body-copy">
              Deposit accounts, residential lending, cards, and digital access
              built with the steadiness expected of a long-standing institution.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/docs/personal-banking">
                Personal banking
              </PrimaryButton>
            </div>
          </div>
          <div className="dark-surface p-10">
            <p className="eyebrow text-ivory/70">For Institutions</p>
            <h3 className="font-serif text-3xl text-ivory">
              Advisory and financing for essential sectors.
            </h3>
            <p className="mt-4 text-base leading-7 text-ivory/70">
              Commonwealth Capital advises enterprises, developers, and public
              bodies across M&amp;A, infrastructure, asset management, and
              complex lending.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/docs/commonwealth-capital" variant="dark">
                Commonwealth Capital
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

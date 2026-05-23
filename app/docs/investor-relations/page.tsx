import { DataTable, InfoCard, PageHero, SectionIntro } from "@/components/ui";
import { investorReports } from "@/data/site";

export default function InvestorRelationsPage() {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow="Investor Relations"
        title="Financial reporting grounded in transparency, discipline, and long-term governance."
        text="This section presents representative shareholder materials for Commonwealth Bank, including annual disclosures, quarterly summaries, governance standards, and stewardship statements."
      />

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Reports & Filings"
          title="Annual and quarterly materials."
          text="Downloads below are placeholders representing public reporting materials, leadership letters, and policy disclosures."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {investorReports.map((report) => (
            <InfoCard
              key={report.title}
              title={report.title}
              text={`${report.detail}. ${report.size}.`}
            />
          ))}
        </div>
      </section>

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Quarterly Summary"
          title="Selected financial figures."
          text="Figures below are fictional but calibrated to appear plausible for a regional-to-international banking institution with diversified wealth and institutional operations."
        />
        <div className="mt-10">
          <DataTable
            headers={["Metric", "Q1 2026", "FY2025"]}
            rows={[
              ["Net income", "$812M", "$3.04B"],
              ["Return on tangible common equity", "15.2%", "14.6%"],
              ["Common equity tier 1 ratio", "17.0%", "16.7%"],
              ["Book value per share", "$48.10", "$46.32"],
              ["Efficiency ratio", "54.3%", "55.8%"],
            ]}
          />
        </div>
      </section>

      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-2">
        <div className="surface p-10">
          <p className="eyebrow">Governance Overview</p>
          <h2 className="subheadline mt-4">Board structure and oversight.</h2>
          <p className="mt-5 body-copy">
            The board operates through audit, risk, compensation, governance,
            and stewardship committees. Public disclosures reference the
            continued ownership of the bank by R. W. Radwill &amp; Co. while
            maintaining the Commonwealth operating identity.
          </p>
        </div>
        <div className="surface p-10">
          <p className="eyebrow">ESG & Stewardship</p>
          <p className="mt-4 text-sm leading-7 text-slate">
            Commonwealth’s stewardship statements emphasize responsible lending,
            measured operational modernization, employee development, and civic
            commitments in the cities and sectors it has historically served.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate">
            Climate disclosures focus on commercial real estate and
            infrastructure exposure, while governance reporting emphasizes
            fiduciary conduct and risk culture.
          </p>
        </div>
      </section>

      <section className="section-shell mt-20">
        <SectionIntro
          eyebrow="Investor FAQ"
          title="Common questions."
          text="Illustrative responses for shareholder communications and corporate governance inquiry."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <InfoCard
            title="Who owns Commonwealth Bank?"
            text="Commonwealth Bank is presented as a wholly owned subsidiary of R. W. Radwill & Co., which provides long-term holding company oversight."
          />
          <InfoCard
            title="Does Commonwealth pay a dividend?"
            text="The fictional reporting framework assumes a regular common dividend policy supported by earnings consistency and conservative capital targets."
          />
          <InfoCard
            title="Where are shares listed?"
            text="Illustrative materials assume a New York listing and a shareholder base composed of institutions, family capital, and long-duration investors."
          />
          <InfoCard
            title="How is governance structured?"
            text="An independent board committee framework is paired with stewardship references to the holding company and a traditional bank governance model."
          />
        </div>
      </section>
    </div>
  );
}

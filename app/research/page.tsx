import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { sitePath } from "../site-paths";

export const metadata: Metadata = {
  title: "Research | Andrew Berryhill",
  description: "Research by economist Andrew Berryhill on fiscal rules, political economy, and public finance.",
};

const researchSections = [
  {
    heading: "Publications",
    id: "publications",
    papers: [
      {
        title: "Rule-Based Fiscal Governance: Challenges, Alternatives, and a Path for Reform",
        citation: (
          <>
            &ldquo;Rule-Based Fiscal Governance: Challenges, Alternatives, and a Path for Reform.&rdquo; In <cite>Political Process: New Perspectives on the Virginia and Bloomington Schools</cite>, edited by Donald J. Boudreaux, Christopher J. Coyne, and Brian Kogelmann. Rowman and Littlefield, December 2024.
          </>
        ),
        summary:
          "This paper examines uncertainty, political discretion, and rule continuity as central challenges for fiscal governance. It evaluates fiscal standards as an alternative and revisits the proposal in Buchanan and Wagner's Democracy in Deficit, drawing lessons for institutional reform from Switzerland.",
        coauthors: null,
        slides: null,
        availability: null,
      },
    ],
  },
  {
    heading: "Working Papers",
    id: "working-papers",
    papers: [
      {
        title: "Costly Escape from Fiscal Rules: The Political Economy of Extraordinary Debt Repayment Clauses",
        citation: null,
        summary:
          "Many countries overuse the escape clauses in their fiscal rules, resulting in higher deficits and debt. This paper studies a mechanism in Switzerland's fiscal rule that requires extraordinary debt to be repaid within six years. A political economy model considers when politicians would choose to adopt such a restriction and why its costs may limit adoption elsewhere.",
        coauthors: null,
        slides: "/edrc-paper-slides.pdf",
        availability: "Draft available on request",
      },
      {
        title: "Resolving the Puzzle of Weak Fiscal Rules: Time Inconsistency, Political Incentives, and Asymmetric Information",
        citation: null,
        summary:
          "National fiscal rules are often weakly designed and susceptible to circumvention. This paper develops a political agency model in which voters value a commitment device for future spending, while politicians choose how binding the rule will be. The model connects weak rule design to voter time inconsistency, political incentives, and asymmetric information.",
        coauthors: null,
        slides: "/weak-fiscal-rules-slides.pdf",
        availability: "Draft available on request",
      },
      {
        title: "Economic Freedom versus Lockdowns during the COVID-19 Pandemic",
        citation: null,
        summary: null,
        coauthors: "With Vince Miozzi",
        slides: null,
        availability: "Draft available on request",
      },
    ],
  },
  {
    heading: "Work in Progress",
    id: "work-in-progress",
    papers: [
      {
        title: "The Constitution as a Protector of Democracy",
        citation: null,
        summary: null,
        coauthors: "With Gustavo Torrens and Sebastian Galiani",
        slides: null,
        availability: null,
      },
      {
        title: "From Discretion to Formulas: The Political Origins of Property Tax Limits",
        citation: null,
        summary: null,
        coauthors: "With Justin Ross and William Hoyt",
        slides: null,
        availability: null,
      },
      {
        title: "Fiscal Rules in Political Budget Cycle Models",
        citation: null,
        summary: null,
        coauthors: null,
        slides: null,
        availability: null,
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader current="research" />
      <div className="inner-page compact-page research-page">
        <header className="page-heading">
          <h1>Research</h1>
          <p>
            My research focuses on national fiscal rules and how political incentives affect their design, implementation, and effectiveness.
          </p>
        </header>

        <div className="research-sections">
          {researchSections.map((section) => (
            <section className="research-section" aria-labelledby={section.id} key={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              <div className="standalone-list">
                {section.papers.map((paper) => (
                  <article className="standalone-item" key={paper.title}>
                    <h3>{paper.title}</h3>
                    {paper.citation && <p className="paper-citation">{paper.citation}</p>}
                    {paper.coauthors && <p className="paper-coauthors">{paper.coauthors}</p>}
                    {paper.summary && <p>{paper.summary}</p>}
                    {(paper.slides || paper.availability) && (
                      <div className="paper-links">
                        {paper.slides && (
                          <a href={sitePath(paper.slides)} target="_blank" rel="noreferrer">Slides (PDF)</a>
                        )}
                        {paper.availability && <span className="paper-availability">{paper.availability}</span>}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

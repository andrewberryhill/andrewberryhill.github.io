import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { sitePath } from "../site-paths";

export const metadata: Metadata = {
  title: "Research | Dr. Andrew Berryhill",
  description: "Research by economist Andrew Berryhill on fiscal rules, political economy, and public finance.",
};

const papers = [
  {
    title: "Costly Escape from Fiscal Rules: The Political Economy of Implementing Extraordinary Debt Repayment Clauses",
    summary:
      "Many countries overuse the escape clauses in their fiscal rules, resulting in higher deficits and debt. This paper studies a mechanism in Switzerland's fiscal rule that requires extraordinary debt to be repaid within six years. A political economy model considers when politicians would choose to adopt such a restriction and why its costs may limit adoption elsewhere.",
    slides: "/edrc-paper-slides.pdf",
  },
  {
    title: "Resolving the Puzzle of Weak Fiscal Rules: Time Inconsistency, Political Incentives, and Asymmetric Information",
    summary:
      "National fiscal rules are often weakly designed and susceptible to circumvention. This paper develops a political agency model in which voters value a commitment device for future spending, while politicians choose how binding the rule will be. The model connects weak rule design to voter time inconsistency, political incentives, and imperfect information.",
    slides: "/weak-fiscal-rules-slides.pdf",
  },
  {
    title: "Rule-Based Fiscal Governance: Challenges, Alternatives, and a Path for Reform",
    summary:
      "This chapter examines uncertainty, political discretion, and rule continuity as central challenges for fiscal governance. It evaluates fiscal standards as an alternative and revisits the proposal in Buchanan and Wagner's Democracy in Deficit, drawing lessons for institutional reform from Switzerland.",
    slides: null,
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

        <section className="standalone-list" aria-label="Research papers">
          {papers.map((paper) => (
            <article className="standalone-item" key={paper.title}>
              <h2>{paper.title}</h2>
              <p>{paper.summary}</p>
              <div className="paper-links">
                {paper.slides && (
                  <a href={sitePath(paper.slides)} target="_blank" rel="noreferrer">Slides (PDF)</a>
                )}
                <span className="paper-availability">Draft available on request</span>
              </div>
            </article>
          ))}
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Teaching | Dr. Andrew Berryhill",
  description: "Teaching experience and course information for economist Andrew Berryhill.",
};

export default function TeachingPage() {
  return (
    <main>
      <SiteHeader current="teaching" />
      <div className="inner-page compact-page teaching-page">
        <header className="page-heading">
          <h1>Teaching</h1>
          <p>
            I teach undergraduate economics at Rocky Mountain College. Before joining Rocky, I taught in the Department of Economics at Indiana University.
          </p>
        </header>

        <section className="teaching-section" aria-label="Teaching experience">
          <div className="course-columns">
            <section className="course-group" aria-labelledby="rocky-courses">
              <h3 id="rocky-courses">Rocky Mountain College</h3>
              <div className="course-grid">
                <div className="course-row"><strong>Principles of Economics</strong></div>
                <div className="course-row"><strong>Intermediate Microeconomics</strong></div>
                <div className="course-row"><strong>Money and Banking</strong></div>
                <div className="course-row"><strong>Intermediate Macroeconomics</strong></div>
                <div className="course-row"><strong>American Economic History</strong></div>
                <div className="course-row"><strong>Data Analysis</strong></div>
              </div>
            </section>
            <section className="course-group" aria-labelledby="indiana-courses">
              <h3 id="indiana-courses">Indiana University</h3>
              <div className="course-grid">
                <div className="course-row"><strong>Fundamentals of Economics for Business II</strong></div>
                <div className="course-row"><strong>Fundamentals of Economics for Business I</strong></div>
                <div className="course-row"><strong>Fundamentals of Economics I</strong></div>
              </div>
            </section>
          </div>
        </section>

        <section className="evaluations" aria-labelledby="evaluations-heading">
          <h2 id="evaluations-heading">Student evaluations</h2>
          <div className="quote-grid">
            <blockquote>
              <p>His passion for the subject makes the class more engaging, and he makes sure students receive help when they need it.</p>
              <cite>Spring 2021</cite>
            </blockquote>
            <blockquote>
              <p>Real-world examples connect the material to economic principles, and the lectures are thoughtfully structured.</p>
              <cite>Fall 2021</cite>
            </blockquote>
            <blockquote>
              <p>He is enthusiastic, straightforward with the material, and consistently willing to help students master the course content.</p>
              <cite>Spring 2022</cite>
            </blockquote>
            <blockquote>
              <p>His commitment to student success is clear, along with the genuine enjoyment he brings to teaching.</p>
              <cite>Fall 2023</cite>
            </blockquote>
            <blockquote>
              <p>He is knowledgeable, passionate about the subject, and helpful in answering questions both inside and outside the course.</p>
              <cite>Fall 2023</cite>
            </blockquote>
            <blockquote>
              <p>His positive approach is supported by interactive graphs and videos that extend and clarify the lessons.</p>
              <cite>Spring 2024</cite>
            </blockquote>
            <blockquote>
              <p>Real-world examples make the material easier to understand and the course more interesting.</p>
              <cite>Fall 2024</cite>
            </blockquote>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}

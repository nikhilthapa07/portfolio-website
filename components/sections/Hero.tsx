import PixelCursor from "@/components/PixelCursor";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="status">
          <i aria-hidden="true" />
          Currently building &amp; exploring
        </p>

        <div>
          <div className="name-wrap">
            <h1 className="name">
              <span>{profile.firstName}</span>
              <span>{profile.lastName}</span>
              <span className="sr-only">, full-stack developer</span>
            </h1>
            <div className="sel" aria-hidden="true">
              <b />
              <b />
              <b />
              <b />
            </div>
            <span className="sel-tag" aria-hidden="true">
              Full-Stack Developer
            </span>
            <p className="hi" aria-hidden="true">
              <svg
                viewBox="0 0 60 44"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M56 6c-10 2-26 6-36 18-4 5-7 10-9 15" />
                <path d="M4 30l7 10 8-7" />
              </svg>
              <span>hi, that&apos;s me!</span>
            </p>
            <PixelCursor
              className="c-sanika"
              label="nikhil"
              color="#3FA2FF"
            />
          </div>
        </div>

        <p className="lede">
          <strong>
            <span className="highlight">Full-stack.</span>{" "}
            <span className="highlight">Gen-AI.</span>
          </strong>{" "}
          I build scalable web platforms and intelligent AI systems, from
          polished interfaces to production-ready RAG pipelines.
        </p>

        <div className="cta">
          <a className="btn btn-ink" href="#work">
            See what I&apos;ve built
          </a>
          <a className="btn btn-ghost" href={profile.resume} download>
            Download résumé
          </a>
        </div>
      </div>

      <PixelCursor
        className="float c-front"
        label="full-stack"
        color="#8B8FFF"
      />
      <PixelCursor
        className="float c-product"
        label="gen-ai"
        color="#FFD447"
      />
      <PixelCursor
        className="float c-stack"
        label="product-minded"
        color="#45D39C"
      />
    </section>
  );
}

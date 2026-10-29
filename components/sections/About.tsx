import { caring, chips, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about">
        <div>
          <p
            className="note"
            style={{ transform: "rotate(-2deg)", marginBottom: 18 }}
          >
            about me
          </p>
          <p className="statement">
            I like building products that feel simple on the surface and
            intelligent underneath.
          </p>
          <p className="about-copy">{profile.summary}</p>
        </div>

        <div className="board-note">
          <div className="sticky">
            <span className="tape" aria-hidden="true" />
            <h3>What I care about</h3>
            <ul>
              {caring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="chips">
            {chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

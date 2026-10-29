import { profile } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="bar">
      <div className="wrap bar-in">
        <a className="file" href="#top">
          <span className="mark" aria-hidden="true">
            N
          </span>
          <span>Nikhil Thapa</span>
        </a>
        <nav className="nav" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#toolkit">Toolkit</a>
        </nav>
        <div className="bar-right">
          <a
            className="btn btn-ghost btn-resume"
            href={profile.resume}
            download
          >
            Resume
          </a>
          <a className="btn btn-butter" href="#contact">
            Say hi
          </a>
        </div>
      </div>
    </header>
  );
}

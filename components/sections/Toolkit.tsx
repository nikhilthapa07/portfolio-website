import StickerBoard from "@/components/StickerBoard";

export default function Toolkit() {
  return (
    <section className="sec" id="toolkit" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2">My toolkit</h2>
          <p className="note">
            <svg
              viewBox="0 0 50 34"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M46 28C34 30 18 26 8 10" />
              <path d="M4 18l3-10 10 2" />
            </svg>
            go on, drag them around
          </p>
        </div>

        <StickerBoard />
      </div>
    </section>
  );
}

import Image from "next/image";
import type { ProjectImage } from "@/data/portfolio";

export default function ProjectPreview({
  image,
  site,
}: {
  image: ProjectImage;
  site: string;
}) {
  const isSvg = image.src.endsWith(".svg");

  return (
    <div className={`preview${image.fit === "contain" ? " preview-contain" : ""}`}>
      <div className="preview-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <em>{site}</em>
      </div>

      <div className="preview-stage">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          unoptimized={isSvg}
          sizes="(max-width: 760px) 90vw, (max-width: 980px) 80vw, 560px"
          style={{ objectPosition: image.position ?? "center" }}
        />
        {image.credit ? (
          <a
            className="preview-credit"
            href={image.credit.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {image.credit.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}

import Image from "next/image";
import type { Project } from "@/lib/data";

// ─── ProjectRow ───────────────────────────────────────────────────────────────
// Server Component — no client JS, no event handlers.
// Hover interaction is purely CSS, gated behind @media (hover: hover).
//
// Desktop:
//   - Preview image reveals via clip-path on row hover.
//   - Full dark row invert with arrow slide.
// Mobile:
//   - Preview image renders as a clean responsive image block inside the row.
//   - No hover dependency for mobile users.
// ─────────────────────────────────────────────────────────────────────────────
type Props = {
  project: Project;
};

export default function ProjectRow({ project }: Props) {
  const ariaLabel = `View ${project.title}${!project.liveUrl ? " on GitHub" : ""}`;

  return (
    <a
      href={project.href}
      className="project-row"
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Desktop Preview — reveals via clip-path on desktop hover */}
      {project.previewImage ? (
        <span className="project-preview" aria-hidden="true">
          <span className="project-preview-inner">
            <Image
              src={project.previewImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="project-preview-img"
              loading="lazy"
            />
          </span>
        </span>
      ) : (
        <span
          className="project-preview project-preview--placeholder"
          aria-hidden="true"
        >
          <span className="project-preview-label">{project.index}</span>
        </span>
      )}

      {/* Row layout */}
      <span className="project-row-inner">

        {/* Index — decorative */}
        <span className="project-index" aria-hidden="true">
          {project.index}
        </span>

        {/* Title + description + mobile preview + mobile tags */}
        <span className="project-body">
          <span className="project-title">{project.title}</span>
          <span className="project-desc">{project.description}</span>

          {/* Mobile image preview — visible on mobile touch view */}
          {project.previewImage && (
            <span className="project-preview-mobile" aria-hidden="true">
              <Image
                src={project.previewImage}
                alt=""
                width={600}
                height={340}
                className="project-preview-mobile-img"
                loading="lazy"
              />
            </span>
          )}

          {/* Tags shown below description on mobile only */}
          <span
            className="project-tags project-tags--mobile"
            aria-label={`Technologies: ${project.tags.join(", ")}`}
          >
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </span>
        </span>

        {/* Desktop right column: tags + arrow */}
        <span className="project-meta">
          <span
            className="project-tags"
            aria-hidden="true"
          >
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </span>
          <span className="project-arrow" aria-hidden="true">
            →
          </span>
        </span>

      </span>
    </a>
  );
}

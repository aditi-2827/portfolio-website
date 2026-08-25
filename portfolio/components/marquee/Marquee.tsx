"use client";

interface MarqueeProps {
  items: string[];
  light?: boolean;
  reverse?: boolean;
}

export default function Marquee({ items, light = false, reverse = false }: MarqueeProps) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`marquee-section ${light ? "marquee-section--light" : ""}`}
      aria-hidden="true"
    >
      <div
        className="marquee-track marquee-animate"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {repeated.map((text, idx) => (
          <div
            key={idx}
            className={`marquee-item ${light ? "marquee-item--dark" : ""}`}
          >
            <span>{text}</span>
            <span className="marquee-star">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}

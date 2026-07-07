type PlaceholderArtProps = {
  alt: string;
  variant?: "forest" | "sand" | "clay";
  className?: string;
  pattern?: "orchard" | "crates" | "port" | "map" | "grove";
};

const variantStyles: Record<NonNullable<PlaceholderArtProps["variant"]>, string> = {
  forest: "from-forest-dark via-forest to-forest-light",
  sand: "from-sand-dark via-sand to-cream",
  clay: "from-clay-dark via-clay to-sand-dark",
};

/**
 * Stand-in for on-site photography. Each instance documents, via `alt`,
 * the real photo a producer/agency would supply at launch (e.g. macadamia
 * orchards, dried-fruit sorting lines, EU port logistics).
 */
export function PlaceholderArt({
  alt,
  variant = "forest",
  className = "",
  pattern = "orchard",
}: PlaceholderArtProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${variantStyles[variant]} ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={`pattern-${pattern}`}
            width="42"
            height="42"
            patternUnits="userSpaceOnUse"
          >
            {pattern === "orchard" && (
              <circle cx="21" cy="21" r="7" fill="currentColor" />
            )}
            {pattern === "crates" && (
              <rect x="6" y="6" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
            )}
            {pattern === "port" && (
              <path d="M0 30 L14 12 L28 30 L42 12" fill="none" stroke="currentColor" strokeWidth="2" />
            )}
            {pattern === "map" && (
              <path d="M0 21 H42 M21 0 V42" stroke="currentColor" strokeWidth="1" />
            )}
            {pattern === "grove" && (
              <path d="M21 4 V38 M12 14 L21 22 L30 14" fill="none" stroke="currentColor" strokeWidth="2" />
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pattern-${pattern})`} className="text-cream" />
      </svg>
      <span className="absolute bottom-3 left-3 right-3 text-xs tracking-wide text-cream/70">
        {alt}
      </span>
    </div>
  );
}

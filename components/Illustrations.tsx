type IllustrationProps = {
  alt: string;
  className?: string;
};

/**
 * Custom illustration standing in for real packhouse photography until
 * Euro-Cape Partners supplies on-site photos of crated macadamias and
 * dried fruit.
 */
export function CratesIllustration({ alt, className = "" }: IllustrationProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-forest-dark via-forest to-forest-light ${className}`}
    >
      <svg
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <rect width="640" height="480" fill="none" />

        {/* back row of crates */}
        {[60, 240, 420].map((x) => (
          <g key={`back-${x}`} transform={`translate(${x}, 90)`} opacity="0.55">
            <rect x="0" y="0" width="150" height="110" rx="4" className="fill-forest-dark stroke-cream/40" strokeWidth="3" />
            <line x1="0" y1="0" x2="150" y2="110" className="stroke-cream/20" strokeWidth="3" />
            <line x1="150" y1="0" x2="0" y2="110" className="stroke-cream/20" strokeWidth="3" />
            <circle cx="30" cy="30" r="10" className="fill-sand" />
            <circle cx="60" cy="55" r="10" className="fill-sand" />
            <circle cx="95" cy="25" r="10" className="fill-sand" />
            <ellipse cx="115" cy="70" rx="14" ry="9" className="fill-clay" />
          </g>
        ))}

        {/* front row of crates, larger and crisper */}
        {[20, 220, 420].map((x, i) => (
          <g key={`front-${x}`} transform={`translate(${x}, 250)`}>
            <rect x="0" y="0" width="190" height="150" rx="6" className="fill-forest-dark stroke-cream" strokeWidth="4" />
            <line x1="10" y1="10" x2="180" y2="10" className="stroke-cream/60" strokeWidth="3" />
            <line x1="10" y1="140" x2="180" y2="140" className="stroke-cream/60" strokeWidth="3" />
            <line x1="10" y1="10" x2="10" y2="140" className="stroke-cream/60" strokeWidth="3" />
            <line x1="180" y1="10" x2="180" y2="140" className="stroke-cream/60" strokeWidth="3" />

            {i === 1 ? (
              <>
                <ellipse cx="55" cy="60" rx="20" ry="13" className="fill-clay" />
                <ellipse cx="95" cy="85" rx="20" ry="13" className="fill-clay-dark" />
                <ellipse cx="135" cy="55" rx="20" ry="13" className="fill-clay" />
                <ellipse cx="70" cy="105" rx="20" ry="13" className="fill-clay-dark" />
                <ellipse cx="115" cy="110" rx="20" ry="13" className="fill-clay" />
              </>
            ) : (
              <>
                <circle cx="45" cy="55" r="16" className="fill-sand" />
                <circle cx="90" cy="80" r="16" className="fill-sand-dark" />
                <circle cx="135" cy="50" r="16" className="fill-sand" />
                <circle cx="60" cy="105" r="16" className="fill-sand-dark" />
                <circle cx="110" cy="105" r="16" className="fill-sand" />
                <circle cx="145" cy="95" r="16" className="fill-sand-dark" />
              </>
            )}
          </g>
        ))}

        {/* pallet slats along the base */}
        <g className="stroke-cream/25" strokeWidth="4">
          <line x1="0" y1="430" x2="640" y2="430" />
          <line x1="0" y1="445" x2="640" y2="445" />
        </g>
      </svg>
      <span className="absolute bottom-3 left-3 right-3 text-xs tracking-wide text-cream/70">
        {alt}
      </span>
    </div>
  );
}

/**
 * Custom illustration standing in for real port/terminal photography.
 */
export function PortIllustration({ alt, className = "" }: IllustrationProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-clay-dark via-clay to-sand-dark ${className}`}
    >
      <svg
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {/* sky/crane */}
        <g className="stroke-cream/50" strokeWidth="4" fill="none">
          <line x1="80" y1="440" x2="80" y2="60" />
          <line x1="80" y1="60" x2="380" y2="60" />
          <line x1="80" y1="100" x2="340" y2="100" />
          <line x1="140" y1="60" x2="140" y2="100" />
          <line x1="220" y1="60" x2="220" y2="100" />
          <line x1="300" y1="60" x2="300" y2="100" />
          <line x1="330" y1="100" x2="330" y2="150" />
        </g>
        <line x1="330" y1="150" x2="330" y2="170" className="stroke-cream/50" strokeWidth="4" />

        {/* stacked shipping containers */}
        {[
          { x: 40, y: 250, w: 130, h: 60, cls: "fill-forest-dark" },
          { x: 40, y: 314, w: 130, h: 60, cls: "fill-forest" },
          { x: 180, y: 220, w: 130, h: 60, cls: "fill-cream" },
          { x: 180, y: 284, w: 130, h: 60, cls: "fill-forest-dark" },
          { x: 180, y: 348, w: 130, h: 60, cls: "fill-forest" },
          { x: 330, y: 250, w: 130, h: 60, cls: "fill-forest" },
          { x: 330, y: 314, w: 130, h: 60, cls: "fill-cream" },
          { x: 480, y: 284, w: 130, h: 60, cls: "fill-forest-dark" },
          { x: 480, y: 348, w: 130, h: 60, cls: "fill-forest" },
        ].map((c, i) => (
          <g key={i}>
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="3" className={`${c.cls} stroke-cream/30`} strokeWidth="2" />
            {Array.from({ length: 5 }).map((_, j) => (
              <line
                key={j}
                x1={c.x + (j + 1) * (c.w / 6)}
                y1={c.y + 6}
                x2={c.x + (j + 1) * (c.w / 6)}
                y2={c.y + c.h - 6}
                className="stroke-cream/15"
                strokeWidth="2"
              />
            ))}
          </g>
        ))}

        {/* dock line and water */}
        <line x1="0" y1="420" x2="640" y2="420" className="stroke-cream/40" strokeWidth="4" />
        <path
          d="M0 450 Q 40 440 80 450 T 160 450 T 240 450 T 320 450 T 400 450 T 480 450 T 560 450 T 640 450"
          fill="none"
          className="stroke-cream/30"
          strokeWidth="3"
        />
      </svg>
      <span className="absolute bottom-3 left-3 right-3 text-xs tracking-wide text-cream/80">
        {alt}
      </span>
    </div>
  );
}

/**
 * Custom illustration standing in for real trade-route mapping graphics.
 * Light background by design, to sit as a contrast panel against a dark
 * hero section.
 */
export function TradeRouteIllustration({ alt, className = "" }: IllustrationProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-sand-dark via-sand to-cream ${className}`}
    >
      <svg
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {/* latitude/longitude map lines */}
        <g className="stroke-forest-dark/15" strokeWidth="2" fill="none">
          <path d="M-20 120 Q 320 60 660 120" />
          <path d="M-20 240 Q 320 200 660 240" />
          <path d="M-20 360 Q 320 320 660 360" />
          <path d="M120 -20 Q 160 240 120 500" />
          <path d="M320 -20 Q 360 240 320 500" />
          <path d="M520 -20 Q 560 240 520 500" />
        </g>

        {/* route line from the Cape to Greece/Europe */}
        <path
          d="M120 380 C 220 300, 260 220, 340 190 S 460 130, 500 100"
          fill="none"
          className="stroke-clay"
          strokeWidth="4"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />

        {/* small plane marker along the route */}
        <g transform="translate(330, 205) rotate(-35)">
          <path
            d="M0 0 L18 4 L0 8 L4 4 Z"
            className="fill-forest-dark"
          />
        </g>

        {/* origin pin: the Cape */}
        <g transform="translate(120, 380)">
          <circle r="26" className="fill-forest-dark/10" />
          <path
            d="M0 -16 C 9 -16 16 -9 16 0 C 16 11 0 26 0 26 C 0 26 -16 11 -16 0 C -16 -9 -9 -16 0 -16 Z"
            className="fill-forest-dark"
          />
          <circle r="5" cy="-2" className="fill-cream" />
        </g>

        {/* destination pin: Greece / Europe */}
        <g transform="translate(500, 100)">
          <circle r="26" className="fill-clay/15" />
          <path
            d="M0 -16 C 9 -16 16 -9 16 0 C 16 11 0 26 0 26 C 0 26 -16 11 -16 0 C -16 -9 -9 -16 0 -16 Z"
            className="fill-clay-dark"
          />
          <circle r="5" cy="-2" className="fill-cream" />
        </g>
      </svg>
      <span className="absolute bottom-3 left-3 right-3 text-xs tracking-wide text-ink/70">
        {alt}
      </span>
    </div>
  );
}

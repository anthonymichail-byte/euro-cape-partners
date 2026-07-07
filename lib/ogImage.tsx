import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export async function renderOgImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/favicon-512.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#22392c",
          backgroundImage:
            "linear-gradient(135deg, #172619 0%, #22392c 55%, #3c5b46 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={140}
          height={140}
          style={{ borderRadius: 28 }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 72,
            fontWeight: 700,
            color: "#f7f2e7",
            letterSpacing: -1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "#ece2c9",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}

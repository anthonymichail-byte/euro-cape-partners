import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

const routeMeta: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/services": { priority: 0.9, changeFrequency: "monthly" },
  "/sectors": { priority: 0.9, changeFrequency: "monthly" },
  "/about": { priority: 0.7, changeFrequency: "monthly" },
  "/contact": { priority: 0.6, changeFrequency: "monthly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return nav.map((item) => {
    const meta = routeMeta[item.href] ?? { priority: 0.5, changeFrequency: "monthly" as const };
    return {
      url: item.href === "/" ? site.url : `${site.url}${item.href}`,
      lastModified,
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    };
  });
}

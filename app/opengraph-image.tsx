import { ogImageSize, renderOgImage } from "@/lib/ogImage";

export const alt = "Euro-Cape Partners, Your European Sales Office";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage();
}

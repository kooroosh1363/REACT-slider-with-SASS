export function clampSlideIndex(index, total) {
  if (!Number.isInteger(total) || total <= 0) return 0;

  const numericIndex = Number.isFinite(Number(index)) ? Math.trunc(Number(index)) : 0;
  return Math.min(Math.max(numericIndex, 0), total - 1);
}

export function slideStatus(index, total, label) {
  const safeTotal = Number.isInteger(total) && total > 0 ? total : 0;
  const safeIndex = clampSlideIndex(index, safeTotal);
  const suffix = String(label ?? "").trim();

  if (safeTotal === 0) return "No gallery images available.";

  return `Image ${safeIndex + 1} of ${safeTotal}${suffix ? `: ${suffix}` : ""}`;
}

export function normalizeGalleryItems(items) {
  if (!Array.isArray(items)) return [];

  return items.filter((item) => (
    item
    && typeof item.id === "string"
    && item.id.trim() !== ""
    && typeof item.src === "string"
    && item.src.trim() !== ""
    && typeof item.alt === "string"
    && item.alt.trim() !== ""
    && typeof item.title === "string"
    && item.title.trim() !== ""
  ));
}

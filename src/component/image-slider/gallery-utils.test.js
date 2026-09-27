import {
  clampSlideIndex,
  normalizeGalleryItems,
  slideStatus,
} from "./gallery-utils";

describe("gallery utilities", () => {
  test("clamps slide indexes safely", () => {
    expect(clampSlideIndex(-3, 6)).toBe(0);
    expect(clampSlideIndex(2, 6)).toBe(2);
    expect(clampSlideIndex(99, 6)).toBe(5);
    expect(clampSlideIndex(2, 0)).toBe(0);
  });

  test("builds accessible slide status text", () => {
    expect(slideStatus(0, 6, "Front view")).toBe("Image 1 of 6: Front view");
    expect(slideStatus(5, 6, "")).toBe("Image 6 of 6");
    expect(slideStatus(0, 0, "Anything")).toBe("No gallery images available.");
  });

  test("filters malformed gallery items", () => {
    const items = normalizeGalleryItems([
      { id: "one", src: "/one.jpg", alt: "One", title: "One" },
      { id: "", src: "/two.jpg", alt: "Two", title: "Two" },
      { id: "three", src: "", alt: "Three", title: "Three" },
      null,
    ]);

    expect(items).toHaveLength(1);
    expect(items[0].id).toBe("one");
  });
});

import { useMemo, useRef, useState } from "react";
import { A11y, Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProImageSlider.scss";

import { normalizeGalleryItems, slideStatus } from "./gallery-utils";

function openDialog(dialog) {
  if (!dialog) return;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(dialog) {
  if (!dialog) return;

  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

export default function ProImageSlider({ images = [] }) {
  const items = useMemo(() => normalizeGalleryItems(images), [images]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef(null);

  if (items.length === 0) {
    return (
      <section className="gallery gallery--empty" aria-label="Product gallery">
        <p>No product images are available.</p>
      </section>
    );
  }

  const activeItem = items[activeIndex] ?? items[0];

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <div className="gallery__heading">
        <div>
          <p className="gallery__eyebrow">Interactive product gallery</p>
          <h2 id="gallery-title">{activeItem.title}</h2>
        </div>
        <p className="gallery__status" aria-live="polite">
          {slideStatus(activeIndex, items.length, activeItem.label)}
        </p>
      </div>

      <div className="gallery__stage">
        <Swiper
          className="gallery__main"
          modules={[A11y, Keyboard, Navigation, Thumbs]}
          navigation
          keyboard={{ enabled: true, onlyInViewport: true }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous product image",
            nextSlideMessage: "Next product image",
            firstSlideMessage: "This is the first product image",
            lastSlideMessage: "This is the last product image",
          }}
          spaceBetween={16}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <figure className="gallery__figure">
                <img
                  src={item.src}
                  alt={item.alt}
                  width="640"
                  height="640"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption>{item.label}</figcaption>
                <button
                  className="gallery__expand"
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    openDialog(dialogRef.current);
                  }}
                  aria-label={`Open larger view of ${item.title}`}
                >
                  <span aria-hidden="true">↗</span>
                  Inspect
                </button>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gallery__thumb-region">
          <span className="gallery__thumb-label">Choose a view</span>
          <Swiper
            className="gallery__thumbs"
            modules={[A11y, Thumbs]}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            spaceBetween={10}
            slidesPerView={3.25}
            breakpoints={{
              520: { slidesPerView: 4.25 },
              760: { slidesPerView: 5.25 },
            }}
            a11y={{ enabled: true }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={`thumb-${item.id}`}>
                <button
                  className="gallery__thumb"
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={item.src} alt="" width="112" height="112" loading="lazy" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <dialog
        className="gallery-dialog"
        ref={dialogRef}
        aria-labelledby="gallery-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog(dialogRef.current);
        }}
      >
        <div className="gallery-dialog__toolbar">
          <div>
            <span>Detail view</span>
            <strong id="gallery-dialog-title">{activeItem.title}</strong>
          </div>
          <button
            type="button"
            onClick={() => closeDialog(dialogRef.current)}
            aria-label="Close larger image"
          >
            Close
          </button>
        </div>
        <img src={activeItem.src} alt={activeItem.alt} />
      </dialog>
    </section>
  );
}

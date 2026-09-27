import "./App.scss";
import ProImageSlider from "./component/image-slider/ProImageSlider";
import { galleryItems } from "./data/galleryItems";

function App() {
  return (
    <main className="product-page">
      <header className="product-page__intro">
        <div>
          <p className="product-page__eyebrow">React 18 / Swiper / Sass</p>
          <h1>GalleryLens</h1>
        </div>
        <p>
          A product-image carousel treated as a reusable interface component:
          keyboard navigation, thumbnail control, semantic status, detail view,
          reduced-motion support, and tested gallery policy.
        </p>
      </header>

      <section className="product-shell" aria-label="Cap collection preview">
        <div className="product-shell__gallery">
          <ProImageSlider images={galleryItems} />
        </div>

        <aside className="product-summary" aria-labelledby="product-summary-title">
          <p className="product-summary__index">Collection / 06 views</p>
          <h2 id="product-summary-title">Everyday cap study</h2>
          <p>
            Six product images from the original 2023 exercise, reorganized into
            an accessible React gallery instead of a placeholder component.
          </p>

          <dl>
            <div><dt>Interaction</dt><dd>Keyboard + thumbnails</dd></div>
            <div><dt>Slider engine</dt><dd>Swiper 10</dd></div>
            <div><dt>Styling</dt><dd>Modular Sass</dd></div>
            <div><dt>Autoplay</dt><dd>Disabled</dd></div>
          </dl>

          <div className="product-summary__note">
            <strong>Design boundary</strong>
            <p>
              This is a front-end gallery demo. It does not imply inventory,
              pricing, checkout, or ownership of the pictured brands.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;

import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./component/image-slider/ProImageSlider", () => () => (
  <section aria-label="Mock product gallery">Gallery component</section>
));

describe("App", () => {
  test("presents the maintained product-gallery scope", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "GalleryLens" })).toBeInTheDocument();
    expect(screen.getByLabelText("Mock product gallery")).toBeInTheDocument();
    expect(screen.getByText(/Autoplay/i)).toBeInTheDocument();
    expect(screen.getByText(/Disabled/i)).toBeInTheDocument();
  });
});

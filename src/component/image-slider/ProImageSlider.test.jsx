import { fireEvent, render, screen } from "@testing-library/react";
import ProImageSlider from "./ProImageSlider";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide">{children}</div>,
}), { virtual: true });

jest.mock("swiper/modules", () => ({
  A11y: {},
  Keyboard: {},
  Navigation: {},
  Thumbs: {},
}), { virtual: true });

jest.mock("swiper/css", () => ({}), { virtual: true });
jest.mock("swiper/css/navigation", () => ({}), { virtual: true });
jest.mock("swiper/css/thumbs", () => ({}), { virtual: true });

const images = [
  {
    id: "one",
    src: "/one.jpg",
    title: "Orange cap",
    label: "Front view",
    alt: "Orange cap product photo",
  },
  {
    id: "two",
    src: "/two.jpg",
    title: "Blue cap",
    label: "Side view",
    alt: "Blue cap product photo",
  },
];

describe("ProImageSlider", () => {
  test("renders an accessible empty state", () => {
    render(<ProImageSlider images={[]} />);
    expect(screen.getByText("No product images are available.")).toBeInTheDocument();
  });

  test("renders status, product images, and thumbnail controls", () => {
    render(<ProImageSlider images={images} />);

    expect(screen.getByRole("heading", { name: "Orange cap" })).toBeInTheDocument();
    expect(screen.getByText("Image 1 of 2: Front view")).toBeInTheDocument();
    expect(screen.getAllByAltText("Orange cap product photo").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("button", { name: "Show Blue cap" })).toBeInTheDocument();
  });

  test("updates component state when a thumbnail is chosen", () => {
    render(<ProImageSlider images={images} />);

    fireEvent.click(screen.getByRole("button", { name: "Show Blue cap" }));

    expect(screen.getByRole("heading", { name: "Blue cap" })).toBeInTheDocument();
    expect(screen.getByText("Image 2 of 2: Side view")).toBeInTheDocument();
  });

  test("opens the larger image dialog from Inspect", () => {
    HTMLDialogElement.prototype.showModal = function showModal() {
      this.setAttribute("open", "");
    };

    render(<ProImageSlider images={images} />);
    fireEvent.click(screen.getByRole("button", { name: "Open larger view of Orange cap" }));

    expect(screen.getByRole("dialog")).toHaveAttribute("open");
    expect(screen.getByRole("heading", { name: "Orange cap" })).toBeInTheDocument();
  });
});

import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

describe("Tests the Carousel component", function () {
  it("properly renders an instance of 'Carousel' without crashing", function () {
    render(<Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);
  });

  it("matches snapshot", function () {
    const { container } =
      render(
        <Carousel
          photos={TEST_IMAGES}
          title="images for testing"
        />);

    expect(container).toMatchSnapshot();
  });

  it("works when you click on the right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  });

  it("Works when you click the left arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();

    // move backward in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
  });

  it("does not render the left arrow on first image", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    // expect left arrow to not be rendered
    expect(
      container.querySelector('.bi-arrow-left-circle')
    ).not.toBeInTheDocument();
  });

  it("does not render the right arrow on the last image", function () {
    //TODO: Ask: is it every worth mocking the useState() default value?
            // i.e. don't rely on any partial functionality.. definitely present the 'black box'
            // in THIS state...

            // Ans: we would not!
            // more subtly: these are COMPONENT tests. tests for PRESENTATION.
            // if it was truly a test of LOGIC... business logic. a diff .test.js
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );

    // move forward in the carousel twice
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    // expect the right arrow to not be rendered
    expect(
      container.querySelector('.bi-arrow-right-circle')
    ).not.toBeInTheDocument();
  });
});

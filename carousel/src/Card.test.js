import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";


// caption, src, currNum, totalNum
const testCard1 = {
    caption: TEST_IMAGES[0].caption,
    src: TEST_IMAGES[0].src,
    currNum: 1,
    totalNum: 1,
}

describe("Test the individual card component", function () {
    it("successfully renders the component without crashing", function () {
        render(<Card
            caption={testCard1.caption}
            src={testCard1.src}
            currNum={testCard1.currNum}
            totalNum={testCard1.totalNum}
        />);
    });

    it("matches the snapshot", function () {
        const { container } =
            render(<Card
                caption={testCard1.caption}
                src={testCard1.src}
                currNum={testCard1.currNum}
                totalNum={testCard1.totalNum}
            />);

        expect(container).toMatchSnapshot();
    });
});

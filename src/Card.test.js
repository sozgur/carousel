import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
test("render without crashing", () => {
    render(<Card />);
});

// snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});

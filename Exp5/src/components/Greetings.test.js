import { render } from "@testing-library/react";
import Greeting from "./Greetings";
test("matches snapshot", () => {
    const {container} = render (<Greeting name = "FS-2" />);
    expect(container).toMatchSnapshot();
});

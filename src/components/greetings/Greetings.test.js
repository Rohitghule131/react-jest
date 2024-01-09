import { render } from "@testing-library/react";
import Greetings from ".";


test("Testing greetings components", ()=>{
    const {asFragment, getByText, getByTitle} = render(<Greetings/>);
    expect(getByText(/Hello, World/i)).toBeInTheDocument();
    expect(getByTitle("Cute doggy")).toBeInTheDocument();
});
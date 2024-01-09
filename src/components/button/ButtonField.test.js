import { fireEvent, render } from "@testing-library/react";

import ButtonField from ".";


describe("test button state", ()=> {
    test("test button click event", () => {
    const {getByRole, getByText} = render(<ButtonField/>);
    const button = getByRole("button");
    fireEvent.click(button);
    const renderText = getByText("Component render");
    expect(renderText.innerHTML).toBe("Component render");
    expect(button).toBeInTheDocument();
})});

// describe("test re-render component", () => {
//     test("test re-render when click envent happen", () => {
//     const {getByRole, asFragment} = render(<ButtonField/>);
//     const button = getByRole("button");
//     const firstRender = asFragment();
//     fireEvent.click(button);
    
//     expect(firstRender).toMatchInlineSnapshot(asFragment());
// })});
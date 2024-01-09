import { render, fireEvent } from "@testing-library/react";
import InputField from ".";

describe("This is input component test case", ()=>{

    test("input field test", ()=>{
        const {getByRole} = render(<InputField/>);
        expect(getByRole("textbox")).toHaveAttribute(
            "name", "username"
        );
    });

    test("input field test2", ()=>{
        const {getByRole} = render(<InputField/>);
        expect(getByRole("textbox")).toHaveAttribute(
            "title", "username"
        );
    });

    test("input field test3", ()=>{
        const {getByRole} = render(<InputField/>);
        expect(getByRole("textbox")).toHaveAttribute(
            "id", "username"
        );
    });

});

describe("This input field functional testing", () => {
    
    test("test input on change function", ()=>{
        const {getByRole} = render(<InputField/>);
        const input = getByRole("textbox");
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test");
    });
    
});
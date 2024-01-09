import React, { useState } from 'react'

const ButtonField = () => {
    const [value, setValue] = useState("");

    const handleChangeValue = () => {
        setValue("Component render");
    };

    return (
        <div>
            <p id='render-value'>
                {value}
            </p>
            <button onClick={handleChangeValue}>
                Click
            </button>
        </div>
    );
};

export default ButtonField;


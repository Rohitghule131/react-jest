import React, { useState } from 'react'

const InputField = () => {
    const [value, setValue] = useState("");

  return (
    <div>
        <input
        placeholder='Enter your name'
        title='username'
        name="username"
        id="username"
        value={value}
        onChange={(e)=> {setValue(e?.target?.value)}}
        />
    </div>
  )
}

export default InputField;
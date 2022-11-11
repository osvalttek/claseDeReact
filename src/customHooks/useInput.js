import React, { useState } from "react"

const useInput = (type = "text", name, value = "") => {
    const [input, setInput] = useState({
        [name]: value
    });
    const onInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({ [name]: value });
    };
    return {
        input,
        onInput,
        type: type,
        name: name,
        value: input[name]
    }
};
export default useInput
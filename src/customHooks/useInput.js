import React, { useState } from "react"

const useInput = (type = "text", name, value = "") => {
    const [input, setInput] = useState({
        [name]: value
    });
    const onInput = (e) => {
        // console.log(e.target)
        let name = e.target.name;
        let value = e.target.value;
        // let newData = { ...input };
        // newData[name] = value;
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
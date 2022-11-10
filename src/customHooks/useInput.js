import React, { useState } from "react"


const useInput = () => {
    const [input, setInput] = useState({});
    const onInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // let newData = { ...input };
        // newData[name] = value;
        setInput({[name]:value});
    };

    return {
        input,
        onInput
    }
};

export default useInput
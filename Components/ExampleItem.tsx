import React, { useState } from "react"


interface IProps {
    Name: string;
}

export default ({Name} : IProps) => {
    const [enabled, setEnabled] = useState(false);
    const toggleState = () => setEnabled((val) => !val);
    return (
        <div onClick={toggleState} style={{border: "solid 1px black", padding: 10, margin: 10, background: enabled ? "green" : "red"}}>
            {Name}
        </div>
    )
}
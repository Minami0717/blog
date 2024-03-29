import React from "react";

function Writer(props) {
    return (
        <span>
            <img src={props.img} alt="" width={50}/>
            <span>{props.name}</span>
        </span>
    )
}

export default Writer;
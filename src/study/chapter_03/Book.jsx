import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`name is ${props.name}deth.`}</h1>
            <h2>{`total ${props.numOfPage}page.`}</h2>
        </div>
    )
}

export default Book;
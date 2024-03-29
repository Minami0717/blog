import React from "react";

function Clock() {
    return (
        <div>
            <h1>hello, react</h1>
            <h2>time: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
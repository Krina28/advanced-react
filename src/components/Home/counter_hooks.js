import React, { useEffect, useState } from "react";

export default function CounterHooks() {
    const [counter, updateCounter] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${counter} times`;
    });

    return (
        <div>
            <p>This counter is build through React Hooks</p>
            <span>You clicked {counter} times</span>
            <button
                onClick={() => {
                    updateCounter(counter + 1);
                }}
            >
                Click here
            </button>
        </div>
    );
}

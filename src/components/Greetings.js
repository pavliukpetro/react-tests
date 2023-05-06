import { useState } from "react";
import Output from "./Output";
import Async from "./Async";

function Greetings() {
    const [changedText, setChangedTest] = useState(false);

    const changeTextHandler = () => {
        setChangedTest(true);
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <Async />
            {!changedText && <Output>Some text</Output>}
            {changedText && <Output>Changed text</Output>}
            <button onClick={changeTextHandler}>Change text</button>
        </div>
    );
}

export default Greetings;
import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);


function handleClick(){
    setCounter(counter + 1);
}

return(<button onClick={handleClick}>Clicked {counter} times</button>);
}
export default Counter
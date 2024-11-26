import { useState } from "react";

function Test1onclick(){
    let [counter, setCounter]=useState(0)
    return(
        <div>
            <h2>Counter value is: {counter}</h2>
<button onClick={()=>setCounter(++counter)}>Click here</button>
        </div>
    )
}
export default Test1onclick;
import { useState } from "react";

function Button(){
  const [count, setCount] = useState(0);
  const styles = {
      backgroundColor: "blue",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    }
function handleClick(){
  setCount(count+1);
}
    
 return(<button style={styles} onClick={handleClick}> Clicked {count} times</button>);
}
export default Button
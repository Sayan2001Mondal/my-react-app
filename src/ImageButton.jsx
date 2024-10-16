


function ImageButton(){
    const handleClick = (e) => e.target.textContent = "You clicked the button"
    // let count = 0;

    // const handleClick = (name) =>{
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // }
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    return(
        <button onDoubleClick={(e) => handleClick(e)}>Picture Button</button>
    );
}
export default ImageButton
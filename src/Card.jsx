import DogePic from './assets/Doge.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={DogePic}  style={{background: "white"}} alt="picture"/>
            <h2 className="card-title">Hello</h2>
            <p className="card-text">This is a paragraph</p>
        </div>
    );
}
export default Card
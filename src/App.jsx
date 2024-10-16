import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import List from "./List.jsx";
import Student from "./student.jsx";
import Button from "./Button.Jsx";
import UserGreeting from "./UserGreeting.jsx";
import Counter from "./Counter.jsx";
import ImageButton from "./ImageButton.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
function App() {
    const fruits = [{id:1, name: "apple", calories: 95},
        {id: 2,name: "orange", calories: 45},
        {id:3,name: "banana", calories: 105},
        {id:4,name: "coconut", calories: 159},
        {id:5,name: "pineapple", calories: 37}];

    const vegetables = [{id:6, name: "potatoes", calories: 140},
            {id: 7,name: "celery", calories: 20},
            {id:8,name: "carrots", calories: 154},
            {id:9,name: "corn", calories: 178},
            {id:10,name: "broccoli", calories: 51}];
    return(
        <>

        <Header/>
        <Food/>
        <ProfilePicture/>
        <Student name="Doge" age={30} isStudent={true}/>
        <Student name="Balltze" age={42} isStudent={false}/>
        <Student name="Larry"/>
        <UserGreeting isLoggedIn={true} username="Doge"/>
        <Card/>
        <Card/>
        {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
        {fruits.length > 0 && <List items={vegetables} category="Vegetables"/> }
        <Button/><Counter/>
        <ImageButton/>
        <Footer/>
        </>
    );
}
export default App

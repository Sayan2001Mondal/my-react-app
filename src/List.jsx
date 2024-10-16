import PropTypes from 'prop-types';
function List(props){
    const itemList = props.items;
    const category = props.category;

        //  fruits.sort((a,b) => a.name.localeCompare(b.name));
        //  fruits.sort((a,b) => b.name.localeCompare(a.name));
        // fruits.sort((a,b) => a.calories -b.calories);
        // fruits.sort((a,b) => b.calories-a.calories);/

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

        const listItems = itemList.map((item) => <li key={item.id}>
                                                            {item.name}:&nbsp;
                                                            <b>{item.calories}</b></li>)
    // const listItems = lowCalFruits.map((lowCalfruit) => <li key={lowCalfruit.id}>
    //                                             {lowCalfruit.name}:&nbsp;
    //                                             <b>{lowCalfruit.calories}</b>
    //                                             </li>);

    return(<><h3 className='list-category'>{category}</h3>
             <ol className='list-item'>{listItems}</ol>
            </>);
}

List.propTypes ={
    items : PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                                name: PropTypes.string,
                                                calories : PropTypes.number  
    })),
    category : PropTypes.string
}

List.defaultProps = {
    category : "Category",
    items : [],
}

export default List
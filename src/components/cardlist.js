import Card from './Card.js'
import './cardlist.css'
// robots is array so loop through it as there are many cards
// cardlist is now a react component and a component either must be functional component or class component, yo ta keini vayena , array matra vayo so milena
// react component must return HTML

const CardList = (props) => {
    // if(true){
    //     throw new Error("no");
    // }  oops that is not good vanera aayo
    
    const all_cards = props.robots.map((item,index)=><Card key={item.id} id={item.id} name={item.name} email={item.email}/>)
    // while using loop, give unique key to the every child(i.e item)
    return(<div className='custom'>
        {all_cards}
    </div>
    )
}
// NOTE: we can also return an array: return([ <h1>kale</h1>, <p>don</p> , <div></div>]) ,  coz array vaneko ni auta chij honi, and return statement can only return one thing at a time
// it can return a div, a nested div, it can also return an array return([]) 
// so bina div: return(all_cards) matra gare ni hunxa as it is a array, bina div: esma {all_cards} gare chai it thinks i returned a obj and throws error
export default CardList
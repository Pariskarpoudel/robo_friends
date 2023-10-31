import Card from './Card.js'
import './cardlist.css'


const CardList = (props) => {

    const all_cards = props.robots.map((item,index)=><Card key={item.id} id={item.id} name={item.name} email={item.email}/>)

    return(<div className='custom'>
        {all_cards}
    </div>
    )
}

export default CardList
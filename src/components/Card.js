import React from 'react';
import './Card.css'

const Card = (props) => {
    // h2, p haruma props.email props.name eg: <h2>{props.name}</h2>  use garna vanda i can use destructuring and use as variables
    const {name, email, id} = props;
    return(
        <div className='bg-light-green tc br3 pa3 ma2 dib grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"/>
            <div>
                <h2> {name} </h2>  
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;

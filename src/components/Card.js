import React from 'react';
import './Card.css'

const Card = (props) => {

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

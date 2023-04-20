import React from 'react';

const Card = (props) => {
    const {id, name, email, phone, website} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt={`${name} robot`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
            </div>
        </div>
    );
}

export default Card;
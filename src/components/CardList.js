import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cards = robots.map((user, i) => 
        <Card key={i} id={robots[i].id} 
            name={robots[i].name} email={robots[i].email} 
            phone={robots[i].phone} website={robots[i].website} />);
    return (
        <div>
            {cards}
        </div>
    );
}

export default CardList;
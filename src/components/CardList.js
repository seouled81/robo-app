import React from 'react';
import Card from './Card';

const cardList = ({ robots }) => {
  const cardComponent = robots.map(robot => {
    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  })
  return ( 
    <div>
      {cardComponent}
    </div>
    
  )

}

export default cardList;
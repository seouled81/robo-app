import React from 'react';

const scroll = (props) => {
  return (
    <div style={{overflowY:'scroll', borderTop: '1px solid #333', height: '500px'}}>
      {props.children}
    </div>
  )
}

export default scroll;
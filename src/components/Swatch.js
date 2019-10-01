import React from 'react';

export default (props) => {
  return(
    <div className="color" style={{backgroundColor: props.color}}>
        {!props.hideHex && <strong>{props.color}</strong>}
    </div>
  )
}
import React from 'react';

export default function Space(props) {
  return (
    <div className="Space" onClick={() => props.update(props.index)}>
      <h2>{ props.space }</h2>
    </div>
  )
}

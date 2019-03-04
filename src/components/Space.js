import React from 'react';

export default function Space(props) {
  return (
    <div onClick={() => props.update(props.index)}>
      <h1>{ props.index }</h1>
    </div>
  )
}

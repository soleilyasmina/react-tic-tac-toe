import React from 'react';

export default function Points(props) {
  return (
    <div className="Points">
      <div><h3>X: {props.x}</h3></div>
      <div><h3>O: {props.o}</h3></div>
    </div>
  )
}

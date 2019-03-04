import React from 'react';
import Space from './Space';

export default function Board(props) {
  return (
    <div className="Board">
      {props.board.map((space, index) => (<Space space={space} index={index} update={props.update}/>))}
    </div>
  )
}

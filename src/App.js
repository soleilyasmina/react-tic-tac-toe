import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      turn: 'X'
    }
    this.updateBoard = this.updateBoard.bind(this);
  }
  updateBoard(index) {
    let { board, turn } = this.state;
    board[index] = turn;
    this.setState({ board });
  }
  render() {
    return (
      <div className="App">
        <Board board={this.state.board} update={this.updateBoard}/>
      </div>
    );
  }
}

export default App;

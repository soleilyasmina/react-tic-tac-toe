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
    this.changeTurn = this.changeTurn.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }
  changeTurn = () => this.state.turn === 'X' ? this.setState({ turn: 'O' }) : this.setState({ turn: 'X' });

  updateBoard = index => {
    let { board, turn } = this.state;
    if (board[index]) return;
    board[index] = turn;
    this.setState({ board });
    this.changeTurn();
  }
  render = () => {
    return (
      <div className="App">
        <Board board={this.state.board} update={this.updateBoard}/>
      </div>
    );
  }
}

export default App;

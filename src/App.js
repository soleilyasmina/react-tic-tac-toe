import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import win from './services/winconditions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      turn: 'X',
      points: [0,0],
      reset: false
    }
    this.changeTurn = this.changeTurn.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }

  changeTurn = async () => await this.state.turn === 'X' ? this.setState({ turn: 'O' }) : this.setState({ turn: 'X' });

  async awardPoints() {
    let { points, turn } = await this.state;
    turn === 'X' ? points[0] += 1 : points[1] += 1;
    await this.setState({ points });
  }

  async resetGame() {
    await this.setState({ reset: true });
    await this.awardPoints();
    await setTimeout(() => {
      this.setState({ 
        board: [
          null, null, null,
          null, null, null,
          null, null, null
        ],
        turn: 'X',
        reset: false
      });
    }, 1500);
  }
  
  async updateBoard(index) {
    let { board, turn, reset } = await this.state;
    if (board[index] !== null || reset === true) return;
    board[index] = turn;
    await this.setState({ board });
    win(board) ? 
    await this.resetGame() :
    await this.changeTurn();
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

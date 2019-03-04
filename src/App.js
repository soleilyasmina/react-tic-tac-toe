import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Points from './components/Points';
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
      reset: false,
      title: 'tictactoe'
    }
    this.changeTurn = this.changeTurn.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }

  changeTurn = async () => await this.state.turn === 'X' ? this.setState({ turn: 'O' }) : this.setState({ turn: 'X' });
  
  async awardPoints() {
    let { points, turn } = await this.state;
    turn === 'X' ? points[0] += 1 : points[1] += 1;
    await this.setState({ points, title: `${turn} wins!`});
  }

  async resetGame(win) {
    await this.setState({ reset: true });
    if (win) await this.awardPoints();
    else await this.setState({ title: "it's a tie!" });
    await setTimeout(() => {
      this.setState({ 
        board: [
          null, null, null,
          null, null, null,
          null, null, null
        ],
        turn: 'X',
        reset: false,
        title: 'tictactoe'
      });
    }, 1500);
  }
  
  async updateBoard(index) {
    let { board, turn, reset } = await this.state;
    if (board[index] !== null || reset === true) return;
    board[index] = turn;
    await this.setState({ board });
    win(board) ? 
    await this.resetGame(true) :
    await this.changeTurn();
    if (!board.includes(null)) await this.resetGame(false);
  }
  render() {
    return (
      <div className="App">
        <h1>{ this.state.title }</h1>
        <Board board={this.state.board} update={this.updateBoard} />
        <Points x={this.state.points[0]} o={this.state.points[1]} />
      </div>
    );
  }
}

export default App;

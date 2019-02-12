import React, { Component } from 'react';

import './Board.css';

import Square from './Square';
import ResetButton from './ResetButton';

export default class Board extends Component {

    constructor() {
        super();

        this.state = {  
            squares : Array(9).fill(null),
            xIsNext : true,
            winner  : null,
            full    : false
        }
    }

    handleOnClick(index, turn) {

        const newSquares = this.state.squares.slice();
        newSquares[index] = turn;

        var winner = this.calculateWinner(newSquares);

        this.setState({
            xIsNext: !this.state.xIsNext,
            squares: newSquares,
            winner: winner !== null ? winner : this.state.winner
        });
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] !== null && squares[b] !== null && squares[c] !== null) {
                if (squares[a] === squares[b] && squares[a] === squares[c] && squares[b] === squares[c]) {
                    return squares[a];
                }
            }
        }

        if (squares.every(function(el) {
            let arg = el !== null ? true : false;
            return arg;
        })) {
            this.setState({
                full: true
            })
        };

        return null;
    }

    handleResetGame() {
        this.setState({
            squares : Array(9).fill(null),
            xIsNext : true,
            winner  : null,
            full    : false
        });
    }

    render() {
        const indexSquares = [0,1,2,3,4,5,6,7,8];

        var squares = indexSquares.map(function(indexSquare, i) {
            return (<Square
                value={this.state.squares[i]}
                key={i}
                index={i}
                winner={this.state.winner}
                xIsNext={this.state.xIsNext}
                onClick={this.handleOnClick.bind(this)} />)
        },this)

        var row1 = squares.slice(0,3);
        var row2 = squares.slice(3,6);
        var row3 = squares.slice(6,9);
        return (
            <div className="top-container">
                <h1 style={{textAlign: 'center', fontSize: '46px', color: '#fc4b05'}}>Kitchen Mate Tic-Tac-Toe</h1>
                <div>
                    { this.state.winner != null
                            ? <h3 style={{color: 'green'}} id="Winner">
                                {this.state.winner !== null ? <span>The Winner is: <b>{this.state.winner}</b></span> : "" }
                            </h3>
                            : this.state.full ? <h3>There is no Winner!</h3> : <h3>{this.state.xIsNext === true ? "Donut": "Celery"}'s Turn</h3>
                    }
                </div>
                <div className="container">
                    <div className="row">
                        <br />
                        <div className="squares">{row1}</div>
                        <div className="squares">{row2}</div>
                        <div className="squares">{row3}</div>
                    </div>
                </div>
                <br />
                {this.state.winner !== null || this.state.full === true ? <ResetButton onClick={this.handleResetGame.bind(this)} /> : ""}
            </div>
        )
    }
}
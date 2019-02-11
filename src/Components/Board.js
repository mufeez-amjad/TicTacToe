import React, { Component } from 'react';

import './Board.css';

import Square from './Square';

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

        this.setState({
            xIsNext: !this.state.xIsNext,
            squares: newSquares,
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

        return (
            <div>
                <h1 style={{textAlign: 'center', fontSize: '46px', color: 'green'}}>Tic-Tac-Toe</h1>
                <div className="container">
                    <div className="row">
                        <br />
                        <div className="squares">{squares}</div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}
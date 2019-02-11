import React, { Component } from 'react';
import donut from './donut.svg';
import cinnamon from './cinnamon_sticks.svg';

export default class Square extends Component {

    handleOnClick(event) {

        if (this.props.value === null && this.props.winner === null) {

            const nextTurn = this.props.xIsNext ? 'Donut' : 'Cinnamon';

            this.props.onClick(this.props.index, nextTurn);

            event.target.className += " square-container-active";
        }
    }

    render() {
        return (
            <div onClick={this.handleOnClick.bind(this)} className="square-container">
                <div style={{width:'50px', height: '50px'}}>
                    { this.props.value === 'Donut'
                        ? <img src={donut} alt="Donut"></img>
                        : this.props.value === 'Cinnamon'
                            ? <img src={cinnamon} alt="Cinnamon"></img>
                            : ""
                    }
                </div>
            </div>
        )
    }
}
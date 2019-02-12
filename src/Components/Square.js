import React, { Component } from 'react';
import donut from './donut.svg';
import celery from './cinnamon_sticks.svg';

export default class Square extends Component {

    handleOnClick(event) {

        if (this.props.value === null && this.props.winner === null) { //only take valid input

            const nextTurn = this.props.xIsNext ? 'Donut' : 'Celery';

            this.props.onClick(this.props.index, nextTurn);
        }
    }

    render() {
        return (
            <div onClick={this.handleOnClick.bind(this)} className="square-container">
                <div style={{width:'50px', height: '50px'}}>
                    { this.props.value === 'Donut'
                        ? <img src={donut} alt="Donut"></img>
                        : this.props.value === 'Celery'
                            ? <img src={celery} alt="Celery"></img>
                            : ""
                    }
                </div>
            </div>
        )
    }
}
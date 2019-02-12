import React, { Component } from 'react';

export default class ResetButton extends Component {
    render() {
        return (
            <div>
                <p style={{textAlign: 'center'}}>
                    <button className="btn" onClick={this.props.onClick}>
                        Reset Game
                    </button>
                </p>
            </div>
        )
    }
}
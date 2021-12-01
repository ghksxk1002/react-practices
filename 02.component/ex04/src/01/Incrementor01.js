import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }
    onClickBotten(e){
        // this.state.value = this.state.value + this.props.state; 이렇게 쓰면 안됨
        this.setState({ //  setState 함수를 통해 상태를 변경시켜줌
            val: this.state.val + this.state.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={ this.onClickBotten.bind(this) }>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}
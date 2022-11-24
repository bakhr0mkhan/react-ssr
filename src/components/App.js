import React from 'react';
import "../styles/styles.scss";

export default class Counter extends React.Component {
    constructor() {
        super();

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        console.log('Counter.render()');

        return (
            <div className='ui-counter'>
                <p className='ui-counter__title'>Counter Widget</p>

                <div className='ui-counter__body'>
                    <p className='ui-counter__body__name'>{this.props.name}</p>
                    <p className='ui-counter__body__count'>{this.state.count}</p>
                    <button
                        className='ui-counter__body__button'
                        onClick={() => this.increment()}
                        disabled={this.state.count === 3}
                    >Increment</button>
                    <button
                        className='ui-counter__body__button'
                        onClick={() => this.decrement()}
                        disabled={this.state.count === 0}
                    >Decrement</button>
                </div>
            </div>
        );
    }
}
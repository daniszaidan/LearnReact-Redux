import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { render } from 'react-dom';

class Counter extends React.Component {
    render() {

        console.log(this.props)

        return (
            <div className="counter">
                <button onClick={this.props.handleMinus}>-</button>
                <p>
                    {this.props.order}
                </p>
                <button onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
        handleMinus: () => dispatch({ type: 'MINUS_ORDER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
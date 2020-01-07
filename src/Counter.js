import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import ActionType from './redux/reducer/globalActionType';

class Counter extends React.Component {
    render() {

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
        handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
        handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
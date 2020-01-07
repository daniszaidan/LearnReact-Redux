import React from 'react';
import './App.css';
import { connect } from "react-redux";

class Cart extends React.Component {
    render() {
        return (
            <div className="cart" >
                <p>cart : <span> {this.props.order} </span></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Cart);
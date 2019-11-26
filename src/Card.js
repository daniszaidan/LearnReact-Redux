import React from 'react';
import './App.css';
import logo from './logo.svg';
import Counter from './Counter';

function Card() {
    return (
        <div className="card">
            <img src={logo} alt="" />
            <p>React Course</p>

            <Counter />

        </div>
    );
}

export default Card;

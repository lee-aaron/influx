import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import background from '../background.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <img src={background} className="App-background" />
            </div>
        );
    }
}
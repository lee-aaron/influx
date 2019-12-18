import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <button className="home-link"><Link to={routes.UPLOAD} >Click here to use our service!</Link></button>
            </div>
        );
    }
}
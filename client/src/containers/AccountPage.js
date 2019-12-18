import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Account from '../components/Account/Account';
import routes from '../constants/routes.json';

import * as auth from '../actions';

class AccountPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: props.isAuthenticated,
            username: "",
            password: "",
            redirect: false
        }

        this.handleForm = this.handleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e: Event) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm = (e: Event) => {
        e.preventDefault();
        this.props.checkAuth(this.state.username, this.state.password);
        this.setState({
            redirect: true
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if ( prevProps.isAuthenticated && this.state.redirect != prevState.redirect ) {
            this.setState({
                redirect: false
            })
        }
    }

    render() {
        const { isAuthenticated } = this.props;
        const { redirect } = this.state;

        if ( isAuthenticated && redirect ) {
            return <Redirect to={routes.UPLOAD} />
        }

        return (
            <Account handleForm={this.handleForm} handleChange={this.handleChange} />
        )
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.handleAuth.isAuthenticated || false
});
  
const mapDispatchToProps = dispatch => ({
    checkAuth: (username, password) => dispatch(auth.handleAuth(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
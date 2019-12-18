import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import routes from './constants/routes';

import Loading from './components/Loading/Loading';

import background from './background.jpg';
import './App.scss';
import { connect } from 'react-redux';

const Header = lazy(() => import('./components/Header/Header'))
const Footer = lazy(() => import('./components/Footer/Footer'))
const HomePage = lazy(() => import('./containers/HomePage'))
const UploadPage = lazy(() => import('./containers/UploadPage'))
const AccountPage = lazy(() => import('./containers/AccountPage'))
const NotFoundPage = lazy(() => import('./containers/NotFoundPage'))

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return (
            rest.isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={routes.ACCOUNT} />
        )
    }} />
)

const Router = ({ ...props }) => (
    <Suspense fallback={<Loading />}>
        <div className="app-wrapper">
            <Header {...props} />
            <Switch>
                <Route exact path={routes.HOME} component={HomePage} />
                <Route path={routes.ACCOUNT} component={AccountPage} />
                <PrivateRoute {...props} path={routes.UPLOAD} component={UploadPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
            <Footer {...props} />
        </div>
    </Suspense>
);

const mapStateToProps = state => ({
    isAuthenticated: state.handleAuth.isAuthenticated || false
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
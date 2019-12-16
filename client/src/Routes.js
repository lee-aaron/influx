import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import HomePage from './containers/HomePage';
import UploadPage from './containers/UploadPage';

export default () => (
    <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.UPLOAD} component={UploadPage} />
    </Switch>
);
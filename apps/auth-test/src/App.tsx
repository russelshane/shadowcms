/**
 * Main Application Component
 * Used for Testing Authentication Security among
 * ShadowCMS Applications.
 *
 * @author ShadowCMS
 */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScreenLoader from './components/ScreenLoader';

const Landing = lazy(() => import('./pages/Landing'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Me = lazy(() => import('./pages/Me'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<ScreenLoader />}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/me" component={Me} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

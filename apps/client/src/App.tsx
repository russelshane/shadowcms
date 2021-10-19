/**
 * Main application component for the
 * C.M.S. client.
 *
 * @author ShadowCMS
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './constants/routes';
import GlobalStyles from './styles/GlobalStyles';
import ScreenLoader from './ui/ScreenLoader';

/**
 * Dynamic Components
 */
const Landing = lazy(() => import('./pages/Landing'));

const Application: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<ScreenLoader />}>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Application;
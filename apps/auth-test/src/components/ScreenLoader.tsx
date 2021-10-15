/**
 * Screen Loader Component
 *
 * @author Shadow CMS
 */

import { Spinner, Pane } from 'evergreen-ui';
import React from 'react';

const ScreenLoader: React.FC = () => {
  return (
    <Pane display="flex" justifyContent="center" alignItems="center" height="95vh">
      <Spinner size={40} />
    </Pane>
  );
};

export default ScreenLoader;

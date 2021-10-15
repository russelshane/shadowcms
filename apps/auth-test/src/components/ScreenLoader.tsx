/**
 * Screen Loader Component
 *
 * @author Shadow CMS
 */

import { Flex, Heading } from 'rebass';
import React from 'react';

const ScreenLoader: React.FC = () => {
  return (
    <Flex display="flex" justifyContent="center" alignItems="center" height="95vh">
      <Heading size="30">Loading...</Heading>
    </Flex>
  );
};

export default ScreenLoader;

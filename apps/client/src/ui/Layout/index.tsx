/**
 * Layout UI Component
 *
 * @author ShadowCMS
 */

import React, { useEffect } from 'react';
import { LayoutContainer } from './style';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  useEffect(() => {
    document.title = title ? title : 'Client - Shadow';
  }, [title]);

  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

/**
 * User Tab UI Component includes Avatar + Username
 *
 * @author ShadowCMS
 */

import React, { useState } from 'react';
import Container from '../Container';
import COLORS from '../../styles/GlobalColors';
import { UserAvatar, UserDropDown, UserName } from './style';
import { UserTabProps } from './types';
import { NavItem } from '../../components/common/Navigation/style';
import { Link } from 'react-router-dom';
import {
  ChevronDownIcon,
  LogoutIcon,
  SupportIcon,
  UserIcon,
} from '@heroicons/react/outline';

const UserTab: React.FC<UserTabProps> = ({ user }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Container display="flex" alignItems="center" width="auto" gridGap="10px">
      <ChevronDownIcon style={{ width: 16, color: COLORS.foreground }} />
      <UserName onClick={() => setMenuActive(!menuActive)}>@{user?.username}</UserName>
      <UserAvatar
        onClick={() => setMenuActive(!menuActive)}
        style={{ backgroundImage: `url(${user?.avatar})` }}
      />
      <UserDropDown className={`${menuActive && 'active'}`}>
        <Link to={`/by/${user.username}`}>
          <Container width="auto" gridGap="12px" alignItems="center">
            <UserIcon style={{ width: 16, color: COLORS.foreground }} />
            <NavItem>Profile</NavItem>
          </Container>
        </Link>
        <Link to="/help">
          <Container width="auto" gridGap="12px" alignItems="center">
            <SupportIcon style={{ width: 16, color: COLORS.foreground }} />
            <NavItem>Help & Support</NavItem>
          </Container>
        </Link>
        <Link to="/eject">
          <Container width="auto" gridGap="12px" alignItems="center">
            <LogoutIcon style={{ width: 16, color: COLORS.foreground }} />
            <NavItem>Logout</NavItem>
          </Container>
        </Link>
      </UserDropDown>
    </Container>
  );
};

export default UserTab;

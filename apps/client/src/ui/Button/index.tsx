/**
 * Button UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { ButtonContainer, ButtonIcon, ButtonOutlineContainer } from './style';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, icon, outline, color, onClick }) => {
  return (
    <React.Fragment>
      {outline ? (
        <ButtonOutlineContainer className={color} onClick={onClick}>
          {icon && <ButtonIcon>{icon}</ButtonIcon>}
          {children}
        </ButtonOutlineContainer>
      ) : (
        <ButtonContainer className={color} onClick={onClick}>
          {icon && <ButtonIcon>{icon}</ButtonIcon>}
          {children}
        </ButtonContainer>
      )}
    </React.Fragment>
  );
};

export default Button;

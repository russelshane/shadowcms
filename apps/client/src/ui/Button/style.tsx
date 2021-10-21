/**
 * Styles for Button UI Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';
import COLORS from '../../styles/GlobalColors';

export const ButtonContainer = styled.button({
  outline: 'none',
  border: `1.5px solid ${COLORS.primary}`,
  backgroundColor: COLORS.primary,
  color: '#fff',
  padding: '8px 16px',
  lineHeight: '13.5px',
  fontSize: '13.5px',
  cursor: 'pointer',
  width: 'auto',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gridGap: '8px',
  transition: '50ms',
  userSelect: 'none',

  '&:hover': {
    opacity: 0.95,
  },

  '&.danger': {
    backgroundColor: COLORS.danger,
    border: `1.5px solid ${COLORS.danger}`,

    '&:hover': {
      opacity: 0.9,
    },
  },

  '&.warning': {
    backgroundColor: COLORS.warning,
    border: `1.5px solid ${COLORS.warning}`,

    '&:hover': {
      opacity: 0.85,
    },
  },

  '&.success': {
    backgroundColor: COLORS.success,
    border: `1.5px solid ${COLORS.success}`,

    '&:hover': {
      opacity: 0.85,
    },
  },
});

export const ButtonOutlineContainer = styled.button({
  outline: 'none',
  border: `1.5px solid ${COLORS.primary}`,
  backgroundColor: '#fff',
  color: COLORS.primary,
  padding: '8px 20px',
  lineHeight: '13.5px',
  fontSize: '13.5px',
  borderRadius: 4,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gridGap: '8px',
  transition: '50ms',
  userSelect: 'none',

  '&.danger': {
    border: `1.5px solid ${COLORS.danger}`,
    color: COLORS.danger,
  },

  '&.warning': {
    border: `1.5px solid ${COLORS.warning}`,
    color: COLORS.warning,
  },

  '&.success': {
    border: `1.5px solid ${COLORS.success}`,
    color: COLORS.success,
  },
});

export const ButtonIcon = styled.span({
  display: 'block',
  width: 16,
  height: 16,
});

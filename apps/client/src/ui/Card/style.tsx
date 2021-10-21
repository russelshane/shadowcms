/**
 * Styles for Card UI Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';
import COLORS from '../../styles/GlobalColors';

export const CardContainer = styled.div({
  margin: 0,
  padding: 20,
  borderRadius: 10,
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'column',
  gridGap: '12px',
  boxShadow: '0px 1px 2px rgb(0,0,0,0.2)',

  '&:hover': {
    boxShadow: '0px 1px 2px rgb(0,0,0,0.5)',
  },
});

export const CardTitle = styled.h2({
  margin: 0,
  fontSize: 20,
  lineHeight: '28px',
  fontFamily: 'Satoshi, sans-serif',
  color: COLORS.foreground,
});

export const CardSummary = styled.p({
  margin: 0,
  fontSize: 16,
  lineHeight: '24px',
  color: COLORS.muted,
  fontFamily: 'Satoshi, sans-serif',
});

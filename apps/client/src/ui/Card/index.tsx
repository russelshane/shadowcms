/**
 * Card UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import Badge from '../Badge';
import Container from '../Container';
import { CardContainer, CardSummary, CardTitle } from './style';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ tags, title, description }) => {
  return (
    <CardContainer>
      {tags?.map((val, index) => (
        <Container key={index}>
          {val === 'needs-editing' && <Badge label={val} color="danger" />}
          {val === 'published' && <Badge label={val} color="success" />}
          {val === 'in-review' && <Badge label={val} color="warning" />}
          {val === 'in-progress' && <Badge label={val} color="primary" />}
        </Container>
      ))}
      <CardTitle>{title}</CardTitle>
      <CardSummary>{description}</CardSummary>
    </CardContainer>
  );
};

export default Card;

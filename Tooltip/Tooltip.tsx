import * as React from 'react';
import { Container, TooltipContainer, Placement } from './Tooltip.styles';

interface TooltipProps {
  children: React.ReactNode;
  message: string;
  placement?: Placement;
}

const Tooltip = ({ children, message, placement }: TooltipProps) => {
  return (
    <Container>
      {children}
      <TooltipContainer
        className="tooltip-container"
        placement={placement || 'top'}
      >
        {message}
      </TooltipContainer>
    </Container>
  );
};

export default Tooltip;

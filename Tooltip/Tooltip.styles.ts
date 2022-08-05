import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export type Placement = 'top' | 'bottom' | 'right' | 'left';

interface TooltipStyleProps {
  placement: Placement;
}

const handleTooltipArrowPlacement = (placement: Placement) => {
  const styleMapping: Record<Placement, FlattenSimpleInterpolation> = {
    bottom: css`
      top: -5px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      width: 0; 
      height: 0; 
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #555;
    `,
    top: css`
      bottom: -5px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      width: 0; 
      height: 0; 
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #555;
    `,
    left: css`
      right: -5px;
      margin-top: auto;
      margin-bottom: auto;
      top: 0;
      bottom: 0;
      width: 0; 
      height: 0; 
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 5px solid #555;
    `,
    right: css`
      left: -5px;
      margin-top: auto;
      margin-bottom: auto;
      top: 0;
      bottom: 0;
      width: 0; 
      height: 0; 
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid #555;
    `,
  };

  return styleMapping[placement] || styleMapping.top;
};

const handleTooltipPlacement = (placement: Placement) => {
  const styleMapping: Record<Placement, FlattenSimpleInterpolation> = {
    bottom: css`
      bottom: calc(-100% - 10px - 5px);
    `,
    top: css`
      top: calc(-100% - 10px - 5px);
    `,
    left: css`
      top: 0;
      left: -10px;
      transform: translateX(-100%);
      bottom: 0;
    `,
    right: css`
      top: 0;
      right: -10px;
      transform: translateX(100%);
      bottom: 0;
    `,
  };

  return styleMapping[placement] || styleMapping.top;
};

export const Container = styled.div`
  position: relative;
  width: fit-content;

  &:hover {
    .tooltip-container {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const TooltipContainer = styled.div<TooltipStyleProps>`
  position: absolute;
  min-height: fit-content;
  max-width: 150px;
  display: flex;
  align-items: center;
  background: #555;
  color: white;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  ${({ placement }) => handleTooltipPlacement(placement)};

  &::before {
    content: '';
    position: absolute;
    ${({ placement }) => handleTooltipArrowPlacement(placement)};
`;

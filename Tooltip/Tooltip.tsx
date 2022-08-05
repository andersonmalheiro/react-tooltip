import * as React from 'react';
import { Container, TooltipContainer, Placement } from './Tooltip.styles';

interface TooltipProps {
  children: React.ReactNode;
  message: string;
  placement?: Placement;
}

const Tooltip = ({ children, message, placement = 'top' }: TooltipProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [currPlacement, setCurrPlacement] =
    React.useState<Placement>(placement);

  const updatePlacement = React.useCallback(
    (element: HTMLDivElement) => {
      const rect = element.getBoundingClientRect();
      const { pageXOffset, pageYOffset, innerHeight, innerWidth } = window;
      const efp = (x: number, y: number) => document.elementFromPoint(x, y);

      console.log('tooltip', rect);
      console.log('window', {
        pageXOffset,
        pageYOffset,
        innerHeight,
        innerWidth,
      });

      if (!efp(rect.left, rect.top) || !efp(rect.right, rect.top)) {
        setCurrPlacement('bottom');
        return;
      }

      if (!efp(rect.left, rect.bottom) || !efp(rect.right, rect.bottom)) {
        setCurrPlacement('top');
        return;
      }
    },
    [setCurrPlacement]
  );

  React.useEffect(() => {
    if (ref.current) {
      updatePlacement(ref.current);
    }
  }, []);

  return (
    <Container>
      {children}
      <TooltipContainer
        className="tooltip-container"
        placement={currPlacement}
        ref={ref}
      >
        {message}
      </TooltipContainer>
    </Container>
  );
};

export default Tooltip;

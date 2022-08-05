import * as React from 'react';
import './style.css';
import Tooltip from './Tooltip/Tooltip';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        marginLeft: '70%',
      }}
    >
      <Tooltip
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci arcu, ornare sodales orci ut, sodales elementum ligula. Integer vulputate."
        placement="right"
      >
        <p style={{ width: 'fit-content' }}>
          Start editing to see some magic happen :)
        </p>
      </Tooltip>
    </div>
  );
}

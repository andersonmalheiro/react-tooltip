import * as React from 'react';
import './style.css';
import Tooltip from './Tooltip/Tooltip';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <Tooltip message="Tooltip message" placement="left">
        <p style={{ width: 'fit-content' }}>
          Start editing to see some magic happen :)
        </p>
      </Tooltip>
    </div>
  );
}

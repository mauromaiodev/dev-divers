import React from 'react';

interface IconProps {
  className: string;
}

const DevIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    height="128px"
    viewBox="0 0 128 128"
    width="128px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <g>
          <line
            style={{
              fill: 'none',
              stroke: '#4B4E4F',
              strokeWidth: '8',
              strokeLinecap: 'square',
              strokeMiterlimit: '10'
            }}
            x1="34.033"
            x2="8.566"
            y1="89.467"
            y2="64"
          />
          <line
            style={{
              fill: 'none',
              stroke: '#4B4E4F',
              strokeWidth: '8',
              strokeLinecap: 'square',
              strokeMiterlimit: '10'
            }}
            x1="8.566"
            x2="34.033"
            y1="64"
            y2="38.533"
          />
        </g>
        <g>
          <line
            style={{
              fill: 'none',
              stroke: '#4B4E4F',
              strokeWidth: '8',
              strokeLinecap: 'square',
              strokeMiterlimit: '10'
            }}
            x1="93.967"
            x2="119.434"
            y1="38.533"
            y2="64"
          />
          <line
            style={{
              fill: 'none',
              stroke: '#4B4E4F',
              strokeWidth: '8',
              strokeLinecap: 'square',
              strokeMiterlimit: '10'
            }}
            x1="119.434"
            x2="93.967"
            y1="64"
            y2="89.467"
          />
        </g>
      </g>
      <line
        style={{
          fill: 'none',
          stroke: '#4B4E4F',
          strokeWidth: '8',
          strokeLinecap: 'square',
          strokeMiterlimit: '10'
        }}
        x1="42"
        x2="87.561"
        y1="105.621"
        y2="22.379"
      />
    </g>
  </svg>
);

export default DevIcon;

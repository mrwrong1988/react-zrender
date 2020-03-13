import React, { useMemo } from 'react'
import {demos} from './Demos/index'

const Menu = ({selectedDemo, setSelectedDemo}) => {
  const position = useMemo(() => [20, 20], [])
  return (
    <group position={position}>
      {demos.map(({title}, index) => (
        <React.Fragment key={title}>
          <rect
            key={title}
            shape={{
              x: 10,
              y: 10 + 30 * index + 1,
              width: 160,
              height: 30,
            }}
            style={{
              fill: 'transparent',
              textFill: selectedDemo === title ? '#333' :'#999',
              fontSize: 18,
              text: title,
              // textAlign: 'left',
              textPosition: [10, 5],
            }}
            onClick={() => setSelectedDemo(title)}
          />
          <line
            shape={{
              x1: 10,
              y1: 30 * (index + 1) + 4,
              x2: 10 + 160,
              y2: 30 *  (index + 1) + 4,
            }}
            style={{
              stroke: '#DBDBDB',
            }}
          />
        </React.Fragment>
      ))}
    </group>
  )
}

export default Menu

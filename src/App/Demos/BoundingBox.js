import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import ReactZRenderer from '../../renderer/index'

const BoundingBox = () => {
  const ref = useRef()
  const [boundingRect, setBoundingRect] = useState(null);
  const { circles } = useMemo(() => {
    const w = ReactZRenderer.zr.getWidth() - 200
    const h = ReactZRenderer.zr.getHeight()
    const circles = new Array(10).fill(null).map(() => {
      const r = 50 * Math.random() + 20
      return {
        r,
        left: (w * 0.6 - r * 2) * Math.random() + r + w * 0.2,
        top: (h * 0.6 - r * 2) * Math.random() + r + h * 0.2,
      }
    })
    return { w, h, circles }
  }, [])

  const onDrag = useCallback((e) => {
    console.log('onDrag', e)
    const rect = ref.current.getBoundingRect()
    // todo bug: 无法拖动，setBoundingRect引起重绘，位置又变化circles的了，cirle位置改为受控?
    setBoundingRect(rect)
  }, [])

  useEffect(() => {
    onDrag()
  }, [onDrag])

  return (
    <>
      <group ref={ref}>
        {circles.map(({r, left, top}, index) => (
          <circle
            key={index}
            shape={{
              cx: 0,
              cy: 0,
              r,
            }}
            style={{
              stroke: '#ccc',
              fill: 'white',
            }}
            position={[left, top]}
            draggable={true}
            onClick={() => console.log('click')}
            onDrag={e => onDrag(e)}
          />
        ))}
      </group>
      {boundingRect && <rect
        shape={{
          cx: 0,
          cy: 0,
          x: boundingRect.x,
          y: boundingRect.y,
          width: boundingRect.width,
          height: boundingRect.height,
        }}
        style={{
          fill: 'none',
          stroke: '#14f1ff'
        }}
      />}
    </>

  )
}

export default BoundingBox

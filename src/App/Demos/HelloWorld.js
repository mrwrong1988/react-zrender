import React, { useMemo } from 'react'
import zrender from 'zrender'
import ReactZRenderer from '../../renderer/index'

const HelloWorld = () => {
  const { w, h } = useMemo(() => {
    const w = ReactZRenderer.zr.getWidth() - 200
    const h = ReactZRenderer.zr.getHeight()
    return { w, h }
  }, [])

  return (
    <>
      <circle
        shape={{
          cx: 0,
          cy: 0,
          r: 50,
        }}
        style={{
          fill: '#FF904F',
        }}
        position={[w / 2, h / 2]}
      />
      <rect
        shape={{
          cx: 0,
          cy: 0,
          width: w,
          height: h / 2,
        }}
        style={{
          fill: new zrender.RadialGradient(0.5, -0.1, 1, [
            {
              offset: 0,
              color: '#FFB166',
            },
            {
              offset: 0.2,
              color: '#D7C467',
            },
            {
              offset: 1,
              color: '#37B0FF',
            }
          ])
        }}
        position={[0, h / 2]}
      />
      <rect
        shape={{
          cx: 0,
          cy: 0,
          width: w,
          height: h,
        }}
        style={{
          fill: '#D7F9FF',
        }}
        zlevel={-1}
      />
    </>

  )
}

export default HelloWorld

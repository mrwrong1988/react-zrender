import React, { useMemo, useRef, useEffect } from 'react'
import ReactZRenderer from '../../renderer/index'

const r = 30

const Animation = () => {
  const ref = useRef()
  const { w, h } = useMemo(() => {
    const w = ReactZRenderer.zr.getWidth() - 200
    const h = ReactZRenderer.zr.getHeight()
    return { w, h }
  }, [])

  useEffect(() => {
    const animator = ref.current.animate('shape', true)
    .when(5000, {
        cx: w - r
    })
    .when(10000, {
        cx: r
    })
    .start()
    return () => {
      animator.stop()
    }
  }, [w])

  return (
    <circle
      ref={ref}
      shape={{
        cx: r,
        cy: h / 2,
        r: r,
      }}
      style={{
        fill: 'transparent',
        stroke: '#FF6EBE'
      }}
      silent={true}
    />
  )
}

export default Animation

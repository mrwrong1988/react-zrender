import React from 'react'
import Animation from './Animation'
import HelloWorld from './HelloWorld'
import BoundingBox from './BoundingBox'

const Todo = () => (<text position={[100, 100]} style={{fontSize: 24, textFill: '#999'}}>todo</text>)

export const demos = [
  {title: 'Hello World!', comp: HelloWorld},
  {title: 'Animation', comp: Animation},
  {title: 'Bounding Box', comp: BoundingBox},
  {title: 'ClipPath', comp: Todo},
  {title: 'Glitched Text', comp: Todo},
  {title: 'Particles', comp: Todo},
]

export const demoComponents = demos.reduce((demoMap, demo) => ({...demoMap, [demo.title]: demo.comp}), {})

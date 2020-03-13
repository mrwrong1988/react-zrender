import React, { useState, useMemo } from 'react'
import Menu from './Menu'
import {demos, demoComponents} from './Demos/index'

const App = () => {
  const position = useMemo(() => [200, 20], [])
  const [selectedDemo, setSelectedDemo] = useState(demos[0].title)
  const DemoComp = demoComponents[selectedDemo]
  return (
    <group>
      <Menu selectedDemo={selectedDemo} setSelectedDemo={setSelectedDemo} />
      <group position={position}>
        {!!DemoComp && <DemoComp />}
      </group>
    </group>
  )
}

export default App

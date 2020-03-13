# react-zrender
结合Zrender自定义React Renderers

## 基本使用
```
// index.js
import ReactZRenderer from './renderer/index';

ReactZRenderer.render(<App />, document.getElementById('root'), {renderer: 'canvas'});

// App/index.js
const App = () => {
  return (
    <group>
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
      <text position={[100, 100]} style={{fontSize: 24, textFill: '#999'}}>todo</text>
    </group>
  )
}
```

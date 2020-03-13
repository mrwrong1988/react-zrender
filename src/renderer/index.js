import Reconciler from 'react-reconciler'
import zrender from 'zrender'
import hostConfig from './hostConfig'


const reconcilerInstance = Reconciler(hostConfig)

const ReactZRenderer = {
  zr: null,
  render(element, renderDom, opts, callback) {
    const isAsync = false
    const hydrate = false
    const zr = zrender.init(renderDom, opts)
    ReactZRenderer.zr = zr
    const container = reconcilerInstance.createContainer(zr, isAsync, hydrate)

    const parentComponent = null

    reconcilerInstance.updateContainer(
      element,
      container,
      parentComponent,
      callback,
    )
  }
}

export default ReactZRenderer

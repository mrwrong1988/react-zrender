import zrender from 'zrender'
import shallowequal from 'shallowequal'
import {camelCase, parseProps} from './utils'

const hostConfig = {
  getRootHostContext(nextRootInstance) {
    let rootContext = {}
    return rootContext
  },
  getChildHostContext(parentContext, fiberType, rootInstance) {
    let context = { type: fiberType }
    return context
  },
  getPublicInstance(instance) {
    return instance
  },
  shouldSetTextContent(type, nextProps) {
    if (type === 'text') {
      return true
    }
    return false
  },
  createTextInstance(
    newText,
    rootContainerInstance,
    currentHostContext,
    workInProgress,
  ) {
    throw new Error('text must be wrapped by <text></text>')
  },
  createInstance(
    type,
    newProps,
    rootContainerInstance,
    currentHostContext,
    workInProgress,
  ) {
    const shape = camelCase(type)
    const {eventProps, children, restProps} = parseProps(newProps)
    const element = new zrender[shape](restProps)
    if (type === 'text') {
      element.attr({style: {text: children}})
    }
    Object.keys(eventProps).forEach(event => {
      element.on(event, eventProps[event])
    })
    return element
  },
  appendInitialChild(parentInstance, child) {
    if (parentInstance instanceof zrender.Group) {
      parentInstance.add(child)
    }
  },
  finalizeInitialChildren(
    instance,
    type,
    newProps,
    rootContainerInstance,
    currentHostContext,
  ) {
    return false
  },
  appendChild(parentInstance, child) {
    parentInstance.add(child);
  },
  insertBefore(parentInstance, child, beforeChild) {
    parentInstance.addBefore(child, beforeChild)
  },
  removeChild(parentInstance, child) {
    parentInstance.remove(child)
  },
  insertInContainerBefore(container, child, beforeChild) {
    container.add(child, beforeChild);
  },
  removeChildFromContainer(container, child) {
    container.remove(child);
  },
  prepareForCommit(rootContainerInstance) {
  },
  resetAfterCommit(rootContainerInstance) {
  },
  appendChildToContainer(parent, child) {
    parent.add(child)
  },
  commitMount(domElement, type, newProps, fiberNode) {
  },
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext,
  ) {
    if (!shallowequal(newProps, oldProps)) {
      return true;
    }
    return null;
  },
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork,
  ) {
    const {eventProps, children, restProps} = parseProps(newProps)
    const {eventProps: oldEventProps} = parseProps(oldProps)
    Object.keys(restProps).forEach(key => {
      instance.attr(key, restProps[key])
    })
    if (type === 'text') {
      instance.attr({style: {text: children}})
    }

    Object.keys(eventProps).forEach(event => {
      instance.on(event, eventProps[event])
    })
    Object.keys(oldEventProps).forEach(event => {
      instance.off(event, oldEventProps[event])
    })
  },
  // commitTextUpdate(textInstance, oldText, newText) {},
  shouldDeprioritizeSubtree(type, nextProps) {
    return false
  },
  // resetTextContent: function(domElement) {},
  supportsMutation: true,
}

export default hostConfig

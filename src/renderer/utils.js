export const camelCase = str => {
 return str.split('-'.toUpperCase).map(word => {
   return word[0].toUpperCase() + word.slice(1)
 })
}

export const parseProps = props => {
  const restProps = {}
  const eventProps = {}
  Object.keys(props).forEach(key => {
    if (key.startsWith('on')) {
      const event = key.slice(2).toLowerCase()
      eventProps[event] = props[key]
    } else if (key !== 'children') {
      restProps[key] = props[key]
    }
  })
  return {restProps, eventProps, children: props.children}
}

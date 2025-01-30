function* animation (config) {
  let { node } = config
  node.style.left = 0
  node.style.top  = 0
  yield
}

export default animation

function Task (fn) {
  return function (Logger) {
    let handler = fn
    let context = { Logger }
    return {
      handler,
      context
    }
  }
}

export default Task
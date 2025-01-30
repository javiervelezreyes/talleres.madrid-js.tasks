function Helper (animation) {
  
  function execute () {
    requestAnimationFrame (function execute$ () {
      let result = animation.next ()
      let {done} = result
      !done && requestAnimationFrame (execute$)
    })
  }

  return { execute }
}

export default Helper

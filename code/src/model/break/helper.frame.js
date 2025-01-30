const PX    = 'px'
const LEFT  = 'left'
const STYLE = 'style'

function Helper (config) {

  let { node     } = config
  let { duration } = config
  let { distance } = config

  function get ()  { return parseInt (node[STYLE][LEFT]) || 0 }
  function set (x) { node[STYLE][LEFT] = x + PX }

  function move () {
    let start = performance.now ()
    let pos   = get ()
    requestAnimationFrame (function move$ (time) {
      let elapsed = time - start
      let progress = Math.min (elapsed / duration, 1)
      set (pos + progress * distance)
      !!(progress < 1) && requestAnimationFrame (move$)
    })
  }
  
  function reset () {
    set (node, 0)
  }
 
  return {
    move,
    reset
  }

}

export default Helper
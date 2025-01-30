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
    let start    = Date.now ()
    let pos      = get ()
    let interval = setInterval (function () {
      let elapsed  = Date.now () - start
      let progress = Math.min (elapsed / duration, 1)
      set (pos + progress * distance)
      !(progress < 1) && clearInterval(interval) 
    }, 16)
  }
  
  function reset () {
    set (0)
  }
 
  return {
    move,
    reset
  }

}

export default Helper
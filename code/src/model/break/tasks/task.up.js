const PX    = 'px'
const TOP   = 'top'
const STYLE = 'style'

let get = (x)    => parseInt (x[STYLE][TOP]) || 0
let set = (x, y) => x[STYLE][TOP] = y + PX

function* animation (config) {
  let { node     } = config
  let { duration } = config
  let { distance } = config

  let start   = performance.now ()
  let pos     = get (node)
  let elapsed = 0
  let progress

  while (elapsed < duration) {
    elapsed  = performance.now() - start
    progress = Math.min(elapsed / duration, 1)
    set (node, pos - progress * distance)
    yield
  }
}

export default animation

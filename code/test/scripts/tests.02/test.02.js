import execute from '../../../src/helpers/helper.execute.js'
import Box     from '../../../src/helpers/helper.box.js'
import Render  from '../../../src/model/break/helper.timer.js'

const X = 'X'
const Y = 'Y'
const T = 1000000

function Task (n) {
  let idx    = 1
  let result = 1
  while (idx <= n) {
    result = result * idx
    idx++
  }
  return result
}

let RX = Render ({
  node     : Box (X),
  duration : 500,
  distance : 200
})

let RY = Render ({
  node     : Box (Y),
  duration : 500,
  distance : 300
})

execute (function Move () {
  RX.move ()
  RY.move ()
  setInterval (Task, 10, T)
})

execute (function Reset () {
  RX.reset ()
  RY.reset ()
})


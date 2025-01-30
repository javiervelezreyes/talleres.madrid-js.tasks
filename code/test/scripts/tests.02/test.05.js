import execute from '../../../src/helpers/helper.execute.js'
import Box     from '../../../src/helpers/helper.box.js'
import Render  from '../../../src/model/break/helper.controller.js'
import Left    from '../../../src/model/break/tasks/task.left.js'

const X = 'X'
const Y = 'Y'

let AX = Left ({
  node     : Box (X),
  duration : 500,
  distance : 200,
})

let AY = Left ({
  node     : Box (Y),
  duration : 500,
  distance : 300
})

let RX = Render (AX)
let RY = Render (AY)

execute (function Move () {
  RX.execute ()
  RY.execute ()
})

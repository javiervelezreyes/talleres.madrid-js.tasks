import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/plan/helper.plan.js'
import TaskX   from '../../../src/model/plan/tasks/task.x.js'
import TaskY   from '../../../src/model/plan/tasks/task.y.js'

const X = 'X'
const Y = 'Y'

let LX = Logger (X)
let LY = Logger (Y)

let {Session} = Helper 

execute (function () {
  let TX = TaskX (LX)
  let TY = TaskY (LX)

  let SX = Session ()
  SX.add (TX)
  SX.add (TY)

  LX.info (1)
  LX.info (2)
  LX.info (3)
})

execute (function () {
  let TX = TaskX (LY)
  let TY = TaskY (LY)

  let SY = Session ()
  SY.add (TY)
  SY.add (TX)

  LY.info (1)
  LY.info (2)
  LY.info (3)
})

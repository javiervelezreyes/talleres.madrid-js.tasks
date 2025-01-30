import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/plan/helper.plan.js'
import TaskX   from '../../../src/model/plan/tasks/task.x.js'
import TaskY   from '../../../src/model/plan/tasks/task.y.js'

const X = 'X'
const Y = 'Y'

let LX = Logger (X)
let LY = Logger (Y)

let {Levels} = Helper 

execute (function () {
  let TX = TaskX (LX)
  let TY = TaskY (LX)

  let SX = Levels ()
  SX.add (1, TX)
  SX.add (2, TY)

  LX.info (1)
  LX.info (2)
  LX.info (3)
})

execute (function () {
  let TX = TaskX (LY)
  let TY = TaskY (LY)

  let SY = Levels ()
  SY.add (2, TX)
  SY.add (1, TY)

  LY.info (1)
  LY.info (2)
  LY.info (3)
})

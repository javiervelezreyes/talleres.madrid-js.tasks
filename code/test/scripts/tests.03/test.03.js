import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/plan/helper.plan.js'
import TaskX   from '../../../src/model/plan/tasks/task.x.js'
import TaskY   from '../../../src/model/plan/tasks/task.y.js'


let LX = Logger ()

let TX = TaskX (LX)
let TY = TaskY (LX)

let {Fire} = Helper 

execute (function () {
  Fire (TX)
  LX.info (1)
  LX.info (2)
  LX.info (3)
  Fire (TY)
})

execute (function () {
  Fire (TX)
  Fire (TY)
  LX.info (1)
  LX.info (2)
  LX.info (3)
})

execute (function () {
  LX.info (1)
  LX.info (2)
  LX.info (3)
  Fire (TX)
  Fire (TY)
})
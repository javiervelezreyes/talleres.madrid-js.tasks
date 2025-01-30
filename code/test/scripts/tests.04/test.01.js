import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const X = 'X'

let LX = Logger (X)

execute (function () {
  requestIdleCallback (function () {
    LX.info ('[Task X] - Task Done')
    LX.info ('[Task Y] - Task Done')
  })
})

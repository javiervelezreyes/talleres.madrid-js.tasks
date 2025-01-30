import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const X = 'X'
const Y = 'Y'

let LX = Logger (X)
let LY = Logger (Y)

execute (function () {
  Promise.resolve ().then (function () {
    LX.info ('[Task X] - Task Done')
  })
})

execute (function () {
  queueMicrotask (function () {
    LY.info ('[Task Y] - Task Done')
  })
})
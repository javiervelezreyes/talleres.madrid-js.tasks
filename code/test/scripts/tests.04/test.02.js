import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const X = 'X'

let LX = Logger (X)

function Log (n) {
  return function () {
    LX.info (n)
  }
}

execute (function TA () {
  LX.info (1)
  LX.info (2)
  LX.info (3)
  requestIdleCallback (Log (4))
  requestIdleCallback (Log (5))
})

execute (function TB () {
  requestIdleCallback (Log (1))
  requestIdleCallback (Log (2))
  LX.info (3)
  LX.info (4)
  LX.info (5)
})

execute (function Clear () {
  LX.clear ()
})

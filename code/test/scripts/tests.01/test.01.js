import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const X = 'X'
const Y = 'Y'

let logger = Logger ()

function log (n) {
  logger.info (n)
}

execute (function () {
  setTimeout (log, 1000, 5)
})

execute (function () {
  setTimeout (log, 50, 1)
  log (2)
  setTimeout (log, 10, 3)
  setTimeout (log, 70, 4)
  log (5)
})
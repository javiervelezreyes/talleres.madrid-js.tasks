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
  queueMicrotask (Log (4))
  queueMicrotask (Log (5))
})

execute (function TB () {
  queueMicrotask (Log (1))
  queueMicrotask (Log (2))
  LX.info (3)
  LX.info (4)
  LX.info (5)
})

execute (function TC () {
  queueMicrotask (Log (1))
  LX.info (2)
  LX.info (3)
  LX.info (4)
  queueMicrotask (Log (5))
})

execute (function TD () {
  queueMicrotask (Log (1))
  queueMicrotask (Log (2))
  setTimeout (Log (3))
  LX.info (4)
  LX.info (5)
  LX.info (6)
  setTimeout (Log (7))
})

execute (function TE () {
  queueMicrotask (Log (1))
  queueMicrotask (Log (2))
  setTimeout (Log (3), 5)
  LX.info (4)
  LX.info (5)
  LX.info (6)
  setTimeout (Log (7))
})

execute (function TF () {
  function Factorial (n) {
    LX.info (n)
    return (
      (n == 0) && 1 ||
      (n >  0) && n * Factorial (n-1)
    )
  }
  queueMicrotask (Log (1))
  Factorial (5)
  queueMicrotask (Log (2))
})

execute (function TG () {
  function Factorial (n) {
    queueMicrotask (Log (n))
    return (
      (n == 0) && 1 ||
      (n >  0) && n * Factorial (n-1)
    )
  }
  queueMicrotask (Log (1))
  Factorial (5)
  queueMicrotask (Log (2))
})

execute (function Clear () {
  LX.clear ()
})

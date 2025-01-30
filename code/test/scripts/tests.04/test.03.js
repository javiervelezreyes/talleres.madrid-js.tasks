import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'

const X = 'X'

let LX = Logger (X)

function Log (n) {
  return function () {
    LX.info (n)
  }
}

execute (function Idle () {
  function Factorial (n) {
    requestIdleCallback (Log (n))
    return (
      (n == 0) && 1 ||
      (n >  0) && n * Factorial (n-1)
    )
  }
  requestIdleCallback (Log ('Before'))
  Factorial (5)
  requestIdleCallback (Log ('After'))
})

execute (function Micro () {
  function Factorial (n) {
    queueMicrotask (Log (n))
    return (
      (n == 0) && 1 ||
      (n >  0) && n * Factorial (n-1)
    )
  }
  queueMicrotask (Log ('Before'))
  Factorial (5)
  queueMicrotask (Log ('After'))
})

execute (function Mix () {
  function Factorial (n) {
    requestIdleCallback (Log (n))
    return (
      (n == 0) && 1 ||
      (n >  0) && n * Factorial (n-1)
    )
  }
  queueMicrotask (Log ('Before'))
  Factorial (5)
  queueMicrotask (Log ('After'))
})

execute (function Clear () {
  LX.clear ()
})

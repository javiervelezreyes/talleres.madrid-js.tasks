import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/defer/helper.defer.js'

const X  = 'X'
const Y  = 'Y'
const TIMEOUT = 'Timeout error!'

let { Defer   } = Helper
let { WaitFor } = Helper

function Add (x, y) { return x + y }
function Sub (x, y) { return x - y }
function Mul (x, y) { return x * y }
function Div (x, y) { return x / y }

let add = Defer (Add)
let sub = Defer (Sub)
let mul = Defer (Mul)
let div = Defer (Div)

let LX = Logger (X)
let LY = Logger (Y)

execute (async function () {
  let waitFor = WaitFor (700)
  try {
    LX.info ( await waitFor (add (3, 2)) )
    LX.info ( await waitFor (sub (3, 2)) )
    LX.info ( await waitFor (mul (3, 2)) )
    LX.info ( await waitFor (div (3, 2)) )
  }
  catch (e) {
    LX.error (TIMEOUT)
  }
})

execute (async function () {
  let waitFor = WaitFor (2000)
  try {
    LY.info ( await waitFor (add (3, 2)) )
    LY.info ( await waitFor (sub (3, 2)) )
    LY.info ( await waitFor (mul (3, 2)) )
    LY.info ( await waitFor (div (3, 2)) )
  }
  catch (e) {
    LY.error (TIMEOUT)
  }
})
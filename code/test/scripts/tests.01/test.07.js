import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/defer/helper.defer.js'

const X  = 'X'
const Y  = 'Y'
const TIMEOUT = 'Timeout error!'

let { Defer      } = Helper
let { WaitForAll } = Helper

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
  let waitForAll = WaitForAll (900)
  try {
    let r = await waitForAll (
      add (3, 2),
      sub (3, 2),
      mul (3, 2),
      div (3, 2)
    )
    LX.info (r)
  }
  catch (e) {
    LX.error (TIMEOUT)
  }
})

execute (async function () {
  let waitForAll = WaitForAll (2000)
  try {
    let r = await waitForAll (
      add (3, 2),
      sub (3, 2),
      mul (3, 2),
      div (3, 2)
    )
    LY.info (r)
  }
  catch (e) {
    LY.error (e, TIMEOUT)
  }
})
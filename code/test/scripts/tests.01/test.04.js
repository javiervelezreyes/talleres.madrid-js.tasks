import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/defer/helper.defer.js'

const X = 'X'
const Y = 'Y'

let { Defer } = Helper

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
  LX.info (await add (3, 2))
  LX.info (await sub (3, 2))
  LX.info (await mul (3, 2))
  LX.info (await div (3, 2))
})

execute (async function () {
  add (3, 2).then (LY.info)
  sub (3, 2).then (LY.info)
  mul (3, 2).then (LY.info)
  div (3, 2).then (LY.info)
})
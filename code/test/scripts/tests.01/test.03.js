import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/defer/helper.defer.js'

const X  = 'X'
const MS = 1000

let { Defer } = Helper

function Add (x, y) { return x + y }
function Sub (x, y) { return x - y }
function Mul (x, y) { return x * y }
function Div (x, y) { return x / y }

let add = Defer (Add, MS)
let sub = Defer (Sub, MS)
let mul = Defer (Mul, MS)
let div = Defer (Div, MS)

let LX = Logger (X)

execute (async function () {
  LX.info (await add (3, 2))
  LX.info (await sub (3, 2))
  LX.info (await mul (3, 2))
  LX.info (await div (3, 2))
})
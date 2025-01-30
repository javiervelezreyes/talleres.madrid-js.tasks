import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/defer/helper.defer.js'

const X   = 'X'
const Y   = 'Y'
const ADD = 'add'
const SUB = 'sub'
const MUL = 'mul'
const DIV = 'div'
const MS  = 200

let { Defer } = Helper
let { Wait  } = Helper

let Log  = {}

function Add (x, y) { Log[ADD] = x + y }
function Sub (x, y) { Log[SUB] = x - y }
function Mul (x, y) { Log[MUL] = x * y }
function Div (x, y) { Log[DIV] = x / y }

let add = Defer (Add)
let sub = Defer (Sub)
let mul = Defer (Mul)
let div = Defer (Div)

let isEquals = (x, y) => Log[x] == y

let LX = Logger (X)
let LY = Logger (Y)

execute (async function () {
  add (3, 2)
  sub (3, 2)
  mul (3, 2)
  div (3, 2)
  
  LX.info ( isEquals (ADD, 5)   )
  LX.info ( isEquals (SUB, 1)   )
  LX.info ( isEquals (MUL, 6)   )
  LX.info ( isEquals (DIV, 1.5) )
})

execute (async function () {
  add (3, 2)
  sub (3, 2)
  mul (3, 2)
  div (3, 2)

  await Wait (MS)
  
  LY.info ( isEquals (ADD, 5)   )
  LY.info ( isEquals (SUB, 1)   )
  LY.info ( isEquals (MUL, 6)   )
  LY.info ( isEquals (DIV, 1.5) )
})
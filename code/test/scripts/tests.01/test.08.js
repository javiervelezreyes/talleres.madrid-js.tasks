import Logger  from '../../../src/helpers/helper.logger.js'
import execute from '../../../src/helpers/helper.execute.js'
import Helper  from '../../../src/model/defer/helper.defer.js'

const X  = 'X'
const Y  = 'Y'
const TIMEOUT = 'Timeout error!'

let { Defer } = Helper
let { Retry } = Helper

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
  let retry = Retry (200)

  try { LX.info ( await retry (add)(3, 2) ) } catch (e) { LX.error (TIMEOUT) }
  try { LX.info ( await retry (sub)(3, 2) ) } catch (e) { LX.error (TIMEOUT) }
  try { LX.info ( await retry (mul)(3, 2) ) } catch (e) { LX.error (TIMEOUT) }
  try { LX.info ( await retry (div)(3, 2) ) } catch (e) { LX.error (TIMEOUT) }
})

execute (async function () {
  let retry = Retry (1000)

  try { LY.info ( await retry (add)(3, 2) ) } catch (e) { LY.error (TIMEOUT) }
  try { LY.info ( await retry (sub)(3, 2) ) } catch (e) { LY.error (TIMEOUT) }
  try { LY.info ( await retry (mul)(3, 2) ) } catch (e) { LY.error (TIMEOUT) }
  try { LY.info ( await retry (div)(3, 2) ) } catch (e) { LY.error (TIMEOUT) }
})


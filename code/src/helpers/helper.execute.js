import Port from './helper.port.js'

const FROM    = '#action'
const TO      = '#actions'
const REF     = 'button'
const EVENT   = 'click'

function Helper (fn) {
  let port = Port ({
    from : FROM, 
    to   : TO,
    ref  : REF,
    key  : fn.name
  })
  port.addEventListener (EVENT, fn)
}

export default Helper

import Port from './helper.port.js'

const FROM = '#box'
const TO   = '#boxes'
const REF  = '.box'

function Helper (key) {

  return Port ({
    from : FROM, 
    to   : TO,
    ref  : REF,
    key
  })

}

export default Helper

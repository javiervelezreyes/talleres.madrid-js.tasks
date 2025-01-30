import Port from './helper.port.js'

const FROM = '#console'
const TO   = '#consoles'
const REF  = '.text'
const TEXT = 'innerHTML'
const NL   = '<br>'
const SPC  = '&ensp;'

function Helper (key) {

  let port = Port ({
    from : FROM, 
    to   : TO,
    ref  : REF,
    key
  })

  function info  (...text) { port[TEXT] = port[TEXT] + NL + text.join (SPC) }
  function error (...text) { port[TEXT] = port[TEXT] + NL + text.join (SPC) }
  function log   (...text) { port[TEXT] = text }
  function clear ()        { port[TEXT] = SPC }

  return { 
    log,
    info, 
    error,
    clear
  }

}

export default Helper

const CONTENT = 'content'
const NAME    = '.name'

function Helper (config) {

  let { from } = config
  let { to   } = config
  let { ref  } = config
  let { key  } = config

  let from$  = document.querySelector (from)
  let to$    = document.querySelector (to)
  let node   = from$[CONTENT].cloneNode (true)
  let name   = node.querySelector (NAME)
  let handle = node.querySelector (ref)
  key && name && (name.textContent = key)
  to$.appendChild (node)
  return handle
}

export default Helper

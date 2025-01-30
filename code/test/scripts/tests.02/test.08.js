import execute from '../../../src/helpers/helper.execute.js'
import Box     from '../../../src/helpers/helper.box.js'
import Render  from '../../../src/model/break/helper.controller.js'
import Left    from '../../../src/model/break/tasks/task.left.js'
import Right   from '../../../src/model/break/tasks/task.right.js'
import Up      from '../../../src/model/break/tasks/task.up.js'
import Down    from '../../../src/model/break/tasks/task.down.js'
import Reset   from '../../../src/model/break/tasks/task.reset.js'

const X = 'X'

let BX = Box (X)

execute (function left () {
  Render (Left ({
    node     : BX,
    duration : 500,
    distance : 200,
  })).execute ()
})

execute (function up () {
  Render (Up ({
    node     : BX,
    duration : 500,
    distance : 200,
  })).execute ()
})

execute (function down () {
  Render (Down ({
    node     : BX,
    duration : 500,
    distance : 200,
  })).execute ()
})

execute (function right () {
  Render (Right ({
    node     : BX,
    duration : 500,
    distance : 200,
  })).execute ()
})

execute (function reset () {
  Render (Reset ({
    node     : BX,
    duration : 500,
    distance : 200,
  })).execute ()
})
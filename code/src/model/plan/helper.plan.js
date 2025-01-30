function Helper () {

  function Fire (task) {
    let { handler } = task
    let { context } = task
    queueMicrotask (function () {
      handler (context)
    })
  }

  function Session () {
    let tasks = []
    queueMicrotask (function () {
      for (let task of tasks) {
        let { handler } = task
        let { context } = task
        handler (context)
      }
    })
    return { 
      add (task) { 
        tasks.push (task) 
      } 
    }
  }

  function Levels() {
    let tasks = []
    queueMicrotask (function () {
      tasks.sort (function (tx, ty) {
        let lx = tx.context.level
        let ly = ty.context.level
        return lx - ly
      })
      for (let task of tasks) {
        task.handler (task.context)
      }
    })
    return {
      add(idx, task) {
        task.context.level = idx
        tasks.push(task)
      }
    }
  }

  function State () {
    let tasks = []
    queueMicrotask (function () {
      for (let task of tasks) {
        let { handler } = task
        let { context } = task
        let { active  } = context
        active && handler (context)
      }
    })
    return { 
      add (task) { 
        task.on  = function () { task.context.active = true  }
        task.off = function () { task.context.active = false }
        task.on ()
        tasks.push (task) 
      } 
    }
  }
   
  return {
    Fire,
    Session,
    Levels,
    State
  }

}

export default Helper ()
const DELAY = 1000

function Helper () {

  function Defer (fn, ms) {
    return function (...args) {
      return new Promise (function (ok) {
        let delay = ms ??  Math.random () * DELAY
        setTimeout (function () {
          ok (fn (...args))
        }, delay)
      })
    }  
  }

  function Async (fn) {
    return Defer (fn, 0)
  }

  function Wait (ms) {
    return new Promise (function (ok) {
      setTimeout (ok, ms)
    })
  }

  function Timeout (ms) {
    return new Promise (function (_, ko) {
      setTimeout (ko, ms)
    })
  }

  function WaitFor (ms) {
    return function (pn) {
      return Promise.race ([pn, Timeout (ms)])
    }
  }

  function WaitForAll (ms) {
    return function (...pns) {
      let pn = Promise.all (pns)
      let tn = Timeout (ms)
      return Promise.race ([pn, tn])
    }
  }

  function Retry (ms) {
    return function (fn) {
      return async function (...args) {
        let idx = 0
        let max = 3  
        while (idx < max) {
          try {
            return await WaitFor(ms)(fn(...args))
          } 
          catch (e) {
            idx++
            if (idx >= max) throw e
            await Wait(ms)
          }
        }
      }
    }
  }
  
  return {
    Async,
    Defer,
    Wait,
    WaitFor,
    WaitForAll,
    Retry
  }

}

export default Helper ()
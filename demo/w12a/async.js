console.log('Starting Timeout!')
// setTimeout(asyncFunction, 1000)

function asyncFunction () {
  console.log('1 second passed, calling promise')
  function asyncFunction2 () {
    console.log('2 second passed, calling promise')
    function asyncFunction3 () {
      console.log('3 second passed, calling promise')
    }
    setTimeout(asyncFunction3, 3000)
  }
  setTimeout(asyncFunction2, 2000)
}

// promisedOne().then(() => {console.log("After!")})
function promisedOne () {
  return new Promise((resolve, reject) => {
    function asyncFunction () {
      console.log('1 second passed!')
      resolve(100)
    }
    setTimeout(asyncFunction, 1000)
  })
}

// promisedOne()
//   .then(
//     (value) => { console.log('Resolved with' + value) })

async function iNSync () {
  let value = await promisedOne()
  console.log("I'm done!!" + value)
  value = await promisedOne()
  console.log("I'm done!!" + value)
  value = await promisedOne()
  console.log("I'm done!!" + value)
}
iNSync()

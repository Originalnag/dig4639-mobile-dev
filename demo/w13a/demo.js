let a = 100
console.log(a) // 100
a = 200
console.log(a) // 200

const b = 200 + 100
console.log(b)

const c =  "200" + "100"
console.log(c)
const d =  "200" + 100
console.log(d)
// equality comparison
console.log(200 == "200") // true or false
console.log(200 === "200") // true or false

function a1(input) {
    console.log(`A has been executed: ${input}`)
    console.log(this)
}

let obj = {
    hello: "Hello",
    aFunc: () => a1
    }
object.aFunc()


let arrow = () => {
    let a = 10
    console.log("Arrow Function executed" + a)
    console.log(this)
}

arrow()
const helloWorld = "Hello World"
const helloWorld2 = `Hello World ${a}`
console.log(b)
console.log(helloWorld)
console.log(helloWorld2)

function afterSeconds(seconds) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Executed after ${seconds}.`)
        resolve(seconds) 
    }, seconds*1000)
})
}

// afterSeconds(5)
//  .then((retValue) => {
//      console.log(`${retValue} seconds have passed`)
//      return afterSeconds(1)
//  })
//  .then((retValue) => {
//      console.log(`Finished after another ${retValue} seconds`)
//  })

 async / await
 async function doAsync() {
    console.log("Starting...")
    let retValue = await afterSeconds(5)
    console.log(`${retValue} seconds have passed`)
    retValue = await afterSeconds(1)
    console.log(`Finished after another ${retValue} seconds`)
    console.log("Finished")
 }
 doAsync()
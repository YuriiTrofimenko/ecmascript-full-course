// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 500)
// })

/* const delay = ms => new Promise(((resolve, reject) => {
  setTimeout(() => resolve(`Done! ${ms}`), ms)
})) */

// delay(1000)
//   .then(data => delay(500))
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Finally'))

// async function asyncDelay() {
//   try {
//     const data = await delay(2000)
//     console.log(data)
//   } catch (e) {
//     console.log('Error', e)
//   }
// }
//
// asyncDelay()

/* Promise.all([
  delay(1000),
  delay(500),
  delay(2000)
]).then(data => console.log(data))

Promise.race([
  delay(1000),
  delay(500),
  delay(2000)
]).then(data => console.log(data)) */


/* 2020 */

// 
const emulate = (id, ms) => new Promise(resolve => {
  setTimeout(() => resolve(id), ms)
})

const promises = [
  emulate(1, 250),
  emulate(2, 500),
  emulate(3, 1500)
]

async function old() {
  for (const promise of await Promise.all(promises)) {
    console.log('Old:', promise)
  }
}

async function modern() {
  for await (const promise of promises) {
    console.log('Modern:', promise)
  }
}

modern()
// old()

// 
const p1 = Promise.resolve(1)
const p2 = Promise.reject('my error')
const p3 = Promise.resolve(3)

// ;(async () => {
// 	const result = await Promise.all([p1, p2, p3]).catch(err => console.log(err))
// 	console.log(result)
// })()

;(async () => {
  const result = await Promise.allSettled([p1, p2, p3])
  console.log(result)
})()

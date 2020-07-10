class Person {
  type = 'human'

  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(this.name + ' говорит привет!')
  }
}

// const max = new Person('Max')
// max.greet()
// console.log(max.type)

// console.log(max.__proto__ === Person.prototype)

class Programmer extends Person {
  constructor(name, job) {
    super(name)

    this._job = job
  }

  get job() {
    return this._job.toUpperCase()
  }

  set job(job) {
    if (job.length < 2) {
      console.log('Validation failed')
    } else {
      this._job = job
    }
  }

  greet() {
    super.greet()
    console.log('Rewritten')
  }
}

const fronted = new Programmer('Max', 'Frontend')
// console.log(fronted)
// fronted.greet()
// console.log(fronted.job)
fronted.job = 'Backend'
// console.log(fronted.job)

// Static
class Util {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
  }
}

const res = Util.average(1, 1, 2, 3, 5, 8, 13)
console.log(res)

// const util = new Util()
//
// console.log(util.average(1, 1, 2, 3, 5, 8, 13))


/* 2020 */

class Person {
  static type = 'HUMAN'
  static #area = 'EARTH'
  name = 'unknown name'
  #year = 1993

  constructor(name) {
    this.name = name
  }

  static printArea() {
    return Person.#area === 'EARTH' ? 'Земля' : 'Марс'
  }

  get age() {
    return new Date().getFullYear() - this.#year
  }

  set age(age) {
    if (age > 0) {
      this.#year = new Date().getFullYear() - age
    }
  }
}

const person = new Person('Maxim')
console.log(person.name)
console.log(person.age)
person.age = 26
console.log(person.age)
console.log(Person.type)
console.log(Person.printArea())

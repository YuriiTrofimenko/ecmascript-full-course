/* Функция includes
для проверки наличия подстроки в строке возвращает булевый результат вместо индекса.
 Функции padStart и padEnd добавляют пробелы в незаполненные символами позиции строки*/

// const title = 'Hello'
//
// const isVisible = () => Math.random() > 0.5
//
// const template = `
//   ${isVisible() ? `<p>Visible</p>` : ''}
//   <h1 id='demo' style="color: red">${title}</h1>
// `
//
// console.log(template)

// Methods
/* const str = 'Hello'

console.log(str.startsWith('He'))
console.log(str.startsWith('e'))
console.log(str.endsWith('lo'))
console.log(str.startsWith('e'))

console.log(str.includes('llo'))

console.log(str.repeat(3))

console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())

console.log(str.padStart(10, '1234'))
console.log(str.padEnd(8, 'abc')) */


/* 2020 */

/* Функцию, принимающую на вход фрагменты строки, и возвращающую интерполированную строку,
можно вызывать без круглых скобок */

function tag(strings, name, age) {
  const [s1, s2, s3] = strings
  const ageStr = age > 42 ? 'старшим' : 'младшим'
  return `${s1}${name}${s2}${ageStr}${s3}`
}

const person = {
  name: 'NoName',
  age: 50
}

const output = tag`Человек по имени ${person.name} является ${person.age} в семье`

console.log(output)
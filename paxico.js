let name = prompt('write your name')

let max = parseInt(prompt(`${name} please emter a number`))
while (!max) {
  max = parseInt(prompt('TRY AGAIN!!!     enter a number'))
}
let rightNum = Math.floor(Math.random() * max) + 1
console.log(rightNum)
let input = prompt('lets try your FIRST guess!')
let attemps = 1
while (input != rightNum) {
  if (input === 'q') break
  attemps++

  if (input > rightNum) {
    input = prompt('your guess is too high. GUESS AGAIN!!!')
  } else {
    input = prompt('your guess is too low. GUESS AGAIN!!!')
  }
}

console.log(`you got it in ${attemps} attemps`)

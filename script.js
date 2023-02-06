const number = 50

const userNumber = prompt('Please enter a number:')
const parsedUserNumber = parseInt(userNumber)

if (parsedUserNumber > number) {
  console.log(`${parsedUserNumber} is greater than ${number}.`)
} else if (parsedUserNumber === number) {
  console.log(`${parsedUserNumber} is equal to ${number}.`)
} else {
  console.log(`${parsedUserNumber} is less than ${number}.`)
}

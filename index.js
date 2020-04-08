// Code your solutions in this file
function writeCards(nameArray, message) {
  messageArray = []
  for (let i = 0; i < nameArray.length; i++){
    messageArray.push('Thank you, ${nameArray[i]}, for the wonderful ${message} gift!')
  }
}

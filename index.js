
function writeCards(names, gift) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
    }
    return thankYouMessages;
  }
  
  module.exports = {
    writeCards,
  };
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = {
    writeCards,
    countDown,
  };
  

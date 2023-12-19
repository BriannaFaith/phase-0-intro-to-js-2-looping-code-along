
const names = ['Guadalupe', 'Ollie', 'Aki']

 function writeCards(names, event) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;
 }
 const event = 'surprise'
 const message = writeCards(names, event)


 function countDown(numbers) {
    while (numbers >= 0) {
        console.log(numbers);
        numbers--;
    }
 }
 countDown(10)
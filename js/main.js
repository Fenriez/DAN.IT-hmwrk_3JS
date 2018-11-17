let input = +prompt("Enter your number", ''),
    result = 1;

while (isNaN(input)) {
    input = +prompt("Enter your number again", '');
}

let factorial = (e) => {
    result *= e;
    e--;
    (e != 0) ? factorial(e) : alert('!' + input + ' = ' + result);    
}

factorial(input);
function fizzBuzz (num) {
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            return "FizzBuzz";
        }
        else {
            return "Fizz";
        }
    }
    else {
        return "Buzz";
    }
}

function iterate (num) {
    for (let i = 1; i >= num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(fizzBuzz(i));
        }
        else {
            console.log(i)
        }
    }    
}

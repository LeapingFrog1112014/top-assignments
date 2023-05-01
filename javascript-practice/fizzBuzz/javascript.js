function fizzBuzz (num) {
    
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

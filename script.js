function checkValue() {
    document.getElementById("result-count").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    var num1, num2;
    var text = "";

    num1 = document.getElementById("num1").value;

    num2 = document.getElementById("num2").value;

    if (isNaN(num1) || num1 < 2 || num1 > 100 ||
        (isNaN(num2) || num2 < 2 || num2 > 100)) {
        text = "Invalid input, please try again.";
    } else {
        findPrime(num1, num2);
    }

    document.getElementById("error").innerHTML = text;
}

function findPrime(num1, num2) {

    min = Math.min(num1, num2);
    max = Math.max(num1, num2);
    var allPrimes = [];

    for (var i = min; i <= max; i++) {

        var isPrime = true;

        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime === true) {
            allPrimes.push(i);
        }
    }

    document.getElementById("result-count").innerHTML = "There are " + allPrimes.length + " prime numbers.";
    document.getElementById("result").innerHTML = allPrimes;
}

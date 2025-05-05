function Factorial (n) {
    if (n < 0) {
        return "Error: El número debe ser mayor o igual a cero.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}

console.log(Factorial(5));
console.log(Factorial(0));
console.log(Factorial(-3));
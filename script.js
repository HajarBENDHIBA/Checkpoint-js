document.addEventListener("DOMContentLoaded", function () {
    function reverseString(str) { return str.split('').reverse().join(''); }
    function countCharacters(str) { return str.length; }
    function capitalizeWords(sentence) { return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); }
    function findMax(arr) { return Math.max(...arr); }
    function findMin(arr) { return Math.min(...arr); }
    function sumArray(arr) { return arr.reduce((sum, num) => sum + num, 0); }
    function filterArray(arr, conditionFn) { return arr.filter(conditionFn); }
    function factorial(n) { return (n < 0) ? -1 : (n === 0 || n === 1) ? 1 : n * factorial(n - 1); }
    function isPrime(num) { if (num <= 1) return false; for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return true; }
    function fibonacciSequence(terms) { let sequence = [0, 1]; for (let i = 2; i < terms; i++) { sequence.push(sequence[i - 1] + sequence[i - 2]); } return sequence.slice(0, terms); }

    function testStringFunctions() {
        const str = document.getElementById("stringInput").value;
        const results = `Reverse: ${reverseString(str)}<br> Count Characters: ${countCharacters(str)}<br> Capitalize Words: ${capitalizeWords(str)}`;
        document.getElementById("stringResults").innerHTML = results;
    }

    function testArrayFunctions() {
        const arr = document.getElementById("arrayInput").value.split(',').map(Number);
        const results = `Maximum: ${findMax(arr)}<br> Minimum: ${findMin(arr)}<br> Sum: ${sumArray(arr)}<br> Filter > 2: ${filterArray(arr, num => num > 2).join(', ')}`;
        document.getElementById("arrayResults").innerHTML = results;
    }

    function testMathFunctions() {
        const num = parseInt(document.getElementById("numberInput").value, 10);
        const results = `Factorial: ${factorial(num)}<br> Is Prime: ${isPrime(num)}<br> Fibonacci (first ${num} terms): ${fibonacciSequence(num).join(', ')}`;
        document.getElementById("mathResults").innerHTML = results;
    }

    // Assigning functions to buttons (if needed)
    window.testStringFunctions = testStringFunctions;
    window.testArrayFunctions = testArrayFunctions;
    window.testMathFunctions = testMathFunctions;
});
'use strict';

// Task 1: Prints to the console
function task1() {
    console.log("I'm printing to console!");
}

// Task 2: Asks for the user's name and displays a greeting
function task2() {
    const name = prompt('Type your name:');
    const helloElement = document.querySelector('#Hello');
    helloElement.innerHTML = name ? `Hello, ${name}!` : 'Hello, guest!';
}

// Task 3: Calculates and displays the sum, product, and average of three numbers
function task3() {
    const first = parseInt(prompt('Type first integer:'));
    const second = parseInt(prompt('Type second integer:'));
    const third = parseInt(prompt('Type third integer:'));

    if (isNaN(first) || isNaN(second) || isNaN(third)) {
        document.querySelector('#calculate').innerHTML = 'Please enter three integers.';
        return;
    }

    const sum = first + second + third;
    const product = first * second * third;
    const average = sum / 3;

    document.querySelector('#calculate').innerHTML = `
        The sum is ${sum} <br>
        The product is ${product} <br>
        The average is ${average.toFixed(2)}
    `;
}

// Task 4: Randomly assigns a Hogwarts house to the student
function task4() {
    const studentName = prompt('Enter your name:');

    // Generate a random number between 1 and 4
    const randomHouse = Math.floor(Math.random() * 4) + 1;

    // Determine the house based on the random number
    let classes;
    if (randomHouse === 1) {
        classes = 'Gryffindor';
    } else if (randomHouse === 2) {
        classes = 'Slytherin';
    } else if (randomHouse === 3) {
        classes = 'Hufflepuff';
    } else {
        classes = 'Ravenclaw';
    }

    // Display the result
    document.querySelector('#class').innerHTML = `${studentName}, you are in ${classes}`;
}

// Task 5: Checks if a given year is a leap year
function task5() {
    const year = parseInt(prompt('Enter a year:'), 10);

    if (isNaN(year)) {
        document.querySelector('#year').innerHTML = 'Please enter a valid number.';
        return;
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    document.querySelector('#year').innerHTML =
        `Your input year is ${year}, this is ${isLeapYear ? 'a leap year.' : 'NOT a leap year.'}`;
}

// Task 6: Calculates the square root if the user confirms
function task6() {
    const wantsSquareRoot = confirm('Should I calculate the square root?');

    if (wantsSquareRoot) {
        const number = parseFloat(prompt('Enter a number:'));

        // Check if the number is valid and non-negative
        if (!isNaN(number) && number >= 0) {
            const squareRoot = Math.sqrt(number);
            document.querySelector('#root').innerHTML =
                `The square root of ${number} is ${squareRoot.toFixed(2)}.`;
        } else if (isNaN(number)) {
            document.querySelector('#root').innerHTML =
                'Please enter a valid number.';
        } else {
            document.querySelector('#root').innerHTML =
                'The square root of a negative number is not defined.';
        }
    } else {
        document.querySelector('#root').innerHTML =
            'The square root is not calculated.';
    }
}

// Task 7: Calculates the sum of a specified number of dice rolls
function task7() {
    const numberOfRolls = parseInt(prompt('Enter the number of dice rolls:'), 10);

    if (isNaN(numberOfRolls) || numberOfRolls <= 0) {
        document.querySelector('#dice').innerHTML = 'Please enter a valid positive number of rolls.';
        return;
    }

    let sum = 0;

    for (let i = 0; i < numberOfRolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }
    // console.log(`The sum of ${numberOfRolls} dice rolls is ${sum}.`);
    document.querySelector('#dice').innerHTML =
        `The sum of ${numberOfRolls} dice rolls is ${sum}.`;
}

// Task 8: Lists all leap years between a start and end year
function task8() {
    const startYear = parseInt(prompt('Enter the start year:'), 10);
    const endYear = parseInt(prompt('Enter the end year:'), 10);

    // 验证输入是否为有效的年份
    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        document.querySelector('#leapyear').innerHTML = 'Please enter a valid range of years.';
        return;
    }

    let listHTML = '<ul>';

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            listHTML += `<li>${year}</li>`;
        }
    }

    listHTML += '</ul>';

    document.querySelector('#leapyear').innerHTML = listHTML;
}

// Task 9: Check if an entered number is prime
function task9() {
    const number = parseInt(prompt('Enter an integer:'), 10);

    // 检查输入是否为有效整数
    if (isNaN(number)) {
        document.querySelector('#primeNum').innerHTML = 'Please enter a valid integer.';
        return;
    }

    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true; // 2 是唯一的偶素数
        if (num % 2 === 0) return false; // 排除其他偶数
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (isPrime(number)) {
        document.querySelector('#primeNum').innerHTML = `${number} is a prime number.`;
    } else {
        document.querySelector('#primeNum').innerHTML = `${number} is NOT a prime number.`;
    }
}


// Task 10: Calculate probability of achieving a target sum with a given number of dice
function task10() {
    const numDice = parseInt(prompt('Enter the number of dice:'), 10);
    const targetSum = parseInt(prompt('Enter the target sum:'), 10);
    const numSimulations = 10000;

    // 检查用户输入是否为有效的正整数
    if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum <= 0) {
        document.querySelector('#probability').innerHTML =
            'Please enter valid positive integers for the number of dice and the target sum.';
        return;
    }

    let successCount = 0;

    // 模拟掷骰子
    function rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    for (let i = 0; i < numSimulations; i++) {
        let sum = 0;
        for (let j = 0; j < numDice; j++) {
            sum += rollDie();
        }

        if (sum === targetSum) {
            successCount++;
        }
    }

    // 计算概率
    const probability = (successCount / numSimulations) * 100;

    document.querySelector('#probability').innerHTML =
        `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%.`;
}

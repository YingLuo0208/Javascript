'use strict';

// Task 1: Input numbers and display them in reverse order
function task1() {
    const numbers = [];

    // Get 5 numbers from the user and store them in the array
    // 运行 5 次，每次都要求用户输入一个数字
    for (let i = 0; i < 5; i++) {
        const num = parseInt(prompt(`Enter number ${i + 1}:`));
        numbers.push(num);  // 使用push()方法添加到numbers数组中
    }

    // Print numbers in reverse order
    console.log('The numbers in reverse order are:');
    // 从numbers数组的最后一个元素 ( numbers.length - 1 ) 开始，向后迭代到第一个元素（索引0 ）
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);  // 每次迭代期间访问numbers[i]以相反的顺序打印每个数字
    }
}

// Task 2: Collect participant names, sort them, and display in an ordered list
function task2() {
    const numParticipants = parseInt(prompt('Enter the number of participants:'));
    const participants = [];

    // Collect each participant's name
    for (let i = 0; i < numParticipants; i++) {
        const name = prompt(`Enter the name of participant ${i + 1}:`);
        participants.push(name);
    }

    // Sort names alphabetically
    // 调用sort()方法，以按字母顺序排列姓名
    participants.sort();

    // Create an ordered list of names
    // 创建有序列表 ( <ol> ) 并将其存储在listHTML变量中
    let listHTML = '<ol>';

    for (let i = 0; i < participants.length; i++) {
        listHTML += `<li>${participants[i]}</li>`;
    }
    listHTML += '</ol>';

    // Display the ordered list in the HTML element with id 'participants'
    // 在 id participants的 HTML 元素中显示有序列表
    document.querySelector('#participants').innerHTML = listHTML;
}


// Task 3: Collect dog names, sort in reverse alphabetical order, and display in a list
function task3() {
    const dogNames = [];

    // Collect names of 6 dogs
    for (let i = 0; i < 6; i++) {
        const name = prompt(`Enter the name of dog ${i + 1}:`);
        dogNames.push(name);
    }

    // Sort names in reverse alphabetical order
    dogNames.sort().reverse();

    // Create an unordered list of names
    let listHTML = '<ul>';
    for (let i = 0; i < dogNames.length; i++) {
        listHTML += `<li>${dogNames[i]}</li>`;
    }
    listHTML += '</ul>';

    // Display the unordered list in the HTML element with id 'target'
    document.querySelector('#dogs').innerHTML = listHTML;
}


// Task 4: Collect numbers from user, sort them from largest to smallest, and print the result
function task4() {
    const numbers = [];

    // Collect numbers until the user inputs 0
    while (true) {
        const num = parseInt(prompt('Enter a number (0 to stop):'));
        if (num === 0) {
            break;
        }
        numbers.push(num);
    }

    // Sort numbers from largest to smallest
    numbers.sort(function(a, b) {
        return b - a;
    });

    // Output sorted numbers to console
    console.log('Numbers from largest to smallest:');
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}


// Task 5: Collect unique numbers from user and display them in ascending order
function task5() {
    const numbers = [];

    while (true) {
        const num = parseInt(prompt('Enter a number:'));

        // Check if number is already entered
        if (numbers.includes(num)) {
            console.log(
                `The number ${num} has already been given. Stopping the program.`);
            break;
        }

        // Add unique number to the list
        numbers.push(num);
    }

    // Sort numbers in ascending order
    numbers.sort((a, b) => a - b);

    // Output sorted numbers to console
    console.log('The numbers you entered in ascending order:');
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}


// Task 6: Roll a dice until it lands on 6, display each result
function task6() {
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    let roll;
    let listHTML = '<ul>';

    // Keep rolling until we get a 6
    do {
        roll = rollDice();
        listHTML += `<li>${roll}</li>`;
    } while (roll !== 6);

    listHTML += '</ul>';

    // Display the list of rolls in the HTML element with id 'target'
    document.querySelector('#dice').innerHTML = listHTML;
}


// Task 7: Roll a dice with a custom number of sides until it lands on the highest side
function task7() {
    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    const sides = parseInt(prompt('Enter the number of sides on the dice:'));

    let roll;
    let listHTML = '<ul>';

    // Keep rolling until we get the maximum side number
    do {
        roll = rollDice(sides);
        listHTML += `<li>${roll}</li>`;
    } while (roll !== sides);

    listHTML += '</ul>';

    // Display the list of rolls in the HTML element with id 'target'
    document.querySelector('#sides').innerHTML = listHTML;
}


// Task 8: Concatenate an array of strings and display the result
function task8() {
    function concat(array) {
        let result = '';
        // Loop through the array and concatenate each element
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }

    const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

    // Directly set the concatenated string in the HTML element
    document.querySelector('#concat').innerHTML = concat(names);
}


// Task 9: Filter out even numbers from an array
function task9() {
    function even(numbers) {
        const evenNumbers = [];
        // Loop through the array and check if each number is even
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;
    }

    // Original array of numbers
    const originalArray = [2, 7, 4, 9, 10, 15, 18];

    // Get the even numbers array
    const evenArray = even(originalArray);

    // Log both the original array and the even numbers array to the console
    console.log('Original array: ', originalArray);
    console.log('Even numbers array: ', evenArray);
}


// Task 10: Voting system
function task10() {
    const numCandidates = parseInt(prompt('Enter the number of candidates:'));

    const candidates = [];

    // Collect candidates' names and initialize their vote count
    for (let i = 0; i < numCandidates; i++) {
        const name = prompt(`Name for candidate ${i + 1}:`);
        candidates.push({name: name, votes: 0});
    }

    const numVoters = parseInt(prompt('Enter the number of voters:'));

    // Collect votes
    for (let i = 0; i < numVoters; i++) {
        const vote = prompt(
            `Voter ${i + 1}, enter the name of the candidate you vote for:`);

        const candidate = candidates.find(candidate => candidate.name === vote);

        // If the vote matches a candidate, increment their vote count
        if (candidate) {
            candidate.votes++;
        } else if (vote.trim() === '') {
            // Do nothing if the vote is empty
        } else {
            // Handle invalid votes (for non-existent candidates)
        }
    }

    // Sort candidates by votes in descending order
    candidates.sort((a, b) => b.votes - a.votes);

    const winner = candidates[0];

    // Output the winner and vote results
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log('Results:');
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

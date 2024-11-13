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
    // sort()方法按字母顺序对数组dogNames进行排序,reverse()方法来反转
    dogNames.sort().reverse();

    // Create an unordered list of names 创建狗名称的无序列表
    let listHTML = '<ul>';
    for (let i = 0; i < dogNames.length; i++) {
        listHTML += `<li>${dogNames[i]}</li>`;
    }
    listHTML += '</ul>';

    // Display the unordered list in the HTML element with id 'dogs'
    // 在 id 为“dogs”的 HTML 元素中显示无序列表
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

    // Sort numbers from largest to smallest (按字典顺序）
    // 比较函数(a, b) => b - a按降序（从大到小）对数字进行排序。
    // 如果b - a的结果为负数，则在排序数组中a将被放置在b之前。如果它返回正值，则a将位于b之后。
    // 如果返回0 ， a和b将保持相同的相对顺序。
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

    while (true) {  // 循环不断提示用户输入数字
        const num = parseInt(prompt('Enter a number:'));

        // Check if number is already entered
        // includes()方法检查输入的数字是否已在numbers数组中
        if (numbers.includes(num)) {
            console.log(
                `The number ${num} has already been given. Stopping the program.`);
            break;
        }

        // Add unique number to the list
        numbers.push(num);
    }

    // Sort numbers in ascending order 按升序对数字进行排序
    numbers.sort((a, b) => a - b);

    // Output sorted numbers to console
    console.log('The numbers you entered in ascending order:');
    // for循环用于迭代排序后的numbers数组并将每个数字记录到控制台。
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}


// Task 6: Roll a dice until it lands on 6, display each result
function task6() {
    // 定义一个函数来模拟掷骰子
    function rollDice() {
        // Math.floor()可确保该数字是 0 到 5 之间的整数 + 1移动到 1 到 6
        return Math.floor(Math.random() * 6) + 1;
    }

    let roll;  // 用于存储随后的do...while循环中每个骰子滚动的结果。
    // listHTML初始化为包含起始<ul>标记的字符串，以在 HTML 中创建无序列表。
    let listHTML = '<ul>';

    // Keep rolling until we get a 6
    // do...while循环至少运行一次，因为在每次迭代结束时都会检查条件
    do {
        roll = rollDice();  // 每个卷都是通过调用rollDice()生成的并存储在roll中
        listHTML += `<li>${roll}</li>`;
    } while (roll !== 6);  // 一旦roll的值为6 ，循环就会停止

    listHTML += '</ul>';

    // Display the list of rolls in the HTML element with id 'dice'
    document.querySelector('#dice').innerHTML = listHTML;
}


// Task 7: Roll a dice with a custom number of sides until it lands on the highest side
function task7() {
    // 生成 1 和sides之间的随机整数,范围移动到1到sides
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

    // Display the list of rolls in the HTML element with id 'sides'
    document.querySelector('#sides').innerHTML = listHTML;
}


// Task 8: Concatenate an array of strings and display the result
function task8() {

    // 将字符串数组作为参数并初始化一个空字符串result 。
    function concat(array) {
        let result = '';
        // Loop through the array and concatenate each element
        // 遍历数组中的每个元素并将每个元素附加到result
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;  // result包含连接成单个字符串的数组的所有元素
    }

    const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

    // Directly set the concatenated string in the HTML element
    // 使用names数组调用concat(names)函数，将结果设置为 ID 为concat元素的内部 HTML。
    document.querySelector('#concat').innerHTML = concat(names);
}


// Task 9: Filter out even numbers from an array
function task9() {

    // even(numbers)将数字数组作为参数，并创建一个空数组evenNumbers来仅存储偶数。
    function even(numbers) {
        const evenNumbers = [];
        // Loop through the array and check if each number is even
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;  // 循环完成后， evenNumbers仅包含numbers中的偶数
    }

    // Original array of numbers
    const originalArray = [2, 7, 4, 9, 10, 15, 18];

    // Get the even numbers array
    // 调用从originalArray返回一个偶数数组，该数组存储在evenArray中
    const evenArray = even(originalArray);

    // Log both the original array and the even numbers array to the console
    // 将结果记录到控制台
    console.log('Original array: ', originalArray);
    console.log('Even numbers array: ', evenArray);
}


// Task 10: Voting system
function task10() {

    // 保存用户输入的候选者数量
    const numCandidates = parseInt(prompt('Enter the number of candidates:'));

    const candidates = [];

    // Collect candidates' names and initialize their vote count
    // 将每个候选人的name作为对象{ name: name, votes: 0 }添加到candidates中，初始投票计数为 0
    for (let i = 0; i < numCandidates; i++) {
        const name = prompt(`Name for candidate ${i + 1}:`);
        candidates.push({name: name, votes: 0});
    }

    // 保存用户输入的选民数量
    const numVoters = parseInt(prompt('Enter the number of voters:'));

    // Collect votes
    // 对于每个选民， prompt按姓名收集他们的选票，并find匹配姓名的candidates
    for (let i = 0; i < numVoters; i++) {
        const vote = prompt(
            `Voter ${i + 1}, enter the name of the candidate you vote for:`);

        // find方法搜索candidates数组并返回与指定条件匹配的第一个元素。
        // 如果未找到匹配项， find返回undefined
        const candidate = candidates.find(candidate => candidate.name === vote);
        // candidate是candidates数组中的每个对象（每次迭代一个）
        // candidate.name === vote检查候选人的姓名是否与投票字符串匹配。
        // 如果为 true， find将停止并返回匹配的candidate对象

        // If the vote matches a candidate, increment their vote count
        if (candidate) {
            candidate.votes++;  // 如果找到匹配项，候选人的votes属性就会增加 1
        } else if (vote.trim() === '') {    // 处理空投票
            console.log(`Voter ${i + 1}:Waiver`)
        } else {   // 处理候选人名字错误
            console.log(`Voter ${i + 1}:The name you entered is not in the candidate list.`);

        }
    }

    // Sort candidates by votes in descending order
    // 候选人根据得票数按降序排列
    candidates.sort((a, b) => b.votes - a.votes);


    // 得票最高的候选人（现在为candidates[0] ）是获胜者
    const winner = candidates[0];

    // Output the winner and vote results
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log('Results:');
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

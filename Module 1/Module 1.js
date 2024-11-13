'use strict';

// Task 1: Prints to the console
// 定义一个名为task1的函数
function task1() {
    // 将输出打印到控制台
    console.log("I'm printing to console!");
}

// Task 2: Asks for the user's name and displays a greeting
function task2() {
    // const具有块作用域，该变量只能在声明它的块（或函数）内访问，一旦使用，就无法为其重新分配新值
    // 但如果分配给const值是一个对象（包括数组和函数），则该对象内部的属性或元素仍然可以修改。
    // prompt()方法向用户显示一个对话框,以字符串形式返回用户的输入,存储在name中
    const name = prompt('Type your name:');
    // document.querySelector()方法选择HTML 元素<p id="Hello"></p>
    const helloElement = document.querySelector('#Hello');
    // 如果name为true（户输入了名称），innerHTML将设置为Hello, [name]!其中[name]被用户的输入替换
    // 如果户单击“取消”或输入空字符串，它将把innerHTML设置为'Hello, guest!'
    helloElement.innerHTML = name ? `Hello, ${name}!` : 'Hello, guest!';
}

// Task 3: Calculates and displays the sum, product, and average of three numbers
function task3() {
    // 要求用户“键入第一个整数：”，prompt()方法以字符串形式返回用户输入
    // parseInt()转换为整数。如果输入不是有效数字，将返回NaN （非数字）。
    const first = parseInt(prompt('Type first integer:'));
    const second = parseInt(prompt('Type second integer:'));
    const third = parseInt(prompt('Type third integer:'));

    // isNaN()函数检查值是否为NaN，如果123中的任何一个为NaN，则为true
    if (isNaN(first) || isNaN(second) || isNaN(third)) {
        // document.querySelector()，允许您使用 CSS 选择器选择 DOM（文档对象模型）中的 HTML 元素。
        // 使用id="calculate"更新元素的 HTML 内容以显示消息
        document.querySelector('#calculate').innerHTML = 'Please enter three integers.';
        // 返回结果并停止函数执行。如果没有这个，代码将继续执行，可能会导致不正确的结果。
        return;
    }

    const sum = first + second + third;
    const product = first * second * third;
    const average = sum / 3;

    // 使用id="calculate"更新元素的 HTML 内容
    // 使用模板文字（`反引号`）将计算值（sum等）直接嵌入到字符串中。类似python中的f
    // ${} 语法用于插入表达式（如变量、算式等）到字符串中
    // 结果显示在新行中，使用<br>进行换行
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
    // Math.random()生成一个介于 0（含）和 1（不含）之间的随机浮点数。* 4将随机值缩放到 0（含）和 4（不含）之间
    // Math.floor()将结果向下舍入到最接近的整数，得到 0 到 3 之间的数字。
    // 加1，移动到 1 到 4（含）之间
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
    // 10作为parseInt()的第二个参数提供以指定基数（十进制）
    const year = parseInt(prompt('Enter a year:'), 10);

    // 检查year是否为有效数字，如果year为NaN （非数字）
    if (isNaN(year)) {
        document.querySelector('#year').innerHTML = 'Please enter a valid number.';
        return;
    }
    // && and,|| or
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    document.querySelector('#year').innerHTML =
        `Your input year is ${year}, this is ${isLeapYear ? 'a leap year.' : 'NOT a leap year.'}`;
}

// Task 6: Calculates the square root if the user confirms
function task6() {
    // confirm()函数显示一个带有“确定”和“取消”按钮的对话框,返回true或者false
    const wantsSquareRoot = confirm('Should I calculate the square root?');

    // 为true ，则执行if块内的代码
    if (wantsSquareRoot) {
        const number = parseFloat(prompt('Enter a number:'));

        // Check if the number is valid and non-negative
        // parseFloat()将输入解析为浮点数并存储在变量number中
        // 输入有效数字 and 非负数
        if (!isNaN(number) && number >= 0) {
            // Math.sqrt(number)计算数字的平方根
            const squareRoot = Math.sqrt(number);
            // 结果显示在id="root"的 HTML 元素中
            document.querySelector('#root').innerHTML =
                `The square root of ${number} is ${squareRoot.toFixed(2)}.`;
        // 处理无效号码输入
        } else if (isNaN(number)) {
            document.querySelector('#root').innerHTML =
                'Please enter a valid number.';
        // 处理负数
        } else {
            document.querySelector('#root').innerHTML =
                'The square root of a negative number is not defined.';
        }
    // 为false 处理用户取消
    } else {
        document.querySelector('#root').innerHTML =
            'The square root is not calculated.';
    }
}

// Task 7: Calculates the sum of a specified number of dice rolls
function task7() {
    const numberOfRolls = parseInt(prompt('Enter the number of dice rolls:'), 10);
    // 处理输入无效或者负数
    if (isNaN(numberOfRolls) || numberOfRolls <= 0) {
        document.querySelector('#dice').innerHTML = 'Please enter a valid positive number of rolls.';
        return;
    }

    // 初始化总和
    let sum = 0;

    // for循环运行numberOfRolls次（即，每次掷骰子）
    // i初始化为0，一旦i不再小于numberOfRolls，循环就会停止。i++将i的值增加 1
    for (let i = 0; i < numberOfRolls; i++) {
        // Math.random()生成一个介于 0（含）和 1（不含）之间的随机十进制数。
        // 0（含）和 6（不含），+ 1确保结果介于 1 和 6 之间
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

    // 验证输入是否为有效的年份，确保开始年份不大于结束年份
    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        document.querySelector('#leapyear').innerHTML = 'Please enter a valid range of years.';
        return;
    }

    // 变量listHTML使用起始<ul>标记进行初始化。这将用于构建闰年列表的 HTML。
    // listHTML变量用于构建将在网页中显示的 HTML 字符串
    let listHTML = '<ul>';

    // 迭代从startYear到endYear的每一年
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            // 作为列表项 ( <li> ) 添加到listHTML字符串中
            listHTML += `<li>${year}</li>`;
        }
    }
    // 关闭列表
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

    // 定义函数isPrime()来检查数字 ( num ) 是否为素数
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true; // 2 是唯一的偶素数
        if (num % 2 === 0) return false; // 排除其他偶数
        for (let i = 3; i < num; i += 2) {  // 从 3 开始检查,每次循环加2，所以i只会检查奇数（跳过偶数）
            if (num % i === 0) return false;
        }
        return true;
    }

    // 使用输入的数字调用isPrime()函数
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

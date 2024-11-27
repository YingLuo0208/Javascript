// 等待HTML的DOM内容完全加载后再运行代码
document.addEventListener('DOMContentLoaded', function() {
  // 获取用于输入计算表达式的文本框
  const calculationInput = document.getElementById('calculation');
  // 获取用于显示结果的段落元素
  const resultParagraph = document.getElementById('result');
  // 获取用于触发计算的按钮
  const calculateButton = document.getElementById('start');

  // 为计算按钮添加点击事件监听器
  calculateButton.addEventListener('click', function() {
    // 获取输入框的内容，并去掉首尾的空白字符
    const calculation = calculationInput.value.trim();

    // 初始化用于存储两个数字、操作符和结果的变量
    let num1, num2, operator, result;

    // 检查输入是否包含某个运算符，并根据运算符拆分输入
    if (calculation.includes('+')) {
      [num1, num2] = calculation.split('+').map(Number); // 按“+”分割并转换为数字
      operator = '+'; // 标记操作符为加法
    } else if (calculation.includes('-')) {
      [num1, num2] = calculation.split('-').map(Number); // 按“-”分割并转换为数字
      operator = '-'; // 标记操作符为减法
    } else if (calculation.includes('*')) {
      [num1, num2] = calculation.split('*').map(Number); // 按“*”分割并转换为数字
      operator = '*'; // 标记操作符为乘法
    } else if (calculation.includes('/')) {
      [num1, num2] = calculation.split('/').map(Number); // 按“/”分割并转换为数字
      operator = '/'; // 标记操作符为除法
    } else {
      // 如果输入不包含任何有效运算符，设置结果为无效输入
      result = 'Invalid input';
    }

    // 如果解析出的数字是有效数字
    if (!isNaN(num1) && !isNaN(num2)) {
      // 根据操作符执行相应的运算
      switch (operator) {
        case '+':
          result = num1 + num2; // 加法
          break;
        case '-':
          result = num1 - num2; // 减法
          break;
        case '*':
          result = num1 * num2; // 乘法
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2; // 除法
          } else {
            result = 'Cannot divide by zero'; // 防止除以零
          }
          break;
        default:
          result = 'Invalid operation'; // 无效操作符
      }
    } else if (result !== 'Invalid input') {
      // 如果数字无效但输入不是无效表达式，提示用户输入整数
      result = 'Please enter valid integers';
    }

    // 将计算结果显示在结果段落中
    resultParagraph.textContent = result;
  });
});

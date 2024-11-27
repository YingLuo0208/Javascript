// 等待DOM内容完全加载后运行代码
document.addEventListener('DOMContentLoaded', function() {
  // 获取第一个数字的输入框
  const num1Input = document.getElementById('num1');
  // 获取第二个数字的输入框
  const num2Input = document.getElementById('num2');
  // 获取运算选择下拉菜单
  const operationSelect = document.getElementById('operation');
  // 获取显示结果的段落元素
  const resultParagraph = document.getElementById('result');
  // 获取计算按钮
  const calculateButton = document.getElementById('start');

  // 为计算按钮添加点击事件监听器
  calculateButton.addEventListener('click', function() {
    // 将输入框的值解析为浮点数
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    // 获取选择的运算类型
    const operation = operationSelect.value;

    let result; // 用于存储计算结果

    // 检查输入是否为有效数字
    if (isNaN(num1) || isNaN(num2)) {
      result = 'Please enter valid numbers'; // 如果无效，提示用户输入有效数字
    } else {
      // 根据选择的运算类型执行相应的计算
      switch (operation) {
        case 'add': // 加法
          result = num1 + num2;
          break;
        case 'sub': // 减法
          result = num1 - num2;
          break;
        case 'multi': // 乘法
          result = num1 * num2;
          break;
        case 'div': // 除法
          if (num2 !== 0) { // 防止除以零的情况
            result = num1 / num2;
          } else {
            result = 'Cannot divide by zero'; // 提示用户除以零无效
          }
          break;
        default: // 未知运算类型
          result = 'Invalid operation'; // 提示无效操作
      }
    }

    // 将结果显示在结果段落中
    resultParagraph.textContent = result;
  });
});

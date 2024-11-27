// 当 DOM 完全加载并解析后执行以下代码
document.addEventListener('DOMContentLoaded', function() {
  // 获取 id 为 'source' 的表单元素
  const form = document.getElementById('source');

  // 为表单添加提交事件监听器
  form.addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为（页面刷新）
    event.preventDefault();

    // 获取输入框中 name 为 'firstname' 和 'lastname' 的值
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;

    // 将输入的姓名显示在 id 为 'target' 的元素中
    document.getElementById(
        'target').textContent = `Your name is ${firstName} ${lastName}`;
  });
});

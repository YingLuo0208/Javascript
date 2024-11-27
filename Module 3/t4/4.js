'use strict'; // 严格模式
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// 获取目标元素：从 HTML 文档中检索id="target"的<select>元素。
const target = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  // 创建<option> ：为每个学生创建一个新的<option>元素。
  const option = document.createElement('option');
  option.value = students[i].id;
  // option.textContent ：设置为学生name （下拉列表中的可见文本）。
  option.textContent = students[i].name;
  target.appendChild(option);
}
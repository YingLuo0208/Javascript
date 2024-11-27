'use strict';  // 严格模式指令
const names = ['John', 'Paul', 'Jones'];

// 最初，它被设置为空字符串 '' ，因为我们将动态构建项目列表（HTML 列表元素）。
let listItems = '';

for (let i = 0; i < names.length; i++) {
    // 通过为names数组中的每个名称添加新列表项 ( <li> )来更新listItems字符串。
  listItems += `<li>${names[i]}</li>`;
}

// 用循环生成的新项目列表替换target元素的内容。
document.getElementById('target').innerHTML = listItems;


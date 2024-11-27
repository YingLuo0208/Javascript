//document.createElement('li')方法在 JavaScript 中创建新的<li>元素。
// 它还没有将它们插入到 DOM 中；它只是在内存中创建它们。
const firstItem = document.createElement('li');
// textContent用于设置元素内的文本。
firstItem.textContent = 'First item';

const secondItem = document.createElement('li');
secondItem.textContent = 'Second item';
// classList.add()向元素添加一个类，然后可以使用 CSS 设置样式。
secondItem.classList.add('my-item');

const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';

// 查找id="target"的 HTML 元素并将其存储在名为target常量变量中。
const target = document.getElementById('target');
target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);

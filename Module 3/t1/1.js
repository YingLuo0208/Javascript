// 选择第一个 id="target"的 HTML 元素
// querySelector()方法允许使用 CSS 选择器定位任何元素。
// .innerHTML 获取或设置所选元素内的 HTML 内容。在这它被设置为项目列表（ <li>元素）。
document.querySelector('#target').innerHTML = `
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        `;
document.querySelector('#target').classList.add('my-list');
// 将.my-list类下定义的任何 CSS 样式（例如背景颜色、文本颜色等）应用到#target元素。
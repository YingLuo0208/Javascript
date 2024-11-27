'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // 获取表单和结果显示容器
    const form = document.querySelector('form');
    const resultsDiv = document.getElementById('results');

    // 当表单提交时触发的事件处理函数
    form.addEventListener('submit', async function(event) {
        // 阻止表单的默认提交行为
        event.preventDefault();

        // 获取输入框中的值
        const value_from_input = document.getElementById('query').value;

        try {
            // 使用 fetch 向 API 发送请求，获取返回的节目信息
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);

            // 解析返回的 JSON 数据
            const data = await response.json();

            // 清空之前显示的结果
            resultsDiv.innerHTML = '';

            // 遍历返回的每个节目数据，生成 HTML 元素
            data.forEach(tvShow => {
                const show = tvShow.show;  // 获取节目的具体信息

                // 创建显示节目信息的 HTML 元素
                const article = document.createElement('article');
                const title = document.createElement('h2');
                const link = document.createElement('a');
                const image = document.createElement('img');
                const summaryDiv = document.createElement('div');

                // 填充每个元素的数据
                title.textContent = show.name;  // 设置节目的名称为标题
                link.href = show.url;  // 设置链接到节目的详细信息页
                link.target = '_blank';  // 在新标签页打开链接
                link.textContent = 'View Details';  // 设置链接的文本为“查看详情”

                // 如果节目有图片，则添加图片元素
                 if (show.image?.medium) {
                     image.src = show.image.medium;  // 设置图片的 URL
                     image.alt = show.name;  // 设置图片的 alt 属性为节目名称
                 }

                // 如果节目有简介，则显示简介，否则显示“没有简介”
                summaryDiv.innerHTML = show.summary || 'No summary available';

                // 将创建的元素按顺序添加到 article 元素中
                article.appendChild(title);
                article.appendChild(link);
                if (show.image?.medium) article.appendChild(image);  // 如果有图片，添加图片元素
                article.appendChild(summaryDiv);

                // 将 article 元素添加到结果容器中
                resultsDiv.appendChild(article);
            });
        }   catch (error) {
            // 如果请求失败，打印错误信息
            console.log(error.message);
        }
    });
});

## v 1.1.0
1. 增加`Semaphore`信号量工具类
2. 为`LazyBy`和`Semaphore`增加了更加详细的文档
3. 完善了README
4. 其它优化

## v 1.2.0
1. 完全重构了`Select`组件
2. 修改了`FloatingLabelInput`的文件位置
3. 为`FloatingLabelInput`添加了`size`属性和`prefix`插槽
4. 组件内部互相使用时，由直接导入更改为统一从`src/index`中导入
5. 新增[Tag](https://misakamayako.github.io/matewind/?path=/story/component-tag--docs)组件
6. 优化了`LazyBy`和`Semaphore`代码
7. 新增[UseDebounce](https://misakamayako.github.io/matewind/?path=/docs/utils-usedebounce--docs)工具函数
8. 文档变更和ui调整

## v1.2.1
1.  将 Less 文件转换为 PostCSS 文件
2. 将所有 *.less 文件重命名为 *.pcss
3. 移除 tailwindcss 直接导入，改为引用 index.css
4. 调整部分 CSS 样式以适应 PostCSS
5. 更新 package.json 依赖版本

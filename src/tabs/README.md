# Tabs 标签页

### 介绍

内容组之间进行导航切换

### 引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Tabs } from 'vant-cli-demo1';

const app = createApp(App)
app.use(Tabs);
```

## 代码演示

### 基础用法

```html
<tabs :items="items"></tabs>
```
```js
Page({
        data: {
            current: 0,
            items: [
                {
                    title:"水果",
                    subTitle:"描述文案",
                    content:"西瓜",
                },{
                    title:"蔬菜",
                    subTitle:"描述文案",
                    content:"西红柿",
                },{
                    title:"动物",
                    subTitle:"描述文案",
                    content:"蚂蚁",
                },
            ],
        };
    })
```

### 胶囊标签

```html
<tabs :items="items" type="capsule"></tabs>
```
### 点击事件

点击标签时会触发onChange事件
```html
<tabs :items="items" :onChange="onChange"></tabs>
```
### 禁用状态

在items数组中，对需要禁用的标签设置disabled: true
```js
Page({
        data: {
            current: 0,
            items: [
                {
                    title:"水果",
                    subTitle:"描述文案",
                    content:"西瓜",
                },{
                    title:"蔬菜",
                    subTitle:"描述文案",
                    disabled: true,
                    content:"西红柿",
                },{
                    title:"动物",
                    subTitle:"描述文案",
                    content:"蚂蚁",
                },
            ],
        };
    })
```
## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 类型，basic(基础)，capsule(胶囊) | _string_ | `basic` |
| items  | 选项 | _Array_ | `[]`     |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| onChange  | 点击时触发 | _-_ |


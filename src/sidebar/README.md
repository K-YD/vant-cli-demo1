# Sidebar 侧边导航

### 介绍

内容组之间进行导航切换

### 引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Sidebar } from 'vant-cli-demo1';

const app = createApp(App)
app.use(Sidebar);
```

## 代码演示

### 基础用法

```html
<sidebar :items="items"></sidebar>
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
<sidebar :items="items" type="capsule"></sidebar>
```
### 点击事件

点击标签时会触发onChange事件
```html
<sidebar :items="items" :onChange="onChange"></sidebar>
```
### 高度设置

点击标签时会触发onChange事件
```html
<sidebar :items="items" hetght="600px"></sidebar>
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
| items  | 分类显示所需的数据 | _Array_ | `[]`     |
| height  | 高度 | _String_ | `300px`   |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| onChange  | 点击时触发 | _index：number_ |


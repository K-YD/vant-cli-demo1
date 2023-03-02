<template>
   <demo-block title="基础用法">
    <tabs :items="items"></tabs>
  </demo-block>
   <demo-block title="胶囊">
    <tabs :items="items" type="capsule"></tabs>
  </demo-block>
  <demo-block title="onChenge">
    <tabs :items="items" :onChange="onChange"></tabs>
  </demo-block>
  <demo-block title="禁用状态">
    <tabs :items="items1"></tabs>
  </demo-block>
</template>

<script setup>
    import tabs from "../index.vue";
    import {
        ref
    } from 'vue';
    let items = ref([{
        title: "水果",
        subTitle: "描述文案",
        content: "西瓜",
    }, {
        title: "蔬菜",
        subTitle: "描述文案",
        badge: true,
        content: "西红柿",
    }, {
        title: "动物",
        subTitle: "描述文案",
        content: "蚂蚁",
    }, ]);
    let items1 = ref([{
        title: "水果",
        subTitle: "描述文案",
        content: "西瓜",
    }, {
        title: "蔬菜",
        subTitle: "描述文案",
        content: "西红柿",
        disabled: true,
    }, {
        title: "动物",
        subTitle: "描述文案",
        content: "蚂蚁",
    }, ]);

    function onChange(current) {
        alert('这个标签的index是：' +
            current)
    };
</script>

<style scoped>

</style>
<template>
    <div class="sidebar-box">
        <div class="sidebar-father" ref="tfDom">
            <div  v-for="item,index in items" @click="!item.disabled ? selected(index):''" class="sidebar" :class="{act1:isShow == index,sidebardisabled:item.disabled }"> 
                
                <span>{{item.title}}</span>
                <div v-show="isShow == index" class="sidebar-color-box"></div>
            </div>
        </div>
        <div ref="ctDom" class="sidebar-content">
            <div v-for="item,index in items" v-show="isShow == index">{{item.content}}</div>
        </div>
        
    </div>
</template>

<script>
    import {
        ref,
        getCurrentInstance,
        onMounted
    } from "vue";
    export default {
        name: 'sidebar',
        props: {
            color: String,
            height: String,
            type: {
                type: String,
                default: 'basic',
            },
            items: {
                type: Array,
                default: [{
                    title: "标题",
                    subTitle: "描述文案",
                    content: "内容",
                }],
            },
            onChange: {
                type: Function,
                default: () => {}
            }
        },
        setup(props) {
            const ctDom = ref(null);
            const tfDom = ref(null);
            let isShow = ref(0);
            let type = props.type
            let height = props.height
            let selected = function(index) {
                isShow.value = index
                console.log(props.type);
                props.onChange(index)
            };
            // 获取页面的实例对象
            const pageInstance = getCurrentInstance();
            // 获取dom节点对象
            onMounted(() => {
                    const tfDomObj = pageInstance.refs.tfDom;
                    const ctDomObj = pageInstance.refs.ctDom;
                    ctDomObj.style.height = height
                    console.log(tfDomObj)
                    console.log(ctDomObj);
                })
                // if (height) {
                //     tfDomObj.style.height = height
                // }
            return {
                isShow,
                selected,
                type,
                height
            }
        }
    };
</script>

<style scoped lang="less">
    .sidebar-box {
        display: flex;
        background-color: #F5F5F5;
        align-items: flex-start;
        .sidebar-father {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background-color: #F5F5F5;
            color: black;
            .sidebardisabled {
                opacity: 0.2;
                color: green !important;
            }
            .sidebar {
                display: inline-block;
                min-width: 80px;
                font-size: 16px;
                text-align: center;
                line-height: 36px;
                color: black;
                flex-grow: 1;
                background-color: #F5F5F5 !important;
                max-width: 100px;
                max-height: 36px;
                position: relative;
                .sidebar-color-box {
                    width: 3px;
                    height: 15px;
                    background-color: red;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .act1 {
                background-color: white !important;
            }
        }
        .sidebar-content {
            width: 100%;
            height: 300px;
            padding: 10px 20px;
            overflow: auto;
            background-color: #ffffff;
        }
    }
</style>
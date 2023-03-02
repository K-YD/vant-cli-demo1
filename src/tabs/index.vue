<template>
    <div class="tabs-box" :class="type">
        <div class="tabs-father">
            <div  v-for="item,index in items" @click="!item.disabled ? selected(index):''" class="tabs" :class="{act:isShow == index,tabsdisabled:item.disabled }"> 
                
                {{item.title}}
                <div style="background-color: red; height: 2px;" v-show="isShow == index" v-if="type == 'basic'"></div>
            </div>
        </div>
        <div v-for="item,index in items" v-show="isShow == index" class="content"  v-if="type == 'basic'">{{item.content}}</div>
    </div>
</template>

<script>
    import {
        ref
    } from "vue";
    export default {
        name: 'tabs',
        props: {
            color: String,
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
            let isShow = ref(0);
            let type = props.type
            let selected = function(index) {
                isShow.value = index
                console.log(props.type);
                props.onChange(index)
            }

            return {
                isShow,
                selected,
                type
            }
        }
    };
</script>

<style scoped lang="less">
    .tabs-box {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding-bottom: 20px;
        .tabs-father {
            margin-top: 20px;
            display: flex;
            justify-content: space-evenly;
            color: black;
            padding: 0 10px;
            .tabsdisabled {
                opacity: 0.2;
                color: green !important;
            }
            .tabs {
                display: inline-block;
                min-width: 50px;
                font-size: 16px;
                text-align: center;
                line-height: 36px;
            }
            .act {
                color: red;
            }
        }
        .content {
            color: blue;
            padding: 10px 20px;
        }
    }
    
    .capsule {
        .tabs {
            color: black;
            flex-grow: 1;
            background-color: #F5F5F5 !important;
            border-radius: 10px;
            max-width: 100px;
        }
        .act {
            color: white !important;
            background-color: skyblue !important;
        }
    }
</style>
<template>
    <div class="page_edit_content_tools">
        <div class="_content_tools_inner fl fl_jc_sb fl_ai_c fl_wrap">
            <template v-for="item of toolsList" :key="item.title">
                <div class="_content_tools_item flv fl_ai_c" @click="()=>addComponet(item.componentSchema)">
                    <img :src="item.icon" class="_content_tools_item_icon" />
                    <span>{{ item.title }}</span>
                    <span class="">
                        {{state.count[item.componentName]?? 0}}/{{ item.limit }}
                    </span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import state from "@/stores/store.js";
import {getUuid} from "@/utils/uuid.js";
const toolsList = [
    {
        icon: "/images/title_text.svg",
        title: "标题文本",
        limit: 100,
        componentName: "TitleText",
        componentSchema: {
            name: "标题文本",
            componentName: "TitleText",
            configComponentName: "TitleTextConfig",
            settings: {
                content: "这是一个标题文本",
                style: {
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "red" // 完全符合style css属性驼峰书写
                }
            }
        }
    },
    {
        icon: "/images/image.svg",
        title: "图片",
        limit: 500,
        componentName: "Image",
        componentSchema: {
            name: "图片",
            componentName: "Image",
            configComponentName: "ImageConfig",
            settings: {
                url: "",
                style: {
                    borderRadius: "4px"
                }
            }
        }
    },
];

const addComponet = (schema) => {
    const componentItem = Object.assign({}, schema);
    const uuid =  getUuid();
    componentItem._id = uuid;
    state.components.push(componentItem);
    state.currentComponentId = uuid;
    if (state.count[componentItem.componentName]) {
        state.count[componentItem.componentName]++;
    }else {
        state.count[componentItem.componentName] = 1;
    }
}
</script>

<style scoped>
._content_tools_inner {
    padding: 5px 10px;
}

._content_tools_item {
    height: 80px;
    width: 80px;
    padding: 6px;
    cursor: pointer;
    margin-top: 20px;
}
._content_tools_item:hover {
    background-color: #155bd4;
    color: #fff;
}
._content_tools_item_icon {
    width: 32px;
    height: 32px;
}
</style>
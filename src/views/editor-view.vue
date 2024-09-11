<template>
    <div class="view-container">
        <template v-for="item of state.components" :key="item._id">
            <div class="component-place" :class="{current: state.currentComponentId && state.currentComponentId === item._id}">
                <div class="select-box"></div>
                <component :is="item.componentName" :data="item" @click="selectComponent(item._id)"/>
            </div>
        </template>
    </div>
</template>

<script>
import TitleText from "@c/view-components/TitleText.vue";
import Image from "@c/view-components/Image.vue";
export default {
    components: {
        TitleText,
        Image
    }
}
</script>


<script setup>
import state from "@/stores/store.js";
import { onMounted } from "vue";

function selectComponent(_id){
    state.currentComponentId = _id;
    if (parent){
        parent.postMessage({message: "onSelectComponent", data: {
            _id
        }})
    }
}

function syncState(data){
    state.components = data;
}

let parent = null;
function onInit(source){
    parent = source;
}

onMounted(() => {
    window.addEventListener("message", (e) => {
        if(e.data){
            const { message, data } = e.data;
            switch(message){
                case "init":
                    onInit(e.source);
                    break;
                case "onCreateComponet":
                    syncState(data);
                    break;
            }
        }
    });
})
</script>

<style>
#app {
    display: flex;
    justify-content: center;
    height: 100%;
}
</style>

<style scoped>
.view-container{
    width: 375px;
    height: 450px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 20px;
    position: relative;
}
.component-place{
    width: 100%;
    height: auto;
    box-sizing: content-box;
    position: relative;
}

.select-box{
    width: calc(100% + 4px);
    height: 100%;
    box-sizing: border-box;
    position:absolute;
    top: -2px;
    left: -2px;
    border: 2px solid #155bd4;
    display: none;
}

.component-place.current .select-box{
    display: block;
}
</style>

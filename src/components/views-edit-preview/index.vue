<template>
    <iframe id="edit_preview_iframe_ref" src="/edit/preview/1" class="child-iframe"></iframe>
</template>

<script setup>
import state from "@/stores/store.js";
import { onMounted, watch, toRaw } from "vue";

let childIframeWin = null

watch(state.components, (newValue, oldValue) => {
    // console.log(toRaw(newValue))
    childIframeWin.postMessage({
        message: "onCreateComponet",
        data: toRaw(newValue)
    });
}, { deep: true });

onMounted(() => {
    childIframeWin = document.getElementById("edit_preview_iframe_ref")?.contentWindow;
    if (childIframeWin) {
        setTimeout(() => {
            childIframeWin.postMessage({
                message: "init",
                data: null
            });
        }, 600)
    }
    window.addEventListener("message", (e) => {
        if (e.data.message === "getComponents") {
            childIframeWin.postMessage({
                message: "setComponents",
                data: state.components
            });
        }
    })
})

</script>

<style scoped>
.child-iframe{
    border: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
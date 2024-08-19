<template>
    <div class="header">
        <Header />
    </div>
    <div class="fl body">
        <div class="tool"><Tools /></div>
        <div class="preview fl fl_jc_c"><Preview /></div>
        <div class="config"><Config /></div>
    </div>
</template>

<script setup>
import Header from '@c/views-edit-header/index.vue'
import Tools from '@c/views-edit-tools/index.vue'
import Preview from '@c/views-edit-preview/index.vue'
import Config from '@c/views-edit-config/index.vue'
</script>

<style scoped>
.header{
    height: 58px;
    padding: 0 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.body{
    height: calc(100vh - 58px);
}
.tool {
    width: 200px;
}
.preview{
    flex: 1;
    background-color: #f7f8f9;
}
.config{
    width: 375px;
}
</style>
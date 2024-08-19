<template>
    <div class="page_edit_header fl fl_jc_sb fl_ai_c">
        <router-link to="/">返回页面列表</router-link>
        <div class="fl fl_ai_c">
            <div class="page_edit_header_btn">预览</div>
            <div class="page_edit_header_btn">保存</div>
            <div class="page_edit_header_btn primary" @click="publish">发布</div>
        </div>
    </div>
</template>
<script setup>

const publish = () => {
    // fetch('http://localhost:6969/api/page/create', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json' // 指定请求头内容类型为JSON
    //   },
    //   body: JSON.stringify( {page_id: 1, components: store.components})
    // })
}
</script>
<style scoped>
.page_edit_header {
    height: 100%;
    background-color: #fff;
}

.page_edit_header_btn {
    padding: 4px 12px;
    border: 1px solid #eee;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 10px;
}

.page_edit_header_btn.primary {
    color: #fff;
    background-color: #0958d9;
}
</style>
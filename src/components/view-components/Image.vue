<template>
    <div v-if="data.settings.url">
        <img :src="data.settings.url" alt="" :style="data.settings.style"/>
    </div>
    <div v-else>
        这是占位图
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {}
        }
    },
})
</script>
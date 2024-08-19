<template>
    <div :style="data.settings.style">
        {{ data.settings.content }}
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
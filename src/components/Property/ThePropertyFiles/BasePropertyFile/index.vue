<template>
    <div class="basePropertyFile">
        <div class="basePropertyFile__icon"></div>
        <div class="basePropertyFile__name">
            <h1 class="basePropertyFile__fileName">{{fileName}}</h1>
            <h2 class="basePropertyF__description">{{fileDescription}}</h2>
        </div>
        <div class="basePropertyFile__updates">
            <div class="basePropertyFile__status">{{fileStatus}}</div>
            <div class="basePropertyFile__time">{{fileUpdateTime}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fileName: {
            type: String,
            default: '',
            required: true,
        },
        fileDescription: {
            type: String,
            default: '',
            required: true,
        },
        fileStatus: {
            type: String,
            default: '',
            required: true,
        },
        fileUpdateTime: {
            type: String,
            default: '',
            required: true,
        },
    }
}
</script>

<style scoped>

</style>

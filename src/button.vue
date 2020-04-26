<template>
    <button class="g-button">按钮</button>

</template>
<script>
    export default {

    }
</script>
<style lang="scss">
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        border-radius: var(--border-radius);
        padding: 0 1em;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:focus{
            background: var(--button-active-bg);

        }
        &:focus{
            outline: none;
        }

    }

</style>
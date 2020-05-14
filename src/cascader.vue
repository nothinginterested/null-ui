<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="wrapper">
            <div v-for="item in source">
                <CascaderItem :source-item="item"></CascaderItem>
            </div>
        </div>
    </div>


</template>

<script lang='ts'>
    import CascaderItem from './cascader-item';

    export default {
        name: 'cascader',
        props: {
            source: {
                type: Array
            }
        },
        components: {
            CascaderItem
        }
    };
</script>

<style lang='scss' scoped>
    .wrapper {
        border: 1px solid red;
    }
</style>
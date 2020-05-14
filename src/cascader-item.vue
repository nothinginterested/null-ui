<template>

    <div class="wrapper">

        {{sourceItem.value}}
        <cascader-item v-for="item in sourceItem.children"
                       :source-item="item"
                       v-if="sourceItem.children">

        </cascader-item>

    </div>

</template>

<script lang='ts'>

    export default {

        name: 'cascader-item',
        props: {
            sourceItem: {
                type: Object
            }
        }
    };

</script>

<style lang='scss' scoped>
    .wrapper {
        border: 1px solid red;
        margin: 4px;
    }
</style>
<template>
    <div class="tabsHead">
        <slot>

        </slot>
        <div class="action">
            <slot name="action"></slot>
        </div>

    </div>

</template>

<script>

    export default {
        inject: ['eventBus'],
        created() {
            // console.log('爷爷给爸爸的');
            // console.log(this.eventBus);
        }
    }

</script>


<style lang="scss" scoped>
    $tab-height: 40px;

    .tabsHead {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        border: 1px solid gray;

        > .action {
            margin-left: auto; /*将按钮放到右边*/
        }
    }

</style>
<template>
    <div class="g-button-group">
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            // console.log(this.$el);
            for (let node of this.$el.children) {
                console.log(node.nodeName);
                if (node.nodeName === 'DIV') {
                    console.warn('你应该只使用g-button元素')
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: top;

        > .g-button {
            margin-left: -1px;
            border-radius: 0;

            &:first-child {

                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }

            &:last-child {
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }

</style>
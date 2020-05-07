<template>
    <div class="Popover" @click="xxx">
        <div class="content-wrapper" v-if="Visible">
            <slot name="content"></slot>
        </div>
        <slot>

        </slot>

    </div>


</template>

<script>
    export default {
        name: "Popover",
        data: function () {
            return {
                Visible: false
            }
        },
        methods: {
            xxx() {
                this.Visible = !this.Visible
            }
        }
    }
</script>

<style scoped lang="scss">
    .Popover {
        display: inline-block;
        position: relative;
        vertical-align: top;

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;

        }
    }
</style>
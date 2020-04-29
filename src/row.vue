<template>
    <div class="row" :style=rowStyle>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            nLength: {
                type: [String, Number]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.nLength = this.nLength
            })
        },
        computed: {
            rowStyle() {
                let {nLength} = this
                return {marginLeft: -nLength / 2 + 'px', marginRight: -nLength / 2 + 'px'}
            }
        }
    }
</script>

<style lang="scss" scoped>

    .row {
        display: flex;
    }

</style>
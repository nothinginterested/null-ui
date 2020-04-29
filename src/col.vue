<template>
    <div class="col " :class=colClass
         :style=colStyle>
        <div style="border: 1px solid green">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            span: {
                type: String || Number
            },
            offset: {
                type: [String, Number]
            }

        },
        data() {
            return {
                nLength: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset} = this
                return [span && `col-${span}`, offset && `offset-${offset}`]
            },
            colStyle() {
                let {nLength} = this
                return {paddingLeft: nLength / 2 + 'px', paddingRight: nLength / 2 + 'px'}
            }
        }

    }

</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 50%;
        height: 70px;
        padding: 0 10px;
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }


    }


</style>
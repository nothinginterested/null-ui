<template>
    <div class="col " :class="[`col-${span}`,offset&&`offset-${offset}`]">
        <slot></slot>
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

        }
    }

</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 50%;
        height: 70px;
        background: green;
        border: 1px solid red;


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
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
            },
            phone: {
                type: Object,

            },
            ipad: {
                type: Object
            },
            narrowPc: {
                type: Object

            },
            Pc: {
                type: Object
            }


        },
        data() {
            return {
                nLength: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset, phone, narrowPc, ipad, Pc} = this
                return [span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...[(phone && `col-phone-${phone.span}`)],
                    ...[(ipad && `col-ipad-${ipad.span}`)],
                    ...[(narrowPc && `col-narrow-pc-${narrowPc.span}`)],
                    ...[(Pc && `col-pc-${Pc.span}`)]]
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
        /*   Phone */
        @media (max-width: 576px) {
            $class: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
        }
        /*ipad*/
        @media (max-width: 768px) and (min-width: 577px) {
            $class: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
        }
        /*   narrow-pc */
        @media (max-width: 992px) and (min-width: 769px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
        }
        /*PC    */
        @media (max-width: 1200px) and (min-width: 993px) {
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%;
                }
            }
        }

    }


</style>
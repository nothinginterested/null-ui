<template>
    <div class="tabsItem" @click="xxx" :class="classes">
        <slot>

        </slot>

    </div>

</template>

<script>
    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        inject: ['eventBus'],
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                // console.log(name);
                this.active = name === this.name ? true : false;

            })
        },
        data() {
            return {
                active: false
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        }
    }

</script>


<style scoped lang="scss">
    $color: blue;
    .tabsItem {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        align-items: center;
        height: 100%;
        display: flex;
        height: 100%;

        &.active {
            color: $color;
            font-weight: bold;
        }
    }

</style>
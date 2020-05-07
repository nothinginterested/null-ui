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
                this.eventBus.$emit('update:selected', this.name, this)
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (name, item) => {
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
    $color: #0099CC;
    .tabsItem {
        flex-shrink: 0;
        padding: 0 1em;
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
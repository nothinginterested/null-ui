<template>
    <div class="tabsPane" :class="classes" v-if="active">
        <slot>

        </slot>

    </div>

</template>

<script>
    export default {
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
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
        },
        props: {
            name: {
                type: String | Number,

            }
        }

    }

</script>


<style lang="scss" scoped>
    $tabs-box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15);
    $tabs-border-color: #d9d9d9;
    .tabsPane {
        padding: 1em 2em;
        box-shadow: $tabs-box-shadow-base;
        border: 1px solid $tabs-border-color;

        &.active {
        }
    }

</style>

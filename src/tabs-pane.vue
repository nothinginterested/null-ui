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
                if (name === this.name) {
                    this.active = true

                } else {

                    this.active = false
                }
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
    .tabsPane {
        &.active {
            background: red;
        }
    }

</style>
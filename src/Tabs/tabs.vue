<template>
    <div class="tabs">
        <slot>

        </slot>

    </div>

</template>

<script>
    import Vue from 'vue'
    export default {
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'NullTabsHead') {
                    vm.$children.forEach((item) => {
                        // console.log(this.selected);
                        if (item.$options.name === 'g-tabs-item' && item.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, item)


                        }
                    })
                }
            })


        }
    }

</script>


<style>


</style>
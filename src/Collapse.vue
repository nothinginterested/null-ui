<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "Collapse",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            selected: {
                type: String
            },
            single: {
                type: Boolean,
                default: false
            }

        },

        provide() {
            return {
                eventBus: this.eventBus
            }

        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:selected', (name) => {
                this.$emit('update:selected', name)
            })
            this.$children.forEach((vm) => {
                vm.single = this.single

            })
        }
    }
</script>

<style scoped lang="scss">
    .collapse {
        $gray: #ddd;
        $border-radius: 4px;
        border: 1px solid $gray;
        border-radius: $border-radius;
        border-bottom: none;

    }
</style>
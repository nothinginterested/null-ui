<template>

    <div class="collapseItem">
        <div class="title" @click="Trigger">
            {{title}}
        </div>

        <div v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Collapse-item",
        props: {
            title: {
                type: String
            },
            name: {
                type: String
            }

        },
        data() {
            return {open: false}
        },
        inject: ['eventBus'],
        methods: {
            close() {
                this.open = false
            },
            Trigger() {
                if (this.open) {
                    this.open = false
                } else {
                    this.open = true
                    this.eventBus.$emit('update:selected', this.name)
                }
            },
            show() {
                this.open = true
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                console.log(name);
                if (name !== this.name) {
                    this.close()
                } else {
                    console.log('name===name');
                    this.show()
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    $gray: #ddd;
    $border-radius: 4px;

    .collapseItem {
        > .title {

            border: 1px solid $gray;
            margin-left: -1px;
            margin-top: -1px;
            margin-right: -1px;
            display: flex;
            align-items: center;
            min-height: 32px;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;

            }
        }

    }
</style>
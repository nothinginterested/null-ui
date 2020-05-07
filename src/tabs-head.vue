<template>
    <div class="tabsHead">
        <slot>

        </slot>
        <div class="line" ref="line"></div>
        <div class="action">
            <slot name="action"></slot>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'NullTabsHead',
        inject: ['eventBus'],
        mounted() {
            // console.log('爷爷给爸爸的');
            // console.log(this.eventBus);
            this.eventBus.$on('update:selected', (item, vm) => {
                console.log(vm.$el);
                let {width} = vm.$el.getBoundingClientRect()
                let left = vm.$el.offsetLeft

                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`

            })
        }
    }

</script>


<style lang="scss" scoped>
    $tab-height: 40px;
    $tab-line-color: #0099CC;

    .tabsHead {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        border-bottom: 1px solid #ddd;
        position: relative;

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $tab-line-color;
            transition: all 250ms;
        }

        > .action {
            margin-left: auto; /*将按钮放到右边*/
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1em;
        }
    }

</style>
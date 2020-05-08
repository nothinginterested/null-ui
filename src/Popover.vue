<template>
    <div class="Popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="Visible" @click.stop ref="Content">
            <slot name="content"></slot>
        </div>
        <span ref="Trigger">
        <slot>

        </slot>
</span>
    </div>


</template>

<script>
    export default {
        name: "Popover",
        data: function () {
            return {
                Visible: false
            }
        },
        methods: {
            xxx() {
                this.Visible = !this.Visible
                if (this.Visible === true) {

                    this.$nextTick(() => {
                        let {height, width, left, top} = this.$refs.Trigger.getBoundingClientRect()
                        console.log(height, width, left, top);
                        document.body.appendChild(this.$refs.Content)
                        this.$refs.Content.style.left = left + window.scrollX + 'px'
                        this.$refs.Content.style.top = top + window.scrollY + 'px'

                        let EventHandle = () => {
                            console.log('点击body关闭了');
                            if (this.Visible === true) {
                                this.Visible = false
                            }

                            document.removeEventListener('click', EventHandle)
                            console.log('docu删除监听器了');
                        }
                        document.addEventListener('click', EventHandle)

                    }, 1000)
                } else {
                    console.log('vm delete');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .Popover {
        display: inline-block;
        position: relative;
        vertical-align: top;


    }

    .content-wrapper {
        position: absolute;
        transform: translateY(-100%);
        border: 1px solid red;
    }


</style>
<template>
    <div class="Popover" @click="Onclick" ref="Wrapper">
        <div class="content-wrapper" v-if="Visible" ref="Content">
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
            Onclick(event) {

                if (this.$refs.Trigger.contains(event.target)) {
                    console.log(event.target);
                    this.Visible = !this.Visible
                    if (this.Visible === true) {
                        this.$nextTick(() => {
                            let {left, top} = this.$refs.Trigger.getBoundingClientRect()
                            document.body.appendChild(this.$refs.Content)
                            this.$refs.Content.style.left = left + window.scrollX + 'px'
                            this.$refs.Content.style.top = top + window.scrollY + 'px'
                            let EventHandle = (e) => {
                                if (this.$refs.Trigger.contains(e.target) || this.$refs.Content.contains(e.target)) {
                                    // 一个bug 点击另外一个Popover组件会使得前一个Popover消失，不能共存 解决方法
                                } else {
                                    this.Visible = false
                                    console.log('document delete');
                                    document.removeEventListener('click', EventHandle)
                                }
                            }
                            document.addEventListener('click', EventHandle)
                        })

                    }

                } else {
                    console.log('up');
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
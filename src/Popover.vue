<template>
    <div class="Popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="Visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot>

        </slot>

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
                console.log('切换visible');
                if (this.Visible === true) {
                    setTimeout(() => {

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

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;

        }
    }
</style>
<template>
    <div class="Popover" @click="Onclick" ref="Wrapper">
        <div class="content-wrapper" v-if="Visible" ref="Content">
            <slot name="content"></slot>
        </div>
        <span ref="Trigger" style="display: inline-block">
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
                            if (this.position === 'top') {
                                document.body.appendChild(this.$refs.Content)
                                this.$refs.Content.style.left = left + window.scrollX + 'px'
                                this.$refs.Content.style.top = top + window.scrollY + 'px'
                            }


                            let EventHandle = (e) => {
                                console.log(this.$refs);
                                if (this.$refs.Trigger.contains(e.target) || (this.$refs.Content && this.$refs.Content.contains(e.target))) {
                                    // 一个bug 点击另外一个Popover组件会使得前一个Popover消失，不能共存 解决方法
                                    return
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
    $border-color: #333;
    $border-radius: 4px;

    .Popover {
        display: inline-block;
        position: relative;
        vertical-align: top;


    }

    .content-wrapper {
        position: absolute;
        transform: translateY(-100%);
        border: 1px solid $border-color;
        border-radius: $border-radius;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        padding: .5em 1em;
        margin-top: -10px;

        &::before, &::after {
            content: '';
            display: block;
            width: 0px;
            height: 0px;
            position: absolute;
            top: 100%;
            left: 10px;


        }

        &::before {
            border: 10px solid transparent;
            border-top-color: black;
        }

        &::after {
            border: 10px solid transparent;
            border-top-color: white;
            top: calc(100% - 1px);
        }

    }


</style>
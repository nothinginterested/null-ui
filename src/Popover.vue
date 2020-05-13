<template>
    <div class="Popover" @click="Onclick" ref="Wrapper">
        <div class="content-wrapper" v-if="Visible" ref="Content" :class="{[`position-${position}`]:true}">
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
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                },
            }


        },
        methods: {
            onPosition() {


                const {left, top, height, width} = this.$refs.Trigger.getBoundingClientRect()
                document.body.appendChild(this.$refs.Content)
                const {width: width2, height: height2} = this.$refs.Content.getBoundingClientRect()
                const pos = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + height
                    },
                    left: {
                        left: left + window.scrollX - width2,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                    right: {
                        left: left + window.scrollX + width,
                        top: top + window.scrollY + (height - height2) / 2
                    }


                }
                this.$refs.Content.style.left = pos[this.position].left + 'px'
                this.$refs.Content.style.top = pos[this.position].top + 'px'

            },
            Onclick(event) {

                if (this.$refs.Trigger.contains(event.target)) {
                    this.Visible = !this.Visible
                    if (this.Visible === true) {
                        this.$nextTick(() => {

                            this.onPosition()

                            let EventHandle = (e) => {
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
        border: 1px solid $border-color;
        border-radius: $border-radius;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);

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

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                content: '';
                display: block;
                width: 0px;
                height: 0px;
                position: absolute;
                bottom: 100%;
                left: 10px;


            }

            &::before {
                border: 10px solid transparent;
                border-bottom-color: black;
            }

            &::after {
                border: 10px solid transparent;
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }


        }

        &.position-left {
            margin-left: -10px;

            &::before, &::after {
                content: '';
                display: block;
                width: 0px;
                height: 0px;
                position: absolute;
                left: 100%;
                transform: translateY(-50%);
                top: 50%

            }

            &::before {
                border: 10px solid transparent;
                border-left-color: black;
            }

            &::after {
                border: 10px solid transparent;
                border-left-color: white;
                left: calc(100% - 1px);
            }


        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                content: '';
                display: block;
                width: 0px;
                height: 0px;
                position: absolute;
                right: 100%;
                transform: translateY(-50%);
                top: 50%

            }

            &::before {
                border: 10px solid transparent;
                border-right-color: black;
            }

            &::after {
                border: 10px solid transparent;
                border-right-color: white;
                right: calc(100% - 1px);
            }


        }


    }


</style>
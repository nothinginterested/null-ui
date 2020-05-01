<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <slot></slot>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nullToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: 'lllll',
                        callback: () => {
                            console.log('回调成功');
                        }
                    }
                }
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            position: {
                type: String,
                default: 'top',
                validate(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value)
                }
            }
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                this.closeButton.callback()
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(() => {
                this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
            })
        }
    }
</script>


<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes slide-up {
        0% {
            transform: translateY(100%);
            opacity: 0%;
        }
        100% {
            transform: translateY(0);
            opacity: 100%;
        }

    }

    .wrapper {
        position: fixed;

        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;
        }

        &.position-middle {
            top: 50%;
            transform: translateY(-50%) translateX(-50%);

        }

        &.position-bottom {
            bottom: 0;
        }
    }

    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        background: $toast-bg;
        color: white;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
        display: flex;
        align-items: center;
        padding: 0 20px;
        animation: slide-up .5s;


    }

    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;

    }

    .close {
        font-size: $font-size;
        padding-left: 16px;
        flex-shrink: 0;

    }

</style>
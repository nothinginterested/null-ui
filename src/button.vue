<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon :name="icon" class="icon" v-if="icon&&!loading"></g-icon>
        <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>

        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>
<script>
    import Icon from "./icon"
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value !== 'left' && value !== 'right' ? false : true;
                    //  属性的检查器，检查通过pros传值的正确性
                }
            },
            loading: {
                type: Boolean,
                default: false
            }

        },
        components:{
            'g-icon':Icon
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


    .g-button {
        vertical-align: top;
        font-size: var(--font-size);
        height: var(--button-height);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        border-radius: var(--border-radius);
        padding: 0 1.1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background: var(--button-active-bg);

        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0em;
            }

            > .content {
                order: 1;
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }

    }

</style>
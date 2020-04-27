<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg class="icon">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>
<script>
    export default {
        props: ["icon", 'iconPosition']
    }
</script>
<style lang="scss">
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

        &:focus {
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

    }

</style>
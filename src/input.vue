<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" class="{disabled,readonly}" :readonly="readonly">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: 'g-input',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        },
        components: {
            Icon
        }
    }
</script>

<style lang="scss" scoped>
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--button-bg: white;*/
    /*--border-color: #999;*/
    /*--border-radius: 4px;*/
    /*--border-color-hover: #666;*/
    /*--button-active-bg: #eee;*/
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            font-size: inherit;
            height: 32px;
            padding: 0 8px;
            border: 1px solid $border-color;

            &:hover {
                border-color: $border-color-hover
            }

            border-radius: $border-radius;

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                cursor: not-allowed;
                border-color: #bbb;
                color: #bbb;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }
</style>
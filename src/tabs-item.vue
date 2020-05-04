<template>
    <div class="tabsItem">
        <slot>

        </slot>

    </div>

</template>

<script>
    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            }
        }
    }

</script>


<style>


</style>
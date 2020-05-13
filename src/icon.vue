<template>
    <svg class="g-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>


</template>

<script>
    import './svg'
    export default {
        props: {
            name: {}
        }
    }
</script>

<style>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>
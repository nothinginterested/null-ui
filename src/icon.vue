<template>
    <svg class="g-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>


</template>

<script>
    export default {
      props: {
        name: {}
      },
      mounted() {
        import('./svg')
      }
    }
</script>

<style>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>

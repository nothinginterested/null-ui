<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'nullToast'
    }
</script>


<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        height: $toast-height;
        line-height: 1.8;
        background: $toast-bg;
        color: white;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        padding: 0 20px;

    }

</style>
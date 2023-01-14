<template>
    <div class="layout-blank">
        <transition name="fade" mode="out-in">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'LayoutBlank'
    };
</script>
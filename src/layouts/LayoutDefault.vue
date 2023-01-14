<template>
    <div class="layout-default">
        <LayoutMainMenu />
        <transition name="fade" mode="out-in">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    import LayoutMainMenu from '@/layouts/components/LayoutMainMenu.vue';

    export default {
        name: 'LayoutDefault',
        components: {
            LayoutMainMenu
        }
    };
</script>
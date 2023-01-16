<template>
    <div class="layout-default">
        <LayoutBanner />
        <LayoutMainMenu />
        <transition name="fade" mode="out-in">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    import LayoutMainMenu from '@/layouts/components/LayoutMainMenu.vue';
    import LayoutBanner from '@/layouts/components/LayoutBanner.vue';

    export default {
        name: 'LayoutDefault',
        components: {
            LayoutMainMenu,
            LayoutBanner
        }
    };
</script>
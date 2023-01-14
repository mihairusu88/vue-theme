<template>
    <div class="layout-with-sidebar" :style="{ paddingLeft: layoutSidebarWidth }">
        <!-- <LayoutSidebar color="primary" /> -->
        <LayoutSidebarV2 ref="layoutSidebarRef" color="primary" />
        <transition name="fade" mode="out-in">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
    // import LayoutSidebar from '@/layouts/components/LayoutSidebar.vue';
    import LayoutSidebarV2 from '@/layouts/components/LayoutSidebarV2.vue';
    import { ref, onMounted } from 'vue';

    export default {
        name: 'LayoutWithSidebar',
        components: {
            // LayoutSidebar,
            LayoutSidebarV2,
        },
        setup( ) {
            const layoutSidebarRef = ref( null );
            let layoutSidebarWidth = ref( 0 );

            onMounted( () => {
                layoutSidebarWidth.value = `${layoutSidebarRef.value.$el.clientWidth}px`;
            } );

            return {
                layoutSidebarRef,
                layoutSidebarWidth
            };
        }
    };
</script>
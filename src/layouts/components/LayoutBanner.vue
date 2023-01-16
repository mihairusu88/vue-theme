<template>
    <div class="layout-banner">
        <div class="container is-flex is-align-items-center">
            <div class="layout-banner__logo-container is-flex">
                <LogoImage />
            </div>
            <div class="layout-banner__search-container is-flex is-flex-grow-1">
                <BaseInput
                    placeholder="What are you looking for..."
                    size="normal"
                    color="primary"
                    icon-left="mdi:account-outline"
                    class="width-100" />
            </div>
        </div>
    </div>
</template>

<script>
import LogoImage from '@/components/LogoImage.vue';
import BaseInput from '@/components/base/BaseInput.vue';

export default {
    name: 'LayoutBanner',
    components: {
        LogoImage,
        BaseInput
    },
};
</script>

<style lang="scss" scoped>
    .layout-banner {
        .layout-banner__logo-container {
            width: 250px;
            padding: 15px 0;

            ::v-deep(img) {
                max-height: 47px !important;
            }
        }
    }
</style>
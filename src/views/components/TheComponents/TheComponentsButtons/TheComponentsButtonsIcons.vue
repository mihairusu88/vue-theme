<template>
    <div class="components-buttons-basic is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-justify-content-center">
            <div class="columns is-flex-wrap-wrap">
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        icon-left="mdi:layers-triple">
                        Icon Left
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        icon-right="mdi:layers-triple">
                        Icon Right
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        icon-left="mdi:layers-triple"
                        light>
                        Light Icon Left
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        icon-right="mdi:layers-triple"
                        light>
                        Light Icon Right
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        icon-left="mdi:layers-triple"
                        outlined>
                        Outlined Icon Left
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        icon-right="mdi:layers-triple"
                        outlined>
                        Outlined Icon Right
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium">
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        rounded>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        circle>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        light>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        rounded
                        light>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        circle
                        light>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        outlined>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        rounded
                        outlined>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        circle
                        outlined>
                        <Icon icon="mdi:layers-triple" />
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseButton from '@/components/base/BaseButton.vue';
    import { Icon } from '@iconify/vue';

    export default {
        name: 'TheComponentsButtonsIcons',
        components: {
            BaseButton,
            Icon
        }
    };
</script>

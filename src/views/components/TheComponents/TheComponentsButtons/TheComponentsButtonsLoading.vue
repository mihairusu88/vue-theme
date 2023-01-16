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
                        loading />
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        loading
                        rounded />
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        loading
                        circle />
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        loading
                        light />
                </div>
                <div class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="normal"
                        font-weight="medium"
                        loading
                        outlined />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseButton from '@/components/base/BaseButton.vue';

    export default {
        name: 'TheComponentsButtonsLoading',
        components: {
            BaseButton
        }
    };
</script>

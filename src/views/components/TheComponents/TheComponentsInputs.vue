<template>
    <div class="components-inputs is-flex is-flex-direction-column is-justify-content-center">
        <h1 class="my-20 width-100 is-size-6 has-text-weight-medium has-text-centered">
            Inputs
        </h1>
        <BaseCard class="is-flex is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Basic
                </h2>
            </template>
            <TheComponentsInputsBasic :colors="inputColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Rounded
                </h2>
            </template>
            <TheComponentsInputsRounded :colors="inputColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Icons
                </h2>
            </template>
            <TheComponentsInputsIcons :colors="inputColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Sizes
                </h2>
            </template>
            <TheComponentsInputsSizes :sizes="inputSizes" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Loading
                </h2>
            </template>
            <TheComponentsInputsLoading :sizes="inputSizes" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Disabled
                </h2>
            </template>
            <TheComponentsInputsDisabled :colors="inputColors" />
        </BaseCard>
    </div>
</template>

<script>
    import {
        colorValidator as propUtilsColorValidator,
        sizeValidator as propUtilsSizeValidator,
    } from '@/utils/propValidators';
    import BaseCard from '@/components/base/BaseCard.vue';
    import TheComponentsInputsBasic from './TheComponentsInputs/TheComponentsInputsBasic.vue';
    import TheComponentsInputsRounded from './TheComponentsInputs/TheComponentsInputsRounded.vue';
    import TheComponentsInputsIcons from './TheComponentsInputs/TheComponentsInputsIcons.vue';
    import TheComponentsInputsSizes from './TheComponentsInputs/TheComponentsInputsSizes.vue';
    import TheComponentsInputsLoading from './TheComponentsInputs/TheComponentsInputsLoading.vue';
    import TheComponentsInputsDisabled from './TheComponentsInputs/TheComponentsInputsDisabled.vue';

    export default {
        name: 'TheComponentsInputs',
        components: {
            BaseCard,
            TheComponentsInputsBasic,
            TheComponentsInputsRounded,
            TheComponentsInputsIcons,
            TheComponentsInputsSizes,
            TheComponentsInputsLoading,
            TheComponentsInputsDisabled
        },
        setup( ) {
            const inputColors = propUtilsColorValidator( );
            const inputSizes = propUtilsSizeValidator( ).reverse( );

            return {
                inputColors,
                inputSizes
            };
        }
    };
</script>

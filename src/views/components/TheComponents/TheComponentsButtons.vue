<template>
    <div class="components-buttons is-flex is-flex-direction-column is-justify-content-center">
        <h1 class="my-20 width-100 is-size-6 has-text-weight-medium has-text-centered">
            Buttons
        </h1>
        <BaseCard class="is-flex is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Basic
                </h2>
            </template>
            <TheComponentsButtonsBasic :colors="buttonColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Light
                </h2>
            </template>
            <TheComponentsButtonsLight :colors="buttonColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Outlined
                </h2>
            </template>
            <TheComponentsButtonsOutlined :colors="buttonColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Rounded
                </h2>
            </template>
            <TheComponentsButtonsRounded :colors="buttonColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Circle
                </h2>
            </template>
            <TheComponentsButtonsCircle :colors="buttonColors" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Sizes
                </h2>
            </template>
            <TheComponentsButtonsSizes :sizes="buttonSizes" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Font Weights
                </h2>
            </template>
            <TheComponentsButtonsFontWeights :font-weights="buttonFontWeights" />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Icons
                </h2>
            </template>
            <TheComponentsButtonsIcons />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Loading
                </h2>
            </template>
            <TheComponentsButtonsLoading />
        </BaseCard>
        <BaseCard class="is-flex mt-20 is-flex-direction-column">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Disabled
                </h2>
            </template>
            <TheComponentsButtonsDisabled :colors="buttonColors" />
        </BaseCard>
    </div>
</template>

<script>
    import {
        buttonColorValidator as propUtilsButtonColorValidator,
        fontWeightValidator as propUtilsFontWeightValidator,
        sizeValidator as propUtilsSizeValidator,
    } from '@/utils/propValidators';
    import BaseCard from '@/components/base/BaseCard.vue';
    import TheComponentsButtonsBasic from './TheComponentsButtons/TheComponentsButtonsBasic.vue';
    import TheComponentsButtonsLight from './TheComponentsButtons/TheComponentsButtonsLight.vue';
    import TheComponentsButtonsOutlined from './TheComponentsButtons/TheComponentsButtonsOutlined.vue';
    import TheComponentsButtonsRounded from './TheComponentsButtons/TheComponentsButtonsRounded.vue';
    import TheComponentsButtonsCircle from './TheComponentsButtons/TheComponentsButtonsCircle.vue';
    import TheComponentsButtonsSizes from './TheComponentsButtons/TheComponentsButtonsSizes.vue';
    import TheComponentsButtonsFontWeights from './TheComponentsButtons/TheComponentsButtonsFontWeights.vue';
    import TheComponentsButtonsIcons from './TheComponentsButtons/TheComponentsButtonsIcons.vue';
    import TheComponentsButtonsLoading from './TheComponentsButtons/TheComponentsButtonsLoading.vue';
    import TheComponentsButtonsDisabled from './TheComponentsButtons/TheComponentsButtonsDisabled.vue';

    export default {
        name: 'TheComponentsButtons',
        components: {
            BaseCard,
            TheComponentsButtonsBasic,
            TheComponentsButtonsLight,
            TheComponentsButtonsOutlined,
            TheComponentsButtonsRounded,
            TheComponentsButtonsCircle,
            TheComponentsButtonsSizes,
            TheComponentsButtonsFontWeights,
            TheComponentsButtonsIcons,
            TheComponentsButtonsLoading,
            TheComponentsButtonsDisabled
        },
        setup( ) {
            const buttonColors = propUtilsButtonColorValidator( );
            const buttonSizes = propUtilsSizeValidator( ).reverse( );
            const buttonFontWeights = propUtilsFontWeightValidator( );

            return {
                buttonColors,
                buttonSizes,
                buttonFontWeights
            };
        }
    };
</script>

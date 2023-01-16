<template>
    <div v-if="fontWeightValues.length" class="components-buttons-basic is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-align-items-end is-justify-content-center">
            <div class="p-5 is-flex is-align-items-end is-justify-content-center">
                <div class="columns is-flex-wrap-wrap">
                    <div v-for="( fontWeight, index ) in fontWeightValues"
                        :key="index"
                        class="column is-flex is-flex-grow-0 is-justify-content-center">
                        <BaseButton
                            class="mx-3"
                            color="primary"
                            size="normal"
                            :font-weight="fontWeight">
                            {{ fontWeight }}
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseButton from '@/components/base/BaseButton.vue';
    import { toRefs } from 'vue';

    export default {
        name: 'TheComponentsButtonsFontWeights',
        components: {
            BaseButton
        },
        props: {
            fontWeights: {
                type: Array,
                default: () => []
            }
        },
        setup( props ) {
            let { fontWeights } = toRefs( props );
            const fontWeightValues = fontWeights.value.reverse();

            return {
                fontWeightValues
            };
        }
    };
</script>

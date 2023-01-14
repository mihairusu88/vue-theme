<template>
    <div v-if="colors.length" class="components-inputs-rounded is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-justify-content-center">
            <div class="columns is-flex-wrap-wrap">
                <div v-for="( color, index ) in colors"
                    :key="index"
                    class="column">
                    <BaseInput
                        :placeholder="color"
                        size="normal"
                        :color="color"
                        rounded />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from '@/components/base/BaseInput.vue';
    import { toRefs } from 'vue';

    export default {
        name: 'TheComponentsInputsRounded',
        components: {
            BaseInput
        },
        props: {
            colors: {
                type: Array,
                default: () => []
            }
        },
        setup( props ) {
            const { colors } = toRefs( props );

            return {
                colors
            };
        }
    };
</script>

<style lang="scss" scoped>
    .components-inputs-rounded {
        .columns {
            .column {
                flex-basis: 33.33%;
            }
        }
    }
</style>

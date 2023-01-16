<template>
    <div v-if="colors.length" class="components-buttons-basic is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-justify-content-center">
            <div class="columns is-flex-wrap-wrap">
                <div v-for="( color, index ) in colors"
                    :key="index"
                    class="column is-flex is-flex-grow-0 is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        :color="color"
                        size="normal"
                        font-weight="medium"
                        rounded>
                        {{ color }}
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseButton from '@/components/base/BaseButton.vue';
    import { toRefs } from 'vue';

    export default {
        name: 'TheComponentsButtonsRounded',
        components: {
            BaseButton
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

<template>
    <div v-if="sizes.length" class="components-buttons-basic is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-align-items-end is-justify-content-center">
            <div class="columns is-flex-wrap-wrap">
                <div v-for="( size, index ) in sizes"
                    :key="index"
                    class="column is-flex is-align-items-end is-justify-content-center">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        :size="size"
                        font-weight="medium">
                        {{ size }}
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
        name: 'TheComponentsButtonsSizes',
        components: {
            BaseButton
        },
        props: {
            sizes: {
                type: Array,
                default: () => []
            }
        },
        setup( props ) {
            const { sizes } = toRefs( props );

            return {
                sizes
            };
        }
    };
</script>

<template>
    <div v-if="sizes.length" class="components-inputs-sizes is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-justify-content-center">
            <div class="columns is-flex-wrap-wrap">
                <div v-for="( size, index ) in sizes"
                    :key="index"
                    class="column">
                    <BaseInput
                        :placeholder="size"
                        :size="size"
                        color="primary" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from '@/components/base/BaseInput.vue';
    import { toRefs } from 'vue';

    export default {
        name: 'TheComponentsInputsSizes',
        components: {
            BaseInput
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

<style lang="scss" scoped>
    .components-inputs-sizes {
        .columns {
            .column {
                flex-basis: 20%;
            }
        }
    }
</style>

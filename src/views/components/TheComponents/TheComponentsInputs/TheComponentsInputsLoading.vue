<template>
    <div v-if="sizes.length" class="components-inputs-loading is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-justify-content-center">
            <div class="columns is-flex-wrap-wrap">
                <div v-for="( size, index ) in sizes"
                    :key="index"
                    class="column">
                    <BaseInput
                        :placeholder="size"
                        :size="size"
                        color="primary"
                        loading />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from '@/components/base/BaseInput.vue';
    import { toRefs } from 'vue';

    export default {
        name: 'TheComponentsInputsLoading',
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
    .components-inputs-loading {
        .columns {
            .column {
                flex-basis: 20%;
            }
        }
    }
</style>

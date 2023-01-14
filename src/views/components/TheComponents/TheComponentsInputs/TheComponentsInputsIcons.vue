<template>
    <div v-if="colors.length" class="components-inputs-icons is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-justify-content-center">
            <div class="columns is-flex-wrap-wrap">
                <div class="column">
                    <BaseInput
                        placeholder="Primary Icon Left"
                        size="normal"
                        color="primary"
                        icon-left="mdi:account-outline" />
                </div>
                <div class="column">
                    <BaseInput
                        placeholder="Primary Icon Right"
                        size="normal"
                        color="primary"
                        icon-right="mdi:account-outline" />
                </div>
                <div class="column">
                    <BaseInput
                        placeholder="Primary Rounded Icon Left"
                        size="normal"
                        color="primary"
                        icon-left="mdi:account-outline"
                        rounded />
                </div>
                <div class="column">
                    <BaseInput
                        placeholder="Primary Rounded Icon Right"
                        size="normal"
                        color="primary"
                        icon-right="mdi:account-outline"
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
        name: 'TheComponentsInputsIcons',
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
    .components-inputs-icons {
        .columns {
            .column {
                flex-basis: 20%;
            }
        }
    }
</style>

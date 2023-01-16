<template>
    <div ref="components" class="components is-flex is-flex-direction-column is-justify-content-center px-8">
        <div class="container">
            <BaseCard class="components__filter is-flex is-align-items-center is-justify-content-center p-5">
                <BaseButton v-for="(componentItem, index) in componentList"
                    :key="index"
                    class="mx-3"
                    color="primary"
                    size="normal"
                    font-weight="bold"
                    rounded
                    outlined
                    @click="onClickFilterButtonDo(index)">
                    {{ componentItem }}
                </BaseButton>
            </BaseCard>
            <TheComponentsButtons id="buttons" />
            <TheComponentsInputs id="inputs" />
            <TheComponentsCards id="cards" />
        </div>
    </div>
</template>

<script>
    import BaseCard from '@/components/base/BaseCard.vue';
    import BaseButton from '@/components/base/BaseButton.vue';
    import TheComponentsButtons from './TheComponents/TheComponentsButtons.vue';
    import TheComponentsInputs from './TheComponents/TheComponentsInputs.vue';
    import TheComponentsCards from './TheComponents/TheComponentsCards.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    export default {
        name: 'TheComponents',
        components: {
            BaseCard,
            BaseButton,
            TheComponentsButtons,
            TheComponentsInputs,
            TheComponentsCards
        },
        setup( ) {
            const router = useRouter();
            const componentList = ref( [ 'Buttons', 'Inputs', 'Cards' ] );
            const selectedFilter = ref( null );

            const onClickFilterButtonDo = function( index ) {
                selectedFilter.value = index;
                const hash = `#${componentList.value[index].toLowerCase()}`;

                router.push( { name: router.currentRoute.value.name, hash:hash } );
            };

            return {
                componentList,
                selectedFilter,
                onClickFilterButtonDo
            };
        }
    };
</script>

<style lang="scss" scoped>
.components {
    .components__filter {
        position: sticky;
        top: 0;
        background: lighten( $grey-light, 3% );
        z-index: 5;
        border-radius: 0;
    }
}
</style>

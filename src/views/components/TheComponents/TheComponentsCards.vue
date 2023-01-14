<template>
    <div class="is-flex is-flex is-flex-direction-column is-justify-content-center">
        <h1 class="my-20 width-100 is-size-6 has-text-weight-medium has-text-centered">
            Cards
        </h1>
        <BaseCard class="is-flex is-flex-direction-column" color="body">
            <template v-slot:title>
                <h2 class="width-100 is-size-6 has-text-weight-medium p-5">
                    Product
                </h2>
            </template>
            <TheComponentsCardsProduct />
        </BaseCard>
    </div>
</template>

<script>
    import BaseCard from '@/components/base/BaseCard.vue';
    import TheComponentsCardsProduct from './TheComponentsCards/TheComponentsCardsProduct.vue';

    export default {
        name: 'TheComponentsCards',
        components: {
            BaseCard,
            TheComponentsCardsProduct
        }
    };
</script>

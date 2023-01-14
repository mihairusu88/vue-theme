<template>
    <div v-if="product" class="components-cards is-flex is-flex-direction-column is-justify-content-center">
        <div class="p-5 is-flex is-justify-content-center" style="margin: 0 -0.75em;">
            <div class="columns is-flex-wrap-wrap max-width-100">
                <div class="column">
                    <ProductCardVariant1 :item="product" />
                </div>
                <div class="column">
                    <ProductCardVariant2 :item="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCardVariant1 from '@/components/ProductCardVariant1.vue'; 
    import ProductCardVariant2 from '@/components/ProductCardVariant2.vue'; 
    import { ref } from 'vue';

    export default {
        name: 'TheComponentsCardsProduct',
        components: {
            ProductCardVariant1,
            ProductCardVariant2
        },
        setup( ) {
            const product = ref( {
              id: 4,
              name: 'Product 4',
              price: '$40.00',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              images: [
                  'https://images.unsplash.com/photo-1635821410140-fae41b3a0b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                  'https://images.unsplash.com/photo-1635821410884-b84e964902c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                  'https://images.unsplash.com/photo-1635821412073-02e4d7a8d339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                  'https://images.unsplash.com/photo-1635821410604-519920657313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
              ],
              favorite: false,
            } );

            return {
                product
            };
        }
    };
</script>

<style lang="scss" scoped>
    .components-cards {
        .columns {
            .column {
                flex-basis: 33.33%;
            }
        }
    }
</style>

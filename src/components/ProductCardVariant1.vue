<template>
    <BaseCard class="product-card-variant-1 is-flex px-6 py-6">
        <div class="product-card-variant-1__image is-flex is-flex-shrink-0">
            <img :src="item.images[0]" :alt="item.name" />
        </div>
        <div class="product-card-variant-1__content is-flex is-flex-direction-column is-flex-grow-1">
            <BaseButton
                class="favorite-button"
                color="white"
                size="small"
                circle>
                <FavoriteIcon :active="item.favorite" />
            </BaseButton>
            <h3 class="name">
                {{ item.name }}
            </h3>
            <p class="description">
                {{ item.description }}
            </p>
            <div class="is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between">
                <span class="price">{{ item.price }}</span>
                <BaseButton
                    class="mx-3"
                    color="primary"
                    size="small"
                    rounded
                    font-weight="medium">
                    Add to cart
                </BaseButton>
            </div>
        </div>
    </BaseCard>
</template>

<script>
    import BaseCard from '@/components/base/BaseCard.vue';
    import BaseButton from '@/components/base/BaseButton.vue';
    import FavoriteIcon from '@/components/FavoriteIcon.vue';

    export default {
        name: 'ProductCardVariant1',
        components: {
            BaseCard,
            BaseButton,
            FavoriteIcon
        },
        props: {
            item: {
                type: Object,
                required: true,
            }
        }
    };
</script>

<style lang="scss" scoped>
    .product-card-variant-1 {
        .product-card-variant-1__image {
            position: relative;
            height: 108px;
            width: 108px;

            img {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            margin-right: 16px;
        }

        .product-card-variant-1__content {
            .name {
                line-height: 19px;
                padding-right: 20px;
                margin-bottom: 12px;
                color: $tertiary;
                font-size: 16px;
                font-weight: 500;
            }

            .description {
                line-height: 14px;
                margin-bottom: 12px;
                color: darken( $grey, 15% );
                font-size: 12px;
                font-weight: 400;
            }

            .price {
                line-height: 19px;
                color: $primary;
                font-size: 16px;
                font-weight: 500;
            }

            .favorite-button {
                position: absolute;
                top: 5px;
                right: 5px;
                height: 40px;
                width: 40px;
                padding: 0;
            }
        }
    }

    @include mobile {
        .product-card-variant-1 {
            flex-wrap: wrap;

            .product-card-variant-1__content {
                .name {
                    margin-top: 14px;
                }
            }
        }
    }
</style>
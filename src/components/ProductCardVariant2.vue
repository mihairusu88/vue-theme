<template>
    <BaseCard class="product-card-variant-2 is-flex is-flex-wrap-wrap is-flex-shrink-1 pl-6 pb-6">
        <div class="product-card-variant-2__thumbs is-flex is-flex-wrap-wrap is-align-content-start pt-6">
            <div class="is-flex is-align-content-start" v-for="(image, index) in item.images" :key="index">
                <img 
                    class="mb-6"
                    :class="{
                        'active': image === selectedThumb
                    }" 
                    :src="image"
                    :alt="item.name"
                    @click="onClickThumbDo(index)" />
            </div>
        </div>
        <div class="product-card-variant-2__image is-flex is-flex-grow-1 is-justify-content-flex-end ml-7">
            <img :src="selectedThumb" :alt="item.name" />
            <BaseButton
                class="favorite-button mr-5 mt-5"
                color="white"
                size="medium"
                circle>
                <FavoriteIcon :active="item.favorite" />
            </BaseButton>
        </div>
        <div class="product-card-variant-2__content width-100 is-flex is-flex-direction-column pr-6">
            <h3 class="name">
                {{ item.name }}
            </h3>
            <p class="description">
                {{ item.description }}
            </p>
            <div class="is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between is-flex-wrap-wrap mt-6">
                <span class="price">{{ item.price }}</span>
                <BaseButton
                    color="primary"
                    size="large"
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
    import { ref, toRefs } from 'vue';

    export default {
        name: 'ProductCardVariant2',
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
        },
        setup( props ) {
            const { item } = toRefs( props );
            const selectedThumb = ref( item.value.images[0] );
            const onClickThumbDo = function( index ) {
                selectedThumb.value = item.value.images[index];
            };

            return {
                selectedThumb,
                onClickThumbDo
            };
        }
    };
</script>

<style lang="scss" scoped>
    .product-card-variant-2 {
        .product-card-variant-2__thumbs {
            width: 50px;

            img {
                height: 50px;
                width: 50px;
                border: 2px solid $grey-light;
                border-radius: 12px;
                cursor: pointer;
                transition: all 250ms ease-in-out;
            }

            img:hover {
                border-color: $tertiary;
            }

            img.active {
                border-color: $primary;
                cursor: default;
            }
        }

        .product-card-variant-2__image {
            position: relative;
            min-height: 420px;

            img {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;
                border-radius: 0 $radius-large 0 20px;
            }
        }

        .product-card-variant-2__content {
            margin: 40px 0 8px;

            .name {
                line-height: 28px;
                margin-bottom: 16px;
                color: $tertiary;
                font-size: 24px;
                font-weight: bold;
            }

            .description {
                line-height: 16px;
                color: darken( $grey, 15% );
                font-size: 14px;
                font-weight: 400;
            }

            .price {
                line-height: 28px;
                color: $primary;
                font-size: 24px;
                font-weight: 500;
            }
        }
    }

    @include mobile {
        .product-card-variant-2 {
            padding-top: 16px;
            padding-right: 16px;

            .product-card-variant-2__thumbs {
                width: calc( 100% + 16px );
                margin: 0 -8px;
                order: 2;

                img {
                    margin-right: 8px;
                    margin-left: 8px;
                }
            }

            .product-card-variant-2__image {
                margin: 0 !important;
                order: 1;
                min-height: 200px;

                img {
                    border-radius: 20px;
                }
            }

            .product-card-variant-2__content {
                margin-top: 0;
                order: 3;

                .price {
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>
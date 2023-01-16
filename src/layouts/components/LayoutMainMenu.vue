<template>
    <nav class="main-menu navbar is-primary">
        <div class="container">
            <div class="main-menu__category-links px-10 is-flex is-align-items-center">
                <BaseButton size="small" color="white" class="mr-5" @click="toggleCategoriesDropdown">
                    <Icon icon="mdi:menu" width="20" />
                </BaseButton>
                Categories
                <transition name="fade" mode="out-in">
                    <div v-if="isCategoriesDropdownVisible" class="categories-dropdown">
                        <ul>
                            <li class="px-8" v-for="(category, index) in categories" :key="index">
                                <BaseLink class="py-5 is-flex is-align-items-center" :to="{ name: 'TheHome' }">
                                    <Icon :icon="category.icon" width="20" class="mr-5" />
                                    {{ category.label }}
                                </BaseLink>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
            <div class="main-menu__navbar navbar-start m-0">
                <BaseLink class="navbar-item"
                    :class="{
                        'is-active': route.name === 'TheHome'
                    }"
                    :to="{ name: 'TheHome' }">
                    Home
                </BaseLink>
                <BaseLink class="navbar-item"
                    :class="{
                        'is-active': route.name === 'TheProducts'
                    }"
                    :to="{ name: 'TheProducts' }">
                    Products
                </BaseLink>
                <BaseLink class="navbar-item"
                    :class="{
                        'is-active': route.name === 'TheComponents'
                    }"
                    :to="{ name: 'TheComponents' }">
                    Components
                </BaseLink>
            </div>
            <div class="main-menu__user-menu is-flex is-align-items-center ml-auto">
                <BaseButton color="primary" circle class="mr-4" :to="{ name: 'TheFavorites' }">
                    <Icon icon="mdi:cards-heart-outline" width="20" />
                </BaseButton>
                <BaseButton color="primary" circle class="mr-4" :to="{ name: 'TheCart' }">
                    <Icon icon="mdi:cart-outline" width="20" />
                </BaseButton>
                <BaseButton color="primary" circle :to="{ name: 'TheLogin' }">
                    <Icon icon="mdi:account-outline" width="20" />
                </BaseButton>
            </div>
        </div>
    </nav>
</template>

<script>
import BaseLink from '@/components/base/BaseLink.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';

export default {
    name: 'LayoutMainMenu',
    components: {
        BaseLink,
        BaseButton,
        Icon
    },
    setup() {
        const categories = ref( [ {
            icon: 'ion:glasses-outline',
            label: 'Fashion',
        }, {
            icon: 'emojione-monotone:laptop-computer',
            label: 'Electronics',
        }, {
            icon: 'maki:furniture',
            label: 'Home Decor'
        }, {
            icon: 'game-icons:medicines',
            label: 'Medicine'
        }, {
            icon: 'mdi:table-furniture',
            label: 'Furniture'
        }, {
            icon: 'game-icons:crafting',
            label: 'Crafts'
        }, { 
            icon: 'mdi:microsoft-access',
            label: 'Accessories' 
        }, {
            icon: 'simple-icons:photobucket',
            label: 'Photo'
        } ] );

        const route = useRoute();
        const isCategoriesDropdownVisible = ref( false );

        const toggleCategoriesDropdown = function() {
            isCategoriesDropdownVisible.value = !isCategoriesDropdownVisible.value;
        };

        return {
            categories,
            route,
            isCategoriesDropdownVisible,
            toggleCategoriesDropdown
        };
    }
};
</script>

<style lang="scss" scoped>
    .main-menu {
        .main-menu__category-links {
            position: relative;
            width: 250px;
            background: $white;
            color: $black;
            font-size: 14px;
            font-weight: 500;
            z-index: 2;

            > .base-button {
                border: 0 !important;
                outline: none !important;
                box-shadow: none;
            }

            .categories-dropdown {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: $white;
                border-top: 1px solid $grey-light;
                border-bottom-right-radius: $radius-large;
                border-bottom-left-radius: $radius-large;

                @include box-shadow($primary);

                .base-link {
                    color: $black;
                    font-size: 12px;
                    font-weight: 500;
                    border-bottom: 1px solid $grey-light;

                    ::v-deep(span) {
                        display: flex;
                        align-items: center;
                    }
                }

                li:last-child {
                    .base-link {
                        border: 0;
                    }
                }
            }
        }

        .main-menu__navbar {
            padding-left: 30px;

            .navbar-item {
                padding: 5px 20px;
                background-color: transparent !important;
                font-size: 14px;
                font-weight: 500;

                ::v-deep(span) {
                    position: relative;

                    &::before {
                        position: absolute;
                        left: 0;
                        bottom: -5px;
                        height: 2px;
                        width: 0;
                        background: $white;
                        content: "";
                        opacity: 0;
                        transition: all 250ms ease-in-out;
                    }
                }

                &:hover,
                &.is-active {
                    ::v-deep(span) {
                        &::before {
                            width: 100%;
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .main-menu__user-menu {
            .base-button {
                width: 40px;
            }
        }
    }
</style>
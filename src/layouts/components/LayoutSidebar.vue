<template>
    <div class="layout-sidebar"
        :class="[
            colorClass,
            {
                'is-collapsed': isCollapsed
            }
        ]">
        <div class="layout-sidebar__content">
            <div class="logo-container is-flex">
                <LogoImage :size="isCollapsed ? 'small' : 'default'" />
            </div>
            <div class="links-container">
                <BaseLink v-for="(link, index) in links"
                    :key="index"
                    :class="[
                        colorLinkClass,
                        {
                            'is-active': route.name === link.to.name
                        }
                    ]"
                    :to="link.to"
                    :icon="link.icon"
                    icon-size="25"
                    @click="onClickLinkButtonDo">
                    <b class="top-shape-rounded"></b>
                    <b class="bottom-shape-rounded"></b>
                    <span>{{ link.label }}</span>
                </BaseLink>
            </div>
        </div>
        <BaseButton
            class="layout-sidebar__toggle"
            color="white"
            icon
            circle
            size="normal"
            icon-left="mdi:arrow-left"
            @click="onClickButtonDo" />
    </div>
</template>

<script>
import { toRefs, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import LogoImage from '@/components/LogoImage.vue';
import BaseLink from '@/components/base/BaseLink.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { colorValidator as propUtilsColorValidator } from '@/utils/propValidators';

export default {
    name: 'LayoutSidebar',
    components: {
        LogoImage,
        BaseLink,
        BaseButton
    },
    props: {
        color: {
            type: String,
            default: 'default',
            validator: propUtilsColorValidator
        }
    },
    setup( props ) {
        const { color } = toRefs( props );
        const colorClass = computed( () => {
            return propUtilsColorValidator( color.value ) ? `is-${color.value}` : 'is-default';
        } );
        const colorLinkClass = computed( () => {
            return propUtilsColorValidator( color.value ) ? `has-text-${color.value}` : 'has-text-default';
        } );

        const links = ref( [
            {
                label: 'Home',
                icon: 'mdi:home-variant-outline',
                to: { name: 'TheHome' }
            },
            {
                label: 'Login',
                icon: 'mdi:account-lock-outline',
                to: { name: 'TheLogin' }
            },
            {
                label: 'Register',
                icon: 'mdi:account-plus-outline',
                to: { name: 'TheRegister' }
            },
            {
                label: 'Forgot Password',
                icon: 'mdi:account-key-outline',
                to: { name: 'TheForgotPassword' }
            }
        ] );

        const route = useRoute();
        const isCollapsed = ref( true );

        const onClickButtonDo = function() {
            isCollapsed.value = !isCollapsed.value;
        };

        const onClickLinkButtonDo = function() {
            isCollapsed.value = true;
        };

        return {
            colorClass,
            colorLinkClass,
            links,
            route,
            isCollapsed,
            onClickButtonDo,
            onClickLinkButtonDo
        };
    }
};
</script>

<style lang="scss" scoped>
.layout-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    padding: 24px 0 24px 20px;
    z-index: 9999;
    transition: all 250ms ease-in-out;

    .layout-sidebar__content {
        overflow: hidden;

        .logo-container {
            height: 60px;
            width: 90%;
            padding: 4px;
            background: $body;
            border-radius: $radius-large;
            justify-content: center;
            align-items: center;

            :deep(.logo) {
                .image {
                    max-width: 150px;

                    img {
                        transition: all 250ms ease-in-out;
                    }
                }
            }
        }

        .links-container {
            padding: 20px 0;

            :deep(.base-link) {
                position: relative;
                padding: 14px 0 14px 14px;
                color: $white !important;
                font-size: 14px;
                border-top-left-radius: $radius-large;
                border-bottom-left-radius: $radius-large;
                white-space: nowrap;

                .base-link__icon {
                    margin-right: 30px !important;
                }

                .base-link__text {
                    span {
                        display: inline-flex;
                        opacity: 1;
                        transition: opacity, width 250ms ease-in-out;
                    }
                }

                .top-shape-rounded {
                    position: absolute;
                    top: -20px;
                    left: 0;
                    height: 20px;
                    width: 100%;
                    background: $body;
                    opacity: 0;
                    z-index: -1;
                    transition: all 250ms ease-in-out;
                }

                .top-shape-rounded::before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    content: "";
                    border-bottom-right-radius: 20px;
                }

                .bottom-shape-rounded {
                    position: absolute;
                    left: 0;
                    bottom: -20px;
                    height: 20px;
                    width: 100%;
                    background: $body;
                    opacity: 0;
                    z-index: -1;
                    transition: all 250ms ease-in-out;
                }

                .bottom-shape-rounded::before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    content: "";
                    border-top-right-radius: 20px;
                }
            }

            :deep(.base-link.is-active) {
                background: $body;
                color: $black !important;

                .top-shape-rounded,
                .bottom-shape-rounded {
                    opacity: 1;
                }
            }
        }
    }

    .layout-sidebar__toggle {
        position: absolute;
        top: 50%;
        right: -20px;
        border-color: rgba( $black, 0.5 ) !important;
        transition: rotate 250ms ease-in-out;
        transform: translateY( -50% );
        box-shadow: 0 0 0 3px $body !important;

        svg {
            height: 35px;
            width: 35px;
        }
    }
}

.layout-sidebar.is-default {
    background: $grey-light;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $grey-light;
        }
    }
}

.layout-sidebar.is-primary {
    background: $primary;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $primary;
        }
    }
}

.layout-sidebar.is-secondary {
    background: $secondary;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $secondary;
        }
    }
}

.layout-sidebar.is-tertiary {
    background: $tertiary;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $tertiary;
        }
    }
}

.layout-sidebar.is-link {
    background: $link;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $link;
        }
    }
}

.layout-sidebar.is-info {
    background: $info;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $info;
        }
    }
}

.layout-sidebar.is-success {
    background: $success;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $success;
        }
    }
}

.layout-sidebar.is-warning {
    background: $warning;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $warning;
        }
    }
}

.layout-sidebar.is-danger {
    background: $danger;

    .links-container {
        .top-shape-rounded::before,
        .bottom-shape-rounded::before {
            background: $danger;
        }
    }
}

.layout-sidebar.is-collapsed {
    width: 90px;

    .layout-sidebar__content {
        .logo-container {
            width: 85%;
            padding: 0 !important;
            justify-content: center;
            border-radius: $radius-rounded;

            :deep(.logo) {
                display: flex !important;
                height: 100%;
                align-items: center;

                .image {
                    img {
                        max-height: 25px;
                    }
                }
            }
        }

        .links-container {
            :deep(.base-link) {
                .base-link__text {
                    span {
                        width: 0;
                        opacity: 0;
                    }
                }

                .base-link__icon {
                    margin-right: 0 !important;
                }
            }
        }
    }

    .layout-sidebar__toggle {
        :deep(.icon) {
            transform: rotate( 180deg );
        }
    }
}
</style>
<template>
    <div
        class="layout-sidebar is-flex is-flex-direction-column"
        :class="[
            colorClass,
            {
                'is-collapsed': isCollapsed
            }
        ]">
        <div class="layout-sidebar__content is-flex is-flex-direction-column is-flex-grow-1">
            <div class="logo-container is-flex">
                <LogoImage @click="onClickCollapseSidebar" />
            </div>
            <div class="links-container is-flex is-flex-direction-column">
                <BaseLink v-for="(link, index) in links"
                    :key="index"
                    :class="{
                        'is-active': route.name === link.to.name
                    }"
                    :to="link.to"
                    @click="onClickCollapseSidebar">
                    <span class="link-icon is-flex is-align-items-center is-justify-content-center width-100 height-100">
                        <Icon class="base-link__icon mr-2" :icon="link.icon" :height="25" />
                    </span>
                    <span class="link-text">{{ link.label }}</span>
                </BaseLink>
            </div>
            <div
                class="avatar-container is-flex is-flex-wrap-nowrap is-align-items-center mt-auto">
                <figure class="image">
                    <img class="is-rounded" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </figure>
                <div class="text is-flex is-align-items-center is-flex-wrap-nowrap">
                    <span class="is-size-7">John <b>Doe</b></span>
                    <BaseButton :color="color" circle size="normal">
                        Logout
                    </BaseButton>
                </div>
            </div>
        </div>
        <BaseButton
            class="layout-sidebar__toggle"
            color="white"
            icon
            circle
            size="small"
            icon-left="mdi:arrow-left"
            @click="onClickToggleSidebar" />
    </div>
</template>

<script>
import { toRefs, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import BaseLink from '@/components/base/BaseLink.vue';
import { colorValidator as propUtilsColorValidator } from '@/utils/propValidators';
import { Icon } from '@iconify/vue';
import BaseButton from '@/components/base/BaseButton.vue';
import LogoImage from '@/components/LogoImage.vue';

export default {
    name: 'LayoutSidebarV2',
    components: {
        BaseLink,
        Icon,
        BaseButton,
        LogoImage
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

        const onClickToggleSidebar = function() {
            isCollapsed.value = !isCollapsed.value;
        };

        const onClickCollapseSidebar = function() {
            isCollapsed.value = true;
        };

        return {
            colorClass,
            links,
            route,
            isCollapsed,
            onClickToggleSidebar,
            onClickCollapseSidebar
        };
    }
};
</script>

<style lang="scss" scoped>

// expanded
.layout-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 350px;
    transition: all 500ms ease;
    z-index: 9999;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    .layout-sidebar__content {
        position: relative;
        padding: 20px;
        background: $white;
        z-index: 1;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        .links-container {
            :deep(.base-link) {
                position: relative;
                width: 100%;
                margin-bottom: 15px;
                background: transparent;
                color: darken( $grey, 10% );
                font-size: 14px;
                border-radius: $radius-large;
                overflow: hidden;
                white-space: nowrap;
                transition: background 250ms ease;

                .base-link__text {
                    display: flex;
                    padding: 12px 5px;
                    flex-wrap: nowrap;

                    .link-icon {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 50px;
                        background: $white;
                        max-width: 100%;
                        border-radius: $radius-large;
                        z-index: 2;
                        transition: background 250ms ease;

                        .base-link__icon {
                            margin: 0 !important;
                        }
                    }

                    .link-text {
                        position: relative;
                        transform: translateX( 60px );
                        z-index: 1;
                        opacity: 1;
                        transition: transform 350ms ease, opacity 500ms ease-in-out;
                    }
                }
            }

            :deep(.base-link.is-active) {
                color: $white;
            }

            :deep(.base-link)::before {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background: transparent;
                content: "";
                border-radius: $radius-large;
                z-index: 3;
                transition: background 250ms ease;
            }
        }

        .logo-container {
            height: auto;
            width: 100%;
            padding: 0;
            padding-bottom: 25px;
            margin-bottom: 25px;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-bottom: 1px solid $grey-light;

            :deep(.logo) {
                height: auto;
                width: 100%;

                .image {
                    width: 175px;
                }
            }
        }

        .avatar-container {
            position: relative;

            .image {
                position: absolute;
                top: 50%;
                left: 0;
                height: 50px;
                width: 50px;
                z-index: 2;
                transform: translateY( -50% );
            }

            .image:hover ~ .text,
            .text:hover {
                width: auto;
                padding-left: 60px;
                overflow: unset;
            }

            .text {
                width: 50px;
                padding: 7px 10px 7px 0;
                background: $grey-light;
                max-height: 50px;
                z-index: 1;
                border-radius: $radius-rounded;
                transition: all 250ms ease-in-out;
                overflow: hidden;

                span {
                    margin-right: 10px;
                    white-space: nowrap;
                }
            }
        }
    }

    .layout-sidebar__toggle {
        position: absolute;
        top: 23px;
        right: -14px;
        height: 40px;
        width: 40px;
        padding: 0 0 0 24px;
        z-index: -1;
    }
}

// collapsed
.layout-sidebar.is-collapsed {
    width: 90px;

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link) {
                .base-link__text {
                    .link-text {
                        transform: translateX( 0 );
                        opacity: 0;
                    }
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

// color variants
.layout-sidebar.is-default {
    box-shadow: 0 0 10px rgba( $grey, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $grey;

                .base-link__text {
                    .link-icon {
                        background: $grey;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $grey, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $grey, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $grey;
        color: $white;
    }
}

.layout-sidebar.is-primary {
    box-shadow: 0 0 10px rgba( $primary, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $primary;

                .base-link__text {
                    .link-icon {
                        background: $primary;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $primary, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $primary, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $primary;
        color: $white;
    }
}

.layout-sidebar.is-secondary {
    box-shadow: 0 0 10px rgba( $secondary, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $secondary;

                .base-link__text {
                    .link-icon {
                        background: $secondary;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $secondary, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $secondary, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $secondary;
        color: $white;
    }
}

.layout-sidebar.is-tertiary {
    box-shadow: 0 0 10px rgba( $tertiary, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $tertiary;

                .base-link__text {
                    .link-icon {
                        background: $tertiary;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $tertiary, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $tertiary, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $tertiary;
        color: $white;
    }
}

.layout-sidebar.is-link {
    box-shadow: 0 0 10px rgba( $link, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $link;

                .base-link__text {
                    .link-icon {
                        background: $link;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $link, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $link, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $link;
        color: $white;
    }
}

.layout-sidebar.is-info {
    box-shadow: 0 0 10px rgba( $info, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $info;

                .base-link__text {
                    .link-icon {
                        background: $info;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $info, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $info, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $info;
        color: $white;
    }
}

.layout-sidebar.is-success {
    box-shadow: 0 0 10px rgba( $success, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $success;

                .base-link__text {
                    .link-icon {
                        background: $success;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $success, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $success, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $success;
        color: $white;
    }
}

.layout-sidebar.is-warning {
    box-shadow: 0 0 10px rgba( $warning, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $warning;

                .base-link__text {
                    .link-icon {
                        background: $warning;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $warning, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $warning, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $warning;
        color: $white;
    }
}

.layout-sidebar.is-danger {
    box-shadow: 0 0 10px rgba( $danger, 0.2 );

    .layout-sidebar__content {
        .links-container {
            :deep(.base-link.is-active) {
                background: $danger;

                .base-link__text {
                    .link-icon {
                        background: $danger;
                    }
                }
            }

            :deep(.base-link):hover:not(.is-active)::before {
                background: rgba( lighten( $danger, 15% ), 0.2 );
            }
        }
    }

    .layout-sidebar__toggle {
        box-shadow: 2px 1px 6px rgba( $danger, 0.2 ) !important;
    }

    .layout-sidebar__toggle:hover {
        background: $danger;
        color: $white;
    }
}

</style>
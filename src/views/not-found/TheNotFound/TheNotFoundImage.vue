<template>
    <NotFoundImage
        class="not-found__icon"
        :class="[colorClass]" />
</template>

<script>
    import { computed, toRefs } from 'vue';
    import { colorValidator as propUtilsColorValidator } from '@/utils/propValidators';
    import NotFoundImage from '@/assets/404.svg';

    export default {
        name: 'TheNotFoundImage',
        components: {
            NotFoundImage
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

            return {
                colorClass,
            };
        }
    };
</script>

<style lang="scss" scoped>
.not-found__icon.is-default {
    :deep(.svg-icon) {
        fill: $grey;
    }
}

.not-found__icon.is-primary {
    :deep(.svg-icon) {
        fill: $primary;
    }
}

.not-found__icon.is-secondary {
    :deep(.svg-icon) {
        fill: $secondary;
    }
}

.not-found__icon.is-tertiary {
    :deep(.svg-icon) {
        fill: $tertiary;
    }
}

.not-found__icon.is-link {
    :deep(.svg-icon) {
        fill: $link;
    }
}

.not-found__icon.is-info {
    :deep(.svg-icon) {
        fill: $info;
    }
}

.not-found__icon.is-success {
    :deep(.svg-icon) {
        fill: $success;
    }
}

.not-found__icon.is-warning {
    :deep(.svg-icon) {
        fill: $warning;
    }
}

.not-found__icon.is-danger {
    :deep(.svg-icon) {
        fill: $danger;
    }
}
</style>

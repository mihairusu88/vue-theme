<template>
    <div
        class="base-input field control"
        :class="[
            {
                'has-icon': iconLeft || iconRight,
                'has-icons-left': iconLeft,
                'has-icons-right': iconRight,
                'is-loading': loading
            },
            sizeClass
        ]">
        <input
            class="input"
            :class="[colorClass, sizeClass, { 'is-rounded': rounded }]"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled" />
        <span v-if="iconLeft" class="icon is-left" :class="[iconSizeClass]">
            <Icon :class="colorClass" :icon="iconLeft" />
        </span>
        <span v-if="iconRight" class="icon is-right" :class="[iconSizeClass]">
            <Icon :class="colorClass" :icon="iconRight" />
        </span>
    </div>
</template>

<script>
import { computed, toRefs } from 'vue';
import { Icon } from '@iconify/vue';
import {
    colorValidator as propUtilsColorValidator,
    sizeValidator as propUtilsSizeValidator,
} from '@/utils/propValidators';

export default {
    name: 'BaseInput',
    components: {
        Icon
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'default',
            validator: propUtilsColorValidator
        },
        size: {
            type: String,
            default: 'normal',
            validator: propUtilsSizeValidator
        },
        iconLeft: {
            type: String,
            default: null
        },
        iconRight: {
            type: String,
            default: null
        },
        iconSize: {
            type: String,
            default: 'small',
            validator: propUtilsSizeValidator
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        }
    },
    setup( props ) {
        const { color, size, iconSize } = toRefs( props );
        const colorClass = computed( () => {
            return propUtilsColorValidator( color.value ) ? `is-${color.value}` : 'is-default';
        } );
        const sizeClass = computed( () => {
            return propUtilsSizeValidator( size.value ) ? `is-${size.value}` : 'is-normal';
        } );
        const iconSizeClass = computed( () => {
            return propUtilsSizeValidator( iconSize.value ) ? `is-${iconSize.value}` : 'is-normal';
        } );

        return {
            colorClass,
            sizeClass,
            iconSizeClass
        };
    }
};
</script>

<style lang="scss" scoped>
.base-input {
    position: relative;

    .input {
        @include placeholder {
            color: $grey;
            opacity: 1;
        }
    }

    .input:not(:focus) {
        border-color: $grey-light;
    }

    input.is-rounded {
        border-radius: $radius-large;
    }

    input.is-normal {
        height: 40px;
        font-size: 13px;
    }

    input.is-medium {
        height: 48px;
        font-size: 14px;
    }

    input.is-large {
        height: 56px;
        font-size: 20px;
    }
}

.base-input.has-icons-left {
    input.is-normal {
        padding-left: 40px;
    }

    input.is-medium {
        padding-left: 50px;
    }

    input.is-large {
        padding-left: 56px;
    }
}

.base-input.has-icons-right .input {
    input.is-normal {
        padding-right: 40px;
    }

    input.is-medium {
        padding-right: 50px;
    }

    input.is-large {
        padding-right: 56px;
    }
}

.base-input .input.is-secondary:focus {
    border-color: $secondary;
    box-shadow: 0 0 0 0.125em rgba( $secondary, 0.25 );
}

.base-input .input.is-tertiary:focus {
    border-color: $tertiary;
    box-shadow: 0 0 0 0.125em rgba( $tertiary, 0.25 );
}

.base-input.has-icon .icon {
    color: $grey;
}

.base-input.field:not(:last-child) {
    margin-bottom: 8px;
}

.base-input.has-icon .input.is-default:focus ~ .icon {
    color: $grey !important;
}

.base-input.has-icon .input.is-primary:focus ~ .icon {
    color: $primary !important;
}

.base-input.has-icon .input.is-secondary:focus ~ .icon {
    color: $secondary !important;
}

.base-input.has-icon .input.is-tertiary:focus ~ .icon {
    color: $tertiary !important;
}

.base-input.has-icon .input.is-link:focus ~ .icon {
    color: $link !important;
}

.base-input.has-icon .input.is-info:focus ~ .icon {
    color: $info !important;
}

.base-input.has-icon .input.is-success:focus ~ .icon {
    color: $success !important;
}

.base-input.has-icon .input.is-warning:focus ~ .icon {
    color: $warning !important;
}

.base-input.has-icon .input.is-danger:focus ~ .icon {
    color: $danger !important;
}
</style>
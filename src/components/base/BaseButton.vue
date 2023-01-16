<template>
    <button
        class="base-button button"
        :class="[
            colorClass,
            sizeClass,
            fontWeightClass,
            {
                'is-light': light,
                'is-fullwidth': fullwidth,
                'is-outlined': outlined,
                'is-rounded': rounded,
                'is-loading': loading,
                'is-icon': icon,
                'is-circle': circle,
            }
        ]"
        :disabled="disabled"
        @click="onClickButtonDo">
        <span v-if="iconLeft" class="icon" :class="[iconSizeClass]">
            <Icon :class="colorClass" :icon="iconLeft" />
        </span>
        <span v-if="!icon" class="is-flex">
            <slot></slot>
        </span>
        <span v-if="iconRight" class="icon" :class="[iconSizeClass]">
            <Icon :class="colorClass" :icon="iconRight" />
        </span>
    </button>
</template>

<script>
import { computed, toRefs } from 'vue';
import { Icon } from '@iconify/vue';
import {
    buttonColorValidator as propUtilsButtonColorValidator,
    sizeValidator as propUtilsSizeValidator,
    fontWeightValidator as propUtilsFontWeightValidator,
} from '@/utils/propValidators';
import { useRouter } from 'vue-router';

export default {
    name: 'BaseButton',
    components: {
        Icon
    },
    props: {
        color: {
            type: String,
            default: 'default',
            validator: propUtilsButtonColorValidator
        },
        size: {
            type: String,
            default: 'normal',
            validator: propUtilsSizeValidator
        },
        light: {
            type: Boolean,
            default: false
        },
        fullwidth: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        fontWeight: {
            type: String,
            default: 'normal',
            validator: propUtilsFontWeightValidator
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
        },
        icon: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        to: {
            type: Object,
            default: null
        }
    },
    emits: [ 'click' ],
    setup( props, { emit } ) {
        const { color, size, fontWeight, iconSize, to } = toRefs( props );
        const router = useRouter();

        const colorClass = computed( () => {
            return propUtilsButtonColorValidator( color.value ) ? `is-${color.value}` : 'is-default';
        } );
        const sizeClass = computed( () => {
            return propUtilsSizeValidator( size.value ) ? `is-${size.value}` : 'is-normal';
        } );
        const fontWeightClass = computed( () => {
            return propUtilsFontWeightValidator( fontWeight.value ) ?  `has-text-weight-${fontWeight.value}` : 'has-text-weight-normal';
        } );
        const iconSizeClass = computed( () => {
            return propUtilsSizeValidator( iconSize.value ) ?  `is-${iconSize.value}` : 'is-normal';
        } );

        const onClickButtonDo = function( e ) {
            emit( 'click', e );
            
            if ( to.value ) {
                router.push( to.value );
            }
        };

        return {
            colorClass,
            sizeClass,
            fontWeightClass,
            iconSizeClass,
            onClickButtonDo
        };
    }
};
</script>

<style lang="scss" scoped>
.base-button {
    transition: all 250ms $easing;
}

.base-button.button.is-secondary {
    background-color: $secondary;
    color: $white;
    border-color: transparent;

    @include box-shadow($secondary);
}

.base-button.button.is-secondary:hover {
    background-color: darken( $secondary, 5% );
    color: $white;
    border-color: transparent;
}

.base-button.button.is-secondary:focus {
    color: $white;
    border-color: transparent;
}

.base-button.button.is-secondary.is-light {
    background-color: lighten( $secondary, 50% );
    color: $secondary;
}

.base-button.button.is-secondary.is-light.is-hovered,
.base-button.button.is-secondary.is-light:hover {
    background-color: lighten( $secondary, 45% );
    color: $secondary;
    border-color: transparent;
}

.base-button.button.is-secondary.is-light:active {
    background-color: lighten( $secondary, 45% );
    color: $secondary;
    border-color: transparent;
}

.base-button.button.is-secondary.is-light:focus {
    color: $secondary;
    border-color: transparent;
}

.base-button.button.is-secondary.is-outlined {
    background-color: transparent;
    color: $secondary;
    border-color: $secondary;
}

.base-button.button.is-secondary.is-outlined:hover {
    background-color: $secondary;
    color: $white;
    border-color: $secondary;
}

.base-button.button.is-secondary.is-focused:not(:active),
.base-button.button.is-secondary:focus:not(:active) {
    box-shadow: 0 0 0 0.125em rgba( $secondary, 0.25 ) !important;
}

.base-button.button.is-tertiary {
    background-color: $tertiary;
    color: $white;
    border-color: transparent;

    @include box-shadow($tertiary);
}

.base-button.button.is-tertiary:hover {
    background-color: darken( $tertiary, 5% );
    color: $white;
    border-color: transparent;
}

.base-button.button.is-tertiary:focus {
    color: $white;
    border-color: transparent;
}

.base-button.button.is-tertiary.is-light {
    background-color: lighten( $tertiary, 50% );
    color: $tertiary;
}

.base-button.button.is-tertiary.is-light.is-hovered,
.base-button.button.is-tertiary.is-light:hover {
    background-color: lighten( $tertiary, 45% );
    color: $tertiary;
    border-color: transparent;
}

.base-button.button.is-tertiary.is-light:active {
    background-color: lighten( $tertiary, 45% );
    color: $tertiary;
    border-color: transparent;
}

.base-button.button.is-tertiary.is-light:focus {
    color: $tertiary;
    border-color: transparent;
}

.base-button.button.is-tertiary.is-outlined {
    background-color: transparent;
    color: $tertiary;
    border-color: $tertiary;
}

.base-button.button.is-tertiary.is-outlined:hover {
    background-color: $tertiary;
    color: $white;
    border-color: $tertiary;
}

.base-button.button.is-tertiary.is-focused:not(:active),
.base-button.button.is-tertiary:focus:not(:active) {
    box-shadow: 0 0 0 0.125em rgba( $tertiary, 0.25 ) !important;
}

.base-button.button.is-primary {
    @include box-shadow($primary);
}

.base-button.button.is-link {
    @include box-shadow($link);
}

.base-button.button.is-info {
    @include box-shadow($info);
}

.base-button.button.is-success {
    @include box-shadow($success);
}

.base-button.button.is-warning {
    @include box-shadow($warning);
}

.base-button.button.is-danger {
    @include box-shadow($danger);
}

.base-button.button.is-light {
    @include box-shadow($light);
}

.base-button.button.is-dark {
    @include box-shadow($dark);
}

.base-button.button.is-black {
    @include box-shadow($black);
}

.base-button.button.is-large {
    height: 56px;
    font-size: 16px;
}

.base-button.button.is-medium {
    height: 48px;
    font-size: 15px;
}

.base-button.button.is-normal {
    height: 40px;
    font-size: 14px;
}

.base-button.button.is-large.is-icon {
    width: 56px;
}

.base-button.button.is-medium.is-icon {
    width: 48px;
}

.base-button.button.is-normal.is-icon {
    width: 40px;
}

.base-button.button.is-rounded {
    border-radius: $radius-large;
}

.base-button.button.is-circle {
    border-radius: $radius-rounded !important;
}
</style>
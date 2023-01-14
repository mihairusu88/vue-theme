<template>
    <div 
        class="base-card"
        :class="[
            colorClass
        ]">
        <div v-if="$slots['title']" class="base-card__title">
            <slot name="title"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import { computed, toRefs } from 'vue';

export default {
    name: 'BaseCard',
    props: {
        color: {
            type: String,
            default: 'white'
        },
    },
    setup( props ) {
        const { color } = toRefs( props );
        const colorClass = computed( () => {
            return `is-${color.value}`;
        } );

        return {
            colorClass
        };
    }
};
</script>

<style lang="scss" scoped>

.base-card {
    display: block;
    position: relative;
    border: 1px solid $white;
    border-radius: $radius-large;
    outline: none;
    white-space: normal;
    overflow-wrap: break-word;
    text-decoration: none;
    max-width: 100%;
    transition-property: box-shadow, opacity;

    @include box-shadow($primary);

    .base-card__title {
        background: $white;
        border-bottom: 1px solid rgba( $primary, 0.3 );
        border-radius: $radius-large $radius-large 0 0;
    }
}

.base-card.is-white {
    background: $white;
}

.base-card.is-body {
    background: $body;
}
</style>
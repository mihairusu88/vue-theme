<template>
    <div
        v-if="hasImageSrc"
        class="base-image"
        :class="{
            'base-image--is-loaded': isLoaded,
            'base-image--is-error': isError
        }"
        :style="{ width: width, height: height }">
        <div
            class="base-image__image"
            :class="{
                'base-image__image--is-cover': isLoaded && !contain,
                'base-image__image--is-contain': isLoaded && contain,
            }"
            :style="isLoaded && { backgroundImage: backgroundImage }">
            <Icon v-if="isError" class="base-image__image-offline-icon is-primary" icon="mdi:image-off-outline" height="38px" />
        </div>
    </div>
</template>

<script>
    import { onMounted, toRefs, ref, computed } from 'vue';
    import { Icon } from '@iconify/vue';

    export default {
        name: 'BaseImage',
        components: {
            Icon
        },
        props: {
            src: {
                type: String,
                default: null
            },
            contain: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: null
            },
            height: {
                type: String,
                default: null
            }
        },
        setup( props ) {
            const { src } = toRefs( props );

            const hasImageSrc = src.value !== null;
            const isLoaded = ref( false );
            const isError = ref( false );
            const backgroundImage = computed( () => hasImageSrc ? `url(${src.value})` : null );

            const loadImage = () => {
                const image = new Image();
                image.src = src.value;

                image.onload = () => {
                    isLoaded.value = true;
                };
                image.onerror = () => {
                    isError.value = true;
                };
            };

            onMounted( () => {
                loadImage();
            } );

            return {
                hasImageSrc,
                isLoaded,
                isError,
                backgroundImage
            };
        }
    };
</script>

<style lang="scss" scoped>

.base-image {
    display: flex;
    position: relative;
    overflow: hidden;
    flex: 1 0 auto;
    max-width: 100%;

    .base-image__image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        background-repeat: no-repeat;
    }

    .base-image__image.base-image__image--is-cover {
        background-size: cover;
    }

    .base-image__image.base-image__image--is-contain {
        background-size: contain;
    }
}

.base-image.base-image--is-error {
    .base-image__image {
        display: flex;
        background-color: lighten( $grey, 20% );
        align-items: center;
        justify-content: center;

        .base-image__image-offline-icon {
            color: $white;
        }
    }
}
</style>
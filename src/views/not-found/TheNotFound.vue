<template>
    <div class="not-found min-height-screen-100 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <h1
            class="is-size-1 has-text-weight-bold has-text-centered mb-5"
            :class="[`has-text-${color}`]">
            Ooops!
        </h1>
        <h2 class="is-size-5 has-text-weight-medium has-text-black has-text-centered">
            Looks like this page doesn’t exist.
        </h2>
        <TheNotFoundImage :color="color" />
        <div class="not-found__actions is-flex is-justify-content-center width-100">
            <BaseButton
                :color="color"
                size="large"
                font-weight="medium"
                icon-left="mdi:keyboard-backspace"
                outlined
                rounded
                @click="onClickButtonDo">
                Back to Home
            </BaseButton>
        </div>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    import TheNotFoundImage from './TheNotFound/TheNotFoundImage.vue';
    import BaseButton from '@/components/base/BaseButton.vue';

    export default {
        name: 'TheNotFound',
        components: {
            TheNotFoundImage,
            BaseButton
        },
        setup( ) {
            const router = useRouter();
            const color = ref( 'primary' );

            const onClickButtonDo = function() {
                router.push( { name: 'TheHome' } );
            };

            return {
                onClickButtonDo,
                color
            };
        }
    };
</script>

<style lang="scss" scoped>
.not-found {
    .not-found__icon {
        width: 450px;
        max-width: 50%;
        max-height: 350px;
    }

    @include mobile {
        .not-found__icon {
            max-height: 200px;
        }
    }
}
</style>

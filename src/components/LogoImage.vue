<template>
    <router-link class="logo is-inline-block" :to="{ name: 'TheHome' }">
        <figure class="image">
            <img :src="size ==='small' ? LogoImageSmall : LogoImage" />
        </figure>
    </router-link>
</template>

<script>
    import LogoImage from '@/assets/logo.png';
    import LogoImageSmall from '@/assets/logo_small.png';

    export default {
        name: 'LogoImage',
        props: {
            size: {
                type: String,
                default: 'default',
                validator: function ( value ) {
                    return [ 'default', 'small' ].includes( value );
                }
            },
        },
        setup( ) {
            return {
                LogoImage,
                LogoImageSmall
            };
        }
    };
</script>

<style lang="scss" scoped>
    @include mobile {
        .logo {
            max-width: 220px;
        }
    }
</style>
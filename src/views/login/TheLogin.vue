<template>
    <div class="login min-height-screen-100 is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
        <LogoImage />
        <BaseCard class="login__card is-flex is-align-items-center is-justify-content-center">
            <div class="login__card-container is-flex is-flex-direction-column is-align-content-center is-align-items-center is-justify-content-center">
                <div class="is-flex is-flex-direction-column width-100 mb-10">
                    <h5 class="is-size-5 has-text-weight-bold has-text-centered mb-3 has-text-tertiary">
                        Welcome to Tricker
                    </h5>
                    <p class="is-size-7 has-text-weight-normal has-text-centered has-text-grey">
                        Sign in to continue
                    </p>
                </div>
                <form class="width-100">
                    <BaseInput placeholder="Email" size="medium" color="primary" rounded icon-left="mdi:account-outline" />
                    <BaseInput placeholder="Password" type="password" size="medium" color="primary" rounded icon-left="mdi:key-outline" />
                    <div class="is-flex is-justify-content-end pt-2 mb-4">
                        <BaseLink class="is-size-7 has-text-weight-bold has-text-primary" :to="{ name: 'TheForgotPassword' }">
                            Forgot Password?
                        </BaseLink>
                    </div>
                    <div class="actions is-flex width-100">
                        <BaseButton color="primary"
                            size="large"
                            font-weight="bold"
                            rounded
                            fullwidth>
                            Sign In
                        </BaseButton>
                    </div>
                </form>
                <div class="width-100 is-flex is-flex-direction-column is-align-items-center is-justify-content-center mt-6">
                    <p class="is-size-7 has-text-weight-normal has-text-centered has-text-grey mb-3">
                        Don't have a account?
                    </p>
                    <BaseLink class="is-size-6 has-text-weight-bold has-text-primary" :to="{ name: 'TheRegister' }">
                        Sign Up
                    </BaseLink>
                </div>
            </div>
        </BaseCard>
    </div>
</template>

<script>
    import LogoImage from '@/components/LogoImage.vue';
    import BaseCard from '@/components/base/BaseCard.vue';
    import BaseInput from '@/components/base/BaseInput.vue';
    import BaseLink from '@/components/base/BaseLink.vue';
    import BaseButton from '@/components/base/BaseButton.vue';

    export default {
        name: 'TheLogin',
        components: {
            LogoImage,
            BaseCard,
            BaseInput,
            BaseLink,
            BaseButton
        }
    };
</script>

<style lang="scss" scoped>
    .login {
        background-image: url( '@assets/backgrounds/bg_user_auth.png' );
        background-size: cover;
        background-repeat: no-repeat;

        .login__card {
            width: 625px;
            padding: 8px;
            margin-top: 60px;
            min-height: 530px;

            .login__card-container {
                width: 60%;
            }
        }
    }

    @include mobile {
        .login {
            .login__card {
                margin-top: 30px;
                max-width: 90%;
                min-height: 50%;
            }
        }
    }
</style>

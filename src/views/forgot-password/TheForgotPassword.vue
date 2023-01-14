<template>
    <div class="forgot-password min-height-screen-100 is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
        <LogoImage />
        <BaseCard class="forgot-password__card is-flex is-align-items-center is-justify-content-center">
            <div class="forgot-password__card-container is-flex is-flex-direction-column is-align-content-center is-align-items-center is-justify-content-center">
                <div class="is-flex is-flex-direction-column width-100 mb-10">
                    <h5 class="is-size-5 has-text-weight-bold has-text-centered mb-3 has-text-tertiary">
                        Forgot your password?
                    </h5>
                    <p class="is-size-7 has-text-weight-normal has-text-centered has-text-grey">
                        Enter your email address to request a password reset
                    </p>
                </div>
                <form class="width-100">
                    <BaseInput placeholder="Email" size="medium" color="primary" type="email" rounded icon-left="mdi:at" />
                    <div class="actions is-flex width-100">
                        <BaseButton color="primary"
                            size="large"
                            font-weight="bold"
                            rounded
                            fullwidth>
                            Reset Password
                        </BaseButton>
                    </div>
                </form>
                <div class="width-100 is-flex is-flex-direction-column is-align-items-center is-justify-content-center mt-6">
                    <p class="is-flex is-align-items-center is-size-7 has-text-weight-normal has-text-centered has-text-grey mb-3">
                        <span class="is-inline-flex is-align-items-center  mr-2">
                            <Icon icon="mdi:arrow-left-thin" height="38px" />
                            back to
                        </span>
                        <BaseLink class="is-size-6 has-text-weight-bold has-text-primary" :to="{ name: 'TheLogin' }">
                            Login
                        </BaseLink>
                    </p>
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
    import { Icon } from '@iconify/vue';

    export default {
        name: 'TheLogin',
        components: {
            LogoImage,
            BaseCard,
            BaseInput,
            BaseLink,
            BaseButton,
            Icon
        }
    };
</script>

<style lang="scss" scoped>
    .forgot-password {
        background-image: url( '@assets/backgrounds/bg_user_auth.png' );
        background-size: cover;
        background-repeat: no-repeat;

        .forgot-password__card {
            width: 625px;
            padding: 8px;
            margin-top: 60px;
            min-height: 530px;

            .forgot-password__card-container {
                width: 60%;
            }
        }
    }

    @include mobile {
        .forgot-password {
            .forgot-password__card {
                margin-top: 30px;
                max-width: 90%;
                min-height: 50%;
            }
        }
    }
</style>

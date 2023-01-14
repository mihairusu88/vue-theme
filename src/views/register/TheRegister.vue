<template>
    <div class="register min-height-screen-100 is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
        <LogoImage />
        <BaseCard class="register__card is-flex is-align-items-center is-justify-content-center">
            <div class="register__card-container is-flex is-flex-direction-column is-align-content-center is-align-items-center is-justify-content-center">
                <div class="is-flex is-flex-direction-column width-100 mb-10">
                    <h5 class="is-size-5 has-text-weight-bold has-text-centered mb-3 has-text-tertiary">
                        Let’s Get Started
                    </h5>
                    <p class="is-size-7 has-text-weight-normal has-text-centered has-text-grey">
                        Create an new account
                    </p>
                </div>
                <form class="width-100">
                    <BaseInput placeholder="Name" size="medium" color="primary" rounded icon-left="mdi:account-outline" />
                    <BaseInput placeholder="Email" size="medium" color="primary" rounded icon-left="mdi:at" />
                    <BaseInput placeholder="Password" type="password" size="medium" color="primary" rounded icon-left="mdi:key-outline" />
                    <BaseInput placeholder="Confirm Password" type="password" size="medium" color="primary" rounded icon-left="mdi:key-outline" />
                    <div class="actions is-flex width-100">
                        <BaseButton color="primary"
                            size="large"
                            font-weight="bold"
                            rounded
                            fullwidth>
                            Register
                        </BaseButton>
                    </div>
                </form>
                <div class="width-100 is-flex is-flex-direction-column is-align-items-center is-justify-content-center mt-6">
                    <p class="is-size-7 has-text-weight-normal has-text-centered has-text-grey mb-3">
                        Have an account?
                    </p>
                    <BaseLink class="is-size-6 has-text-weight-bold has-text-primary" :to="{ name: 'TheLogin' }">
                        Sign In
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
        name: 'TheRegister',
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
    .register {
        background-image: url( '@assets/backgrounds/bg_user_auth.png' );
        background-size: cover;
        background-repeat: no-repeat;

        .register__card {
            width: 625px;
            padding: 8px;
            margin-top: 60px;
            min-height: 530px;

            .register__card-container {
                width: 60%;
            }
        }
    }

    @include mobile {
        .register {
            .register__card {
                margin-top: 30px;
                max-width: 90%;
                min-height: 60%;
            }
        }
    }
</style>

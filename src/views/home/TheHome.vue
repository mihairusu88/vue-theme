<template>
    <div class="home is-flex is-flex-direction-column is-align-items-center">
        <div class="container">
            <h5 class="is-size-5 has-text-weight-bold has-text-centered my-20 has-text-tertiary width-100">
                Home
            </h5>
            <div class="links is-flex is-flex-grow-1 is-justify-content-space-between mt-16">
                <BaseCard class="is-flex is-flex-grow-1 is-justify-content-center p-15 mx-4">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="medium"
                        rounded
                        font-weight="medium"
                        :to="{ name: 'TheLogin' }">
                        Login
                    </BaseButton>
                </BaseCard>
                <BaseCard class="is-flex is-flex-grow-1 is-justify-content-center p-15 mx-4">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="medium"
                        rounded
                        font-weight="medium"
                        :to="{ name: 'TheRegister' }">
                        Register
                    </BaseButton>
                </BaseCard>
                <BaseCard class="is-flex is-flex-grow-1 is-justify-content-center p-15 mx-4">
                    <BaseButton
                        class="mx-3"
                        color="primary"
                        size="medium"
                        rounded
                        font-weight="medium"
                        :to="{ name: 'TheForgotPassword' }">
                        Forgot Password
                    </BaseButton>
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseCard from '@/components/base/BaseCard.vue';
    import BaseButton from '@/components/base/BaseButton.vue';

    export default {
        name: 'TheHome',
        components: {
            BaseButton,
            BaseCard
        }
    };
</script>

<style lang="scss" scoped>
    .home {
        .container {
            width: 100% !important;
        }
    }
</style>

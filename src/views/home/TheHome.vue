<template>
    <div class="is-flex is-flex-direction-column is-align-items-center">
        <h5 class="is-size-5 has-text-weight-bold has-text-centered mt-16 has-text-tertiary">
            Welcome Home
        </h5>
        <div class="is-flex is-justify-content-space-between mt-16">
            <BaseCard class="is-flex p-15 mx-4">
                <BaseButton
                    class="mx-3"
                    color="primary"
                    size="medium"
                    rounded
                    font-weight="medium"
                    @click="() => $router.push({ name: 'TheLogin' })">
                    Login
                </BaseButton>
            </BaseCard>
            <BaseCard class="is-flex p-15 mx-4">
                <BaseButton
                    class="mx-3"
                    color="primary"
                    size="medium"
                    rounded
                    font-weight="medium"
                    @click="() => $router.push({ name: 'TheRegister' })">
                    Register
                </BaseButton>
            </BaseCard>
            <BaseCard class="is-flex p-15 mx-4">
                <BaseButton
                    class="mx-3"
                    color="primary"
                    size="medium"
                    rounded
                    font-weight="medium"
                    @click="() => $router.push({ name: 'TheForgotPassword' })">
                    Forgot Password
                </BaseButton>
            </BaseCard>
            <BaseCard class="is-flex p-15 mx-4">
                <BaseButton
                    class="mx-3"
                    color="primary"
                    size="medium"
                    rounded
                    font-weight="medium"
                    @click="() => $router.push({ name: 'TheComponents' })">
                    Components
                </BaseButton>
            </BaseCard>
            <BaseCard class="is-flex p-15 mx-4">
                <BaseButton
                    class="mx-3"
                    color="primary"
                    size="medium"
                    rounded
                    font-weight="medium"
                    @click="() => $router.push({ name: 'TheProducts' })">
                    Products
                </BaseButton>
            </BaseCard>
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

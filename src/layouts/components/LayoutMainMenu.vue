<template>
    <nav class="main-menu navbar is-primary">
        <div class="navbar-start ml-auto">
            <BaseLink class="navbar-item" :to="{ name: 'TheHome' }">
                Home
            </BaseLink>
            <BaseLink class="navbar-item" :to="{ name: 'TheLogin' }">
                Login
            </BaseLink>
            <BaseLink class="navbar-item" :to="{ name: 'TheRegister' }">
                Register
            </BaseLink>
            <BaseLink class="navbar-item" :to="{ name: 'TheForgotPassword' }">
                Forgot Password
            </BaseLink>
        </div>
    </nav>
</template>

<script>
import BaseLink from '@/components/base/BaseLink.vue';

export default {
    name: 'LayoutMainMenu',
    components: {
        BaseLink
    }
};
</script>
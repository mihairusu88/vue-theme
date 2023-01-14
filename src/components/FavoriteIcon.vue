<template>
    <Icon v-if="!active" class="favorite-icon" icon="mdi:cards-heart-outline" />
    <Icon v-else class="favorite-icon favorite-icon--active" icon="mdi:cards-heart" />
</template>

<script>
    import { Icon } from '@iconify/vue';

    export default {
        name: 'FavoriteIcon',
        components: {
            Icon
        },
        props: {
            active: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="scss" scoped>
    .favorite-icon--active {
        color: $danger;
    }
</style>
import TheHome from '@/views/home/TheHome.vue';

const TheLogin = () => import( '@/views/login/TheLogin.vue' );
const TheRegister = () => import( '@/views/register/TheRegister.vue' );
const TheForgotPassword = () => import( '@/views/forgot-password/TheForgotPassword.vue' );
const TheComponents = () => import( '@/views/components/TheComponents.vue' );
const TheProducts = () => import( '@/views/products/TheProducts.vue' );
const TheCart = () => import( '@/views/cart/TheCart.vue' );
const TheFavorites = () => import( '@/views/favorites/TheFavorites.vue' );
const TheNotFound = () => import( '@/views/not-found/TheNotFound.vue' );

export default [
    {
        path: '/',
        name: 'TheHome',
        component: TheHome,
        meta: {
            title: 'Tricker',
            layout: 'withMainMenu',
            isPublic: true,
        }
    },
    {
        path: '/login',
        name: 'TheLogin',
        component: TheLogin,
        meta: {
            title: 'Tricker',
            layout: 'withSidebar',
            isPublic: true,
        }
    },
    {
        path: '/register',
        name: 'TheRegister',
        component: TheRegister,
        meta: {
            title: 'Tricker',
            layout: 'withSidebar',
            isPublic: true,
        }
    },
    {
        path: '/forgot-password',
        name: 'TheForgotPassword',
        component: TheForgotPassword,
        meta: {
            title: 'Tricker',
            layout: 'withSidebar',
            isPublic: true,
        }
    },
    {
        path: '/components',
        name: 'TheComponents',
        component: TheComponents,
        meta: {
            title: 'Tricker',
            layout: 'withMainMenu',
            isPublic: true,
        }
    },
    {
        path: '/products',
        name: 'TheProducts',
        component: TheProducts,
        meta: {
            title: 'Tricker',
            layout: 'withMainMenu',
            isPublic: true,
        }
    },
    {
        path: '/cart',
        name: 'TheCart',
        component: TheCart,
        meta: {
            title: 'Tricker',
            layout: 'withMainMenu',
            isPublic: true,
        }
    },
    {
        path: '/favorites',
        name: 'TheFavorites',
        component: TheFavorites,
        meta: {
            title: 'Tricker',
            layout: 'withMainMenu',
            isPublic: true,
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'TheNotFound',
        component: TheNotFound,
        meta: {
            title: 'Tricker',
            layout: 'blank',
            isPublic: true,
        }
    },
];

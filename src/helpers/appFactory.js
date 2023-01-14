import { createApp } from 'vue';
import App from '@/App.vue';
import '@/sass/main.scss';
import { routerFactory } from './index';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import LayoutBlank from '@/layouts/LayoutBlank.vue';
import LayoutWithSidebar from '@/layouts/LayoutWithSidebar.vue';

export default {
    create: ( ) => {
        const router = routerFactory.create();
        const app = createApp( App );

        app.component( 'LayoutBlank', LayoutBlank );
        app.component( 'LayoutDefault', LayoutDefault );
        app.component( 'LayoutWithSidebar', LayoutWithSidebar );

        app.use( router );

        app.mount( '#app' );
    }
};

<template>
    <div class="products is-flex is-flex-wrap-wrap is-justify-content-center">
        <h5 class="is-size-5 has-text-weight-bold has-text-centered my-20 has-text-tertiary width-100">
            Products
        </h5>
        <div class="container">
            <div class="columns mb-5 is-flex is-flex-wrap-wrap is-justify-content-space-between width-100">
                <div v-for="(product, index) in products" :key="index" class="column is-one-third">
                    <ProductCardVariant1
                        :item="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import ProductCardVariant1 from '@/components/ProductCardVariant1.vue';

    export default {
        name: 'TheProducts',
        components: {
            ProductCardVariant1
        },
        setup( ) {
            const products = ref( [
                {
                    id: 1,
                    name: 'Product 1',
                    price: '$10.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: true,
                },
                {
                    id: 2,
                    name: 'Product 2',
                    price: '$20.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 3,
                    name: 'Product 3',
                    price: '$30.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1632633173522-47456de71b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 4,
                    name: 'Product 4',
                    price: '$40.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1635821410140-fae41b3a0b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1635821410884-b84e964902c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1635821412073-02e4d7a8d339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1635821410604-519920657313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHByb2R1Y3R8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 5,
                    name: 'Product 5',
                    price: '$50.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1635821412043-fbf6805179d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwcm9kdWN0fGVufDB8fDB8YmxhY2tfYW5kX3doaXRlfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 6,
                    name: 'Product 6',
                    price: '$60.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIxfHxwcm9kdWN0fGVufDB8fDB8YmxhY2tfYW5kX3doaXRlfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 7,
                    name: 'Product 7',
                    price: '$70.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1657734240334-b13dfc3f6c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdhbWluZ3xlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1657734240326-8f2ab858a2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGdhbWluZ3xlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 8,
                    name: 'Product 8',
                    price: '$80.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1658070429465-848c0796abf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGdhbWluZ3xlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60',
                        'https://images.unsplash.com/photo-1658070429427-d46fbd8c20b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGdhbWluZ3xlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 9,
                    name: 'Product 9',
                    price: '$90.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvcnxlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 10,
                    name: 'Product 10',
                    price: '$100.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1562075950-23ba332df71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGVsZWN0cm9uaWN8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 11,
                    name: 'Product 11',
                    price: '$110.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cm9uaWN8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
                {
                    id: 12,
                    name: 'Product 12',
                    price: '$120.00',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    images: [
                        'https://images.unsplash.com/photo-1564518384646-b72509b610b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDMyfHxlbGVjdHJvbmljfGVufDB8fDB8YmxhY2tfYW5kX3doaXRlfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    ],
                    favorite: false,
                },
            ] );
            return {
                products
            };
        }
    };
</script>

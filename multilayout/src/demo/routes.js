import { DefaultLayout, AlternateLayout } from './layouts'

import { Home, About, Product } from './components'

export default [
    {
        path: '/',
        exact: true,
        layout: DefaultLayout,
        component: Home,
        name: '/'
    },
    {
        path: '/home',
        layout: AlternateLayout,
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        layout: DefaultLayout,
        component: About,
        name: 'About'
    },
    {
        path: '/product',
        layout: DefaultLayout,
        component: Product,
        name: 'Product',
        route: [
            {},
            {}
        ]
    }
]
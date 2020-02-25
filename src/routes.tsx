import React, { lazy } from "react";

const Bus = lazy(() => import('./pages/shop/bus.component'));
const Cart = lazy(() => import('./pages/shop/cart.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopContainer = lazy(() => import('./pages/shop/shop.container'));
const AddressChangeContainer = lazy(() => import('./pages/address-change/address-change.container'));

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: '/address_change',
        exact: true,
        component: AddressChangeContainer
    },

    {
        path: "/shop",
        component: ShopContainer,
        routes: [
            {
                path: "/shop/bus",
                component: Bus
            },
            {
                path: "/shop/cart",
                component: Cart
            }
        ]
    }
];




export { routes as default }
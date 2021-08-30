const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: 'login',
                component: () =>
                    import ('src/pages/LoginPage.vue')
            },
            {
                path: 'signUp',
                component: () =>
                    import ('src/pages/SignUpPage.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes
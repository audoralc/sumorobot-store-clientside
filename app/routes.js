const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
       {
        path: '/about',
        name: 'about',
        getComponent(nextState, comMod) {
          import('containers/About')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
        {
         path: '/contact',
         name: 'contact',
         getComponent(nextState, comMod) {
           import('containers/ContactUs')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
         {
          path: '/all-products',
          name: 'all-products',
          getComponent(nextState, comMod) {
            import('containers/AllProductsPage')
              .then(loadModule(comMod))
              .catch(errorLoading);
          },
        },
       {
        path: '/cart',
        name: 'cart',
        getComponent(nextState, comMod) {
          import('containers/cart')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },

        {
         path: '/checkout',
         name: 'checkout',
         getComponent(nextState, comMod) {
           import('containers/Checkout')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
        {
         path: '/news',
         name: 'news',
         getComponent(nextState, comMod) {
           import('containers/News')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}

export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('auth', {
            url: '/auth',
            templateUrl: 'app/auth/auth.html',
            controller: 'AuthController',
            controllerAs: 'auth'
        })
        .state('map', {
            url: '/map',
            templateUrl: 'app/map/map.html',
            controller: 'MapController',
            controllerAs: 'map'
        })
        .state('activity', {
            url: '/activity',
            templateUrl: 'app/activity/activity.html',
            controller: 'ActivityController',
            controllerAs: 'activity'
        });

    $urlRouterProvider.otherwise('/');
}

 enos.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'index.html',
                controller  : 'IndexController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'SiteSnapshotController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
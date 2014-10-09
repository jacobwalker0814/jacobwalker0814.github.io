// Hook in angular stuff
var app = angular.module('main', []);

// Routes
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {controller: 'HomeCtrl', templateUrl: '/views/home.html'})
        .when("/about", {controller: 'AboutCtrl', templateUrl: '/views/about.html'})
        .when("/portfolio", {controller: 'PortfolioCtrl', templateUrl: '/views/portfolio.html'})
        .when("/portfolio/:id", {controller: 'PortfolioCtrl', templateUrl: '/views/portfolio.html'})
        .when("/blog", {controller: 'BlogCtrl', templateUrl: '/views/blog.html'})
        .when("/blog/:id", {controller: 'BlogCtrl', templateUrl: '/views/blog-post.html'})
});

'use strict';

/**
 * @ngdoc overview
 * @name angularTrainingApp
 * @description
 * # angularTrainingApp
 *
 * Main module of the application.
 */
var app = angular.module('angularTrainingApp', [/*'myApp.filters', 'myApp.services', 'myApp.directives'*/]);
    /*.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('#/modal', {
                templateUrl: 'app/newPost',
                controller: NewPostCtrl
            }).
            when('/readPost/:id', {
             templateUrl: 'partials/readPost',
             controller: ReadPostCtrl
             }).
             when('/editPost/:id', {
             templateUrl: 'partials/editPost',
             controller: EditPostCtrl
             }).
             when('/deletePost/:id', {
             templateUrl: 'partials/deletePost',
             controller: DeletePostCtrl
             }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);*/
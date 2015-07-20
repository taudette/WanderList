'use strict';

angular.module('wanderApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'app/new/new.html',
        controller: 'NewCtrl'
      });
  });

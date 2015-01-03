'use strict';
/*global angular*/
angular.module('animuterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        authenticate: true
      });
  });

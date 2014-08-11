'use strict';

angular.module('animuterApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.shows = [];

    $http.get('/api/shows').success(function(shows) {
      $scope.shows = shows;
      socket.syncUpdates('show', $scope.shows);
    });

    $scope.addShow = function() {
      if($scope.newShow === '') {
        return;
      }
      $http.post('/api/shows', { name: $scope.newShow });
      $scope.newShow = '';
    };

    $scope.deleteShow = function(show) {
      $http.delete('/api/shows/' + show._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('show');
    });
  });
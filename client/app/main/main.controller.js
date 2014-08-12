'use strict';
/*global angular*/
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
      console.log($scope.newShow.SeriesName);
      $http.post('/api/shows', { name: $scope.newShow.SeriesName });
      $scope.newShow = '';
    };

    $scope.deleteShow = function(show) {
      $http.delete('/api/shows/' + show._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('show');
    });
    
    // Typeahead
    //$scope.selected = undefined;
    $scope.getTVDBShows = function(val) {
      return $http.get('http://animuter-c9-kariudo.c9.io/api/shows/tvdb/'+val)
        .then(function(res){
          var tvdbShows = [];
          if (res.data=='null') return [];
          if (!res.data.SeriesName) {
            angular.forEach(res.data, function(showResult){
              console.log(showResult.SeriesName);
              tvdbShows.push(showResult);
            });
          } else {
            tvdbShows.push(res.data);
          }
          return tvdbShows;
      });
    };
    
    $scope.getTVDBDetail = function (id) {
      return $http.get('http://animuter-c9-kariudo.c9.io/api/shows/tvdb/detail/'+id)
        .then(function (res) {
          return res.data;
        });
    };
  
  });

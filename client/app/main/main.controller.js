'use strict';
/*global angular*/
angular.module('animuterApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.shows = [];
    //$scope.showDetail = {};
    $scope.$watch('newShow', function() {
      if ($scope.newShow !== undefined && $scope.newShow.SeriesName) { 
        // if a show has been selected a name should be defined, get detail on series
        $scope.getTVDBDetail($scope.newShow.id);
      };
    });

    $http.get('/api/shows').success(function(shows) {
      $scope.shows = shows;
      socket.syncUpdates('show', $scope.shows);
    });

    $scope.addShow = function() {
      if($scope.newShow === '') {
        return;
      }
      // save just the ID, let the serve pull the rest of the data to match that id to save time client-side
      //$http.post('/api/shows', { id: $scope.newShow.id });
      $http.post('/api/shows', $scope.showDetail);
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
        .then(function (res) {
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
      $scope.safeToLoad = false;
      return $http.get('http://animuter-c9-kariudo.c9.io/api/shows/tvdb/detail/'+id)
        .then(function (res) {
          var details = res.data;
          $scope.showDetail = details;
          // fine touches
          $scope.genres = $scope.splitPipes(details.Genre);
          $scope.showDetail.Genre = $scope.genres;
          $scope.showDetail.Actors = $scope.splitPipes(details.Actors);
          //console.log($scope.genres);
          // setTimeout(function () {
          //   console.log('should be safe...');
          //   $scope.safeToLoad = true;
            $scope.bannerImg = '/assets/cache/'+details.banner;
          //   console.log($scope.bannerImg);
          // }, 2000);
        });
    };
  
    $scope.splitPipes = function (str) {
      if(str && str.length > 0) {
        var re = /\|(.*)\|/; 
        var subst = '$1'; 
        str = str.replace(re, subst);
        return str.split("|");
      }
    }
  });

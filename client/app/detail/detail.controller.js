'use strict';

angular.module('animuterApp')
  .controller('DetailCtrl', function ($scope,$stateParams, $http, $sce) {
    $scope.message = 'Hello';
    $scope.seriesid = $stateParams.id;
    $scope.torrentSort = '';
    $scope.reverse = false;
    $scope.torrentTableHeaders = [
      {label:"Name", val:'name'},
      {label:"Tag", val:'releaseTag'},
      {label:"Resolution", val:'resolution'},
      {label:"HD", val:"HD"},
      {label:"<i class=\"fa fa-floppy-o\"></i>", val:"size"},
      {label:"<i class=\"fa fa-download\"></i>", val:"downloads"},
      {label:"<i class=\"fa fa-arrow-circle-up\"></i>", val:"seeds"},
      {label:"<i class=\"fa fa-arrow-circle-down\"></i>", val:"leeches"}
    ];

    $scope.getHeaderLabel = function(index) {
      return $sce.trustAsHtml($scope.torrentTableHeaders[index].label);
    }

    $scope.getShow = function(id) {
      return $http.get('/api/shows/' + id);
    };

    $scope.getShow($scope.seriesid)
      .success(function(data){
        console.log(data);
        $scope.show = data;
        $scope.show.dateAired = new Date(data.FirstAired);
        $scope.show.yearAired = $scope.show.dateAired.getUTCFullYear();
        $scope.show.season = $scope.dateToSeason($scope.show.dateAired);
        $scope.heroBackground = {'background' : "url('/assets/cache/" + data.fanart + "')"};
        $scope.bannerImg = "/assets/cache/" + data.banner;
        loadTorrents(data.SeriesName); // TODO - need an option for this to be overridden by a "search title" parameter in the object model
      });

    $scope.dateToSeason = function(airDate) {
      var month = airDate.getUTCMonth(),
          season = "";

      switch(month) {
        case 1:
        case 2:
        case 3:
              season = "Winter";
              break;
        case 4:
        case 5:
        case 6:
              season = "Spring";
              break;
        case 7:
        case 8:
        case 9:
              season = "Summer";
              break;
        case 10:
        case 11:
        case 12:
              season = "Fall";
              break;
      }

      return season;
    }

    var loadTorrents = function(searchTerm) {
      var result = $http.get('/api/torrents/find/'+ searchTerm)
        .success(function(data){
          $scope.torrentCount = data.count;
          $scope.torrents = data.results;
        })
        .error(function(err){
          console.warn(err);
        });

      return result;
    }

    $scope.sortBy = function(col) {
      console.log("Resorting table by " + col);
      $scope.torrentSort = col;
      $scope.reverse = !$scope.reverse;
    }

  });

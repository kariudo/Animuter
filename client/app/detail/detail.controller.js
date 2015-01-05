'use strict';

angular.module('animuterApp')
  .controller('DetailCtrl', function ($scope,$stateParams, $http, $sce, $timeout) {
    $scope.message = 'Hello';
    $scope.seriesid = $stateParams.id;
    $scope.torrentSort = '';
    $scope.reverse = false;
    $scope.torrentTableHeaders = [
      {label:"Name", val:'name'},
      {label:"<i class=\"fa fa-group\"></i>", val:'releaseTag'},
      {label:"<i class=\"fa fa-desktop\"></i>", val:'resolution', style:{'text-align':'center'}},
      {label:"HD", val:"HD", style:{'text-align':'center'}},
      {label:"<i class=\"fa fa-floppy-o\"></i>", val:"size", style:{'text-align':'center'}},
      {label:"<i class=\"fa fa-download\"></i>", val:"downloads", style:{'text-align':'center'}},
      {label:"<i class=\"fa fa-arrow-circle-up\"></i>", val:"seeds", style:{'text-align':'center'}},
      {label:"<i class=\"fa fa-arrow-circle-down\"></i>", val:"leeches", style:{'text-align':'center'}}
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
        loadTorrents(); // TODO - need an option for this to be overridden by a "search title" parameter in the object model
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
    };

    var loadTorrents = function() {
      var options = $scope.show.torrentOptions || {};
      var searchTerm = options.name || $scope.show.SeriesName;
      if(options.resolution) searchTerm += " " + options.resolution;
      if(options.tag) searchTerm += " " + options.tag;
      console.log('Searching for "' + searchTerm + '" torrents.');
      var result = $http.get('/api/torrents/find/'+ searchTerm)
        .success(function(data){
          $scope.torrentCount = data.count;
          $scope.torrents = data.results;
        })
        .error(function(err){
          console.warn(err);
        });

      return result;
    };

    $scope.sortBy = function(col) {
      console.log("Resorting table by " + col);
      $scope.torrentSort = col;
      $scope.reverse = !$scope.reverse;
    };

    $scope.updateTorrentSearch = function () {
      var startTime =  new Date().getTime();
      $scope.updatingSearch = true;
      return $http.put('/api/shows/' + $scope.show._id, {
        torrentOptions:$scope.show.torrentOptions
      }).success(function() {
        console.log($scope.show.SeriesName + " torrent options updated.");
        var elapsedTime = (new Date().getTime() - startTime);
        if (elapsedTime >= 1000) {
          $scope.updatingSearch = false;
        } else {
          $timeout(function () {
            $scope.updatingSearch = false;
          }, (1000 - elapsedTime));
        }
        loadTorrents();
      }).error(function(err){
        console.warn(err);
        $scope.updatingSearch = false;
      });
    };

  });

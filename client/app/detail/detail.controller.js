'use strict';

angular.module('animuterApp')
  .controller('DetailCtrl', function ($scope,$stateParams, $http) {
    $scope.message = 'Hello';
    $scope.seriesid = $stateParams.id;

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



  });

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

      } else if ($scope.newShow !== undefined && !$scope.newShow.SeriesName) {
        // do this if theres a show name but not matched series.
        // clear out show detail
        $scope.showDetail = '';
        $scope.fanartBackground ='';

      }
    });

    $scope.$watch('showDetail', function(){
      if($scope.showDetail && $scope.showDetail.fanart) {
        // set our background fanart up
        var img = new Image();
        img.src = '/assets/cache/' + $scope.showDetail.fanart;
        console.log('loading background image');
        var int = setInterval(function() {
          if(img.complete){
            clearInterval(int);
            $scope.fanartBackground = 'url('+img.src+')';
            console.log('background image loaded');
          }
        }, 50);
      }
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
      // also clear out the details
      $scope.showDetail = '';
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
          $scope.noBanner = (details.banner === null) ? true : false;
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
    
    // Setup some data for testing UI without running search.
    $scope.clearTestData = function () {
      $scope.showDetail = '';
      $scope.newShow = '';
    }
    
    $scope.setTestData = function () {
      $scope.newShow = {
        "seriesid": "261862",
        "language": "en",
        "SeriesName": "Love, Chunibyo & Other Delusions",
        "AliasNames": "Chu-2 Byou demo Koi ga Shitai!|Chuunibyo|Chuunibyou demo Koi ga Shitai!|Love, Chunibyo & Other Delusions|Regardless of My Adolescent Delusions of Grandeur, I Want a Date!|Even People with Adolescent Delusions of Grandeur Want To Experience Love!|Chu2Koi|Love, Chunibyo and Other Delusions|Chuunibyou demo Koi ga Shitai! Ren|Love, Chunibyo and Other Delusions! Heart Throb",
        "banner": "graphical/261862-g.jpg",
        "Overview": "So let me tell you my unfortunate story. My name is Yuuta and when I was in middle school I had teenage delusions of grandeur. But I graduated from my dark past in middle school, and was on my way to sail smoothly through high school. That should have been the end of it, but there was an accident… which I kinda expected would happen. And because of that accident, I’ve now been forced into a contract with Rikka, another victim of teenage delusions of grandeur, and now she has messed up my life! Stop encouraging my teenage delusions of grandeur!!",
        "FirstAired": "2012-10-04",
        "Network": "Tokyo Broadcasting System",
        "IMDB_ID": "tt2321542",
        "id": "261862"
      }
    }
  });
  // outside of controller
    var imgError = function (image) {
      setTimeout(function() {
        image.onerror = "";
        var preSrc = image.src;
        image.src = preSrc;
        console.log('Reloading failed image. '+image.src)
        return true;
      }, 1000);
    }
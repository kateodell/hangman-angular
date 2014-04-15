'use strict';

/* Controllers */

angular.module('hangman.controllers', []).
  controller('GameController', ['$scope', '$http', function($scope, $http) {

    $scope.startNewGame = function(){
        console.log("creating game...")
        $http.jsonp('http://hangman.coursera.org/hangman/game?callback=JSON_CALLBACK',
          { params: {
              data: {"email": "kate.m.odell@gmail.com"}
            }
          })
          .success(function(data) {
            $scope.gameData = data;
            console.log($scope.gameData);
            console.log("created game with key " + $scope.gameData.game_key)
          })
          .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    $scope.makeGuess = function(letter) {

      console.log("guessing: " + letter);
      $http.jsonp("http://hangman.coursera.org/hangman/game/" + $scope.gameData.game_key + "?callback=JSON_CALLBACK",
        { params: {
            data: {"guess": letter}
          }
        })
        .success(function(data) {
      		$scope.gameData = data;
      		console.log($scope.gameData);
          $scope.checkGameOver();
      })
        .error(function(data) {
      	console.log('Error: ' + data);
      });
    };

    $scope.noCurrentGame = function() {
      return $scope.gameData == null || $scope.gameData.state != 'alive';
    };
  }]);

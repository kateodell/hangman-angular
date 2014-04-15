'use strict';

/* Controllers */

angular.module('hangman.controllers', []).
  controller('GameController', ['$scope', '$http', function($scope, $http) {

    $scope.startNewGame = function(){
        $http.jsonp('http://hangman.coursera.org/hangman/game?callback=JSON_CALLBACK',
          { params: {
              data: {"email": "kate.m.odell@gmail.com"}
            }
          })
          .success(function(data) {
            $scope.gameData = data;
          })
          .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    $scope.makeGuess = function(letter) {
      if(letter && letter.match(/[a-zA-Z]+/)){
        $http.jsonp("http://hangman.coursera.org/hangman/game/" + $scope.gameData.game_key + "?callback=JSON_CALLBACK",
          { params: {
              data: {"guess": letter}
            }
          })
          .success(function(data) {
            $scope.gameData = data;
        })
          .error(function(data) {
            console.log('Error: ' + data);
        });
      } else {
        alert ("You must enter a single letter (a-z)!")
      }
    };
  }]);

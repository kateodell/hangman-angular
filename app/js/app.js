'use strict';


// Declare app level module which depends on filters, and services
angular.module('hangman', [
  'ngRoute',
  'hangman.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'GameController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

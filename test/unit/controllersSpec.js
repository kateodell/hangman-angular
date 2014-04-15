'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('hangman.controllers'));


  it('should create a new game if there is no game data', inject(function($controller) {
    //spec body
    var gameController = $controller('GameController');
    expect(gameController).toBeDefined();
    expect(gameController.startNewGame).toBeDefined();
    gameController.startNewGame()
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('MyCtrl2');
    expect(myCtrl2).toBeDefined();
  }));
});

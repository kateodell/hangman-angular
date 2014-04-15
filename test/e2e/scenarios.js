'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('hangman', function() {
  //
  // var httpBackendMock = function() {
  //   angular.module('httpBackendMock', ['hangman', 'ngMockE2E'])
  //     .run(function($httpBackend) {
  //       $httpBackend.whenJSONP('http://hangman.coursera.org/hangman/game?callback=JSON_CALLBACK')
  //         .respond(function(method, url, data, headers) {
  //           return {
  //             "game_key" : "5KGg9aham6LvcFyH6yUzV9YIhWlcqDFz",
  //             "phrase" : "______ _______ ___ ______ ______",
  //             "state" : "alive",
  //             "num_tries_left" : "5"
  //           };
  //       });
  //     })
  // };
  //
  // protractor.getInstance().addMockModule('httpBackendMock', httpBackendMock);
  //
  // browser.get('index.html');
  //
  // it('should automatically redirect to / when location hash/fragment is empty', function() {
  //   expect(browser.getLocationAbsUrl()).toMatch("/");
  // });
  //
  // describe('/', function() {
  //
  //   beforeEach(function() {
  //     browser.get('index.html#/');
  //   });
  //
  //   it('should render hangman when user navigates to /', function() {
  //     expect(element.all(by.css('[ng-view] button')).first().getText()).
  //       toMatch(/Start New Game/);
  //   });
  //
  //   it('should show the phrase with underscores', function(){
  //     var button = element.all(by.id('start-game')).first();
  //     button.click();
  //     expect(element.all(by.css('.phrase')).first().getText()).toMatch(/______ _/);
  //
  //     var guess = element(by.id('guess')).first();
  //     guess.sendKeys('e');
  //     var guess_button = element(by.id('make-guess')).first();
  //     // need to finish testing flow...
  //   });
  // });
});

'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('teamTmntApp'));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.awesomeThings = [2, 3, 4]
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope,
      team: [{ team: 'member' }]
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

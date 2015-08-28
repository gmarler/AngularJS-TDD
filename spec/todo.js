describe('TODO List Tests', function() {
  // scope - hold items on the controller
  var scope = {};

  beforeEach(function() {
    module('todo');
    // inject - access angular controller
    inject(function($controller) {
      // $controller - initialize controller with test scope
      $controller('TodoController',
        { $scope:scope } );
    });
  });

  it('defines a list object', function() {
    expect(scope.list).toBeDefined();
  });

  it('defines list element #1', function() {
    expect(scope.list[0]).toEqual('test');
  });

  it('defines list element #2', function() {
    expect(scope.list[1]).toEqual('execute');
  });

  it('defines list element #3', function () {
    expect(scope.list[2]).toEqual('refactor');
  });

  describe('', function () {

    beforeEach(function () {
      scope.add('repeat');
    });

    it('adds item to last item in list', function () {
      var lastIndexOfList = scope.list.length - 1;
      expect(scope.list[lastIndexOfList]).toEqual('repeat');
    });

  });

});
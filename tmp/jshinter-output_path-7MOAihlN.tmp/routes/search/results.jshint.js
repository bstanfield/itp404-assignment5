QUnit.module('JSHint | routes/search/results.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/search/results.js should pass jshint.\nroutes/search/results.js: line 10, col 9, \'url\' is already defined.\nroutes/search/results.js: line 11, col 19, \'$\' is not defined.\n\n2 errors');
});

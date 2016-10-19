QUnit.module('JSHint | routes/artists.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/artists.js should pass jshint.\nroutes/artists.js: line 8, col 19, \'params\' is defined but never used.\nroutes/artists.js: line 10, col 19, \'$\' is not defined.\n\n2 errors');
});

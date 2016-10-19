define('itp404/routes/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      document.title = "Results";
    },
    model: function model(params) {
      console.log(params);
      var url = 'https://itunes.apple.com/search?term=' + params.term + '&callback=?';
      var url = 'https://itunes.apple.com/search?term=' + params.term + '&callback=?';
      var promise = $.getJSON(url);
      return promise;
    },
    afterModel: function afterModel(model) {
      console.log(model);
    }
  });
});
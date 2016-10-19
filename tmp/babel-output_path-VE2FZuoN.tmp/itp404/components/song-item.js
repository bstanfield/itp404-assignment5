define('itp404/components/song-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagname: 'li',
    classNames: ['song'],
    isPopular: _ember['default'].computed('song.playCount', function () {
      if (this.get('song.playCount') >= '20') {
        return true;
      } else {
        return false;
      }
    }),
    isExpensive: _ember['default'].computed('song.price', function () {
      if (this.get('song.price') >= 1) {
        return true;
      } else {
        return false;
      }
    })
  });
});
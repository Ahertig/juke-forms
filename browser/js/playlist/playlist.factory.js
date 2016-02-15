juke.factory('PlaylistFactory', function($http, SongFactory) {

  // make a cache of all playlists
  // scope will acess the playlists
  Factory = {};

  var playlists = [];

  Factory.create = function(data) {
      
      return $http.post('/api/playlists', data)
        .then(function(res) { 
          playlists.push(res.data);
          return res.data;
        });
    }

  Factory.fetchById = function(id) {
    return $http.get('/api/playlists/' + id)
    .then(function(res) {
      return res.data;
    })
    .then(function(playlist) {
      if (playlist.songs) playlist.songs = playlist.songs.map(SongFactory.convert);
      return playlist;
    });
  }

  Factory.fetchAll = function() {
      return $http.get('/api/playlists')
      .then(function (res) { 
        angular.copy(res.data, playlists)
        return playlists;
      });
    }

  Factory.addSong = function(id, song) {
    return $http
      .post('/api/playlists/' + id + '/songs', {song: song})
      .then(function(song) { 
        return song;
      });
  };

  Factory.getSongs = function(id) {
    return PlaylistFactory.fetchById($stateParams.playlistId)
    .then(function(playlist) {
      playlist.songs = playlist.songs.map(SongFactory.convert);
      return playlist.songs();
    })
  }


  return Factory;
});
'use strict'

juke.config(function($stateProvider) {
  $stateProvider.state('playlists', {
    url: '/playlists',
    templateUrl: '/js/playlist/templates/playlists.html',
    controller: 'PlaylistsCtrl',
    resolve: {
      playlists: function(PlaylistFactory) {
        return PlaylistFactory.fetchAll();
      }
    }
  })
  .state('playlist', {
    url: '/playlist/:playlistId',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      playlist: function(PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.playlistId);
      },
      allSongs: function(SongFactory) {
        return SongFactory.fetchAll();
      }
    }
  });
}) 
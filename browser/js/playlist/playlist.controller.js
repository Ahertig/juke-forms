juke.controller('PlaylistsCtrl', function($scope, PlaylistFactory, playlists, $state) {
  $scope.sendPlaylist = function(playlistData) {
    PlaylistFactory.create(playlistData).then(function(playlist) { 
      // $scope.playlistName = null; 
      $state.go('playlist', {playlistId: playlist._id});
    }); 
  }  
});

juke.controller('PlaylistCtrl', function($scope, playlist, allSongs, PlaylistFactory, SongFactory, PlayerFactory) {

  $scope.playlist = playlist;

  $scope.allSongs = allSongs;

  $scope.addSong = function(id, song) {
    PlaylistFactory.addSong(id, song)
    .then(function() { 
      return PlaylistFactory.fetchById($scope.playlist._id) 
    })
    .then(function(playlist) {
      $scope.playlist = playlist;
      $scope.songToAdd = null;
    });

  }

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});
juke.controller('PlaylistsCtrl', function($scope, PlaylistFactory, playlists, $state) {
  $scope.sendPlaylist = function(playlistData) {
    PlaylistFactory.create(playlistData).then(function(playlist) { 
      // $scope.playlistName = null; 
      $state.go('playlist', {playlistId: playlist._id});
    }); 
  }  
});

juke.controller('PlaylistCtrl', function($scope, playlist, allSongs, PlaylistFactory) {

  $scope.playlist = playlist;
  $scope.allSongs = allSongs;

  $scope.addSong = PlaylistFactory.addSong;

});
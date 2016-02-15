juke.controller('PlaylistCtrl', function($scope, PlaylistFactory, playlists) {
  $scope.sendPlaylist = function(playlistData) {
    PlaylistFactory.create(playlistData).then(function() { $scope.playlistName = null; }); 
  }

  // $scope.playlists = playlists;
  
});
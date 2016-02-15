juke.factory('PlaylistFactory', function($http) {
  return {
    create: function(data) {
      return $http.post('/api/playlists', data)
        .then(function(res) { return res.data });
    }
  }
});
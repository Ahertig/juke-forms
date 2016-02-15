juke.factory('PlaylistFactory', function($http) {

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

  Factory.fetchAll = function() {
      return $http.get('/api/playlists').then(function (res) { return res.data; });
    }

  return Factory;
});
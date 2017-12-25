angular.module('myApp').factory('responseUtility', ['$http', '$q', 'CustomRecord',
    function($http, $q, CustomRecord) {
        var responseUtility = {
            _pool: {},
            _retrieveInstance: function(objectId, objectData) {
                var instance = this._pool[objectId];

                if (instance) {
                    instance.setData(objectData);
                } else {
                    instance = new CustomRecord(objectData);
                    this._pool[objectId] = instance;
                }

                return instance;
            },
            _search: function(objectId) {
                return this._pool[objectId];
            },
            _load: function(objectId) {},

            getObject: function(objectId) {

                var object = this._search(objectId);
                if (object) {
                    return object;
                } else {
                    console.log('object not available hence returning null');
                }

            },

            getAllobjects: function() {
                var objects = [];
                for (var objectID in this._pool) {
                    if (objectID != 'url') {
                        objects.push(this._pool[objectID]);
                    }
                }
                return objects;
            },

            getNews: function() {
                var scope = this;

                var deferred = $q.defer();

                var newsApiUrl = 'https://newsapi.org/v2/top-headlines?' +
                'sources=bbc-news&' +
                'apiKey=780d5accd492425784374431fcc45656';
            
                $http.get(newsApiUrl).then(function(objectsArray, status, headers, config) {

                    deferred.resolve(objectsArray);

                }, function(data, status, headers, config) {
                    console.log(data);
                    $q.reject( 'Something went wrong' );
                });

                return deferred.promise;
            }

        };

        return responseUtility;
    }
]);
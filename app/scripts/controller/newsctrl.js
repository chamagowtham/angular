'use strict';

angular.module('myApp').controller('newsCtrl', ['$scope', '$http', '$rootScope', '$state', '$controller', 'responseUtility',
    function($scope, $http, $rootScope, $state, $controller, responseUtility) {
      console.log('cool, now inside news controller');

      responseUtility.getNews().then(function(response) {    
        $scope.news = response.data.articles;

        $scope.gridOptions = {
          dataSource: $scope.news,
          bindingOptions: {
              filterRow: 'filterRow',
              headerFilter: 'headerFilter'
          },
          editing: {
              mode: 'row',
              allowUpdating: false,
              allowDeleting: false,
              allowAdding: false
          },
          selection: {
              mode: 'single'
          },
          'export': {
              enabled: true,
              fileName: 'News',
              allowExportSelectedData: true
          },
          searchPanel: {
              visible: true,
              width: 240,
              placeholder: 'Search...'
          },
          columns: [{
              caption: 'Author',
              dataField: 'author'
          }, {
              caption: 'Description',
              dataField: 'description'
          }, {
              caption: 'Title',
              dataField: 'title'
          }, {
              caption: 'Published At',
              dataField: 'publishedAt'
          }, {
              caption: 'URl',
              dataField: 'url'
          }]
      };

      });
    }
  ]);
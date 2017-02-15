'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($scope) {

$scope.allArticles;
$scope.yes = 'yaaassss';

fetch('https://newsapi.org/v1/articles?source=techcrunch&apiKey=79b5eacee55a4e8d89ed43a73add9edf')
    .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          response.json().then(function (data) {
            for (var article in data.articles){
              console.log(data.articles[article]);
              $scope.allArticles.push(article);
            //  console.log('ARRAY ! : ' + $scope.allArticles);
            }

          });
        }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });

}]);
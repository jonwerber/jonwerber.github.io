var app = angular.module('newsTroff', []);

app.filter('replace', function(){
    return function(url){
        var domain;
        if (url.indexOf("://") > -1) {
            domain = url.split('/')[2];
        }
        else {
            domain = url.split('/')[0];
        }
        domain = domain.split(':')[0];
        return domain;
    }

});

app.controller('myCtrl', function ($scope, $http) {

    $scope.yes = 'yaaassss';
    var sources = ['techcrunch', 'hacker-news','mashable', 'the-new-york-times','business-insider-uk', 'cnn', 'cnbc', 'daily-mail', 'the-wall-street-journal', 'bbc-news', 'bloomberg', 'daily-mail',  'national-geographic', 'independent', 'fortune', 'google-news', 'ars-technica', 'engadget', 'polygon', 'recode', 'techradar', 'the-next-web', 'the-verge'];
    $scope.articles = [];

    for (var i = 0; i < sources.length; i++) {
        $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=' + sources[i] + '&sortBy=top&apiKey=79b5eacee55a4e8d89ed43a73add9edf'
        }).then(function successCallback(response) {
            Array.prototype.push.apply($scope.articles, response.data.articles);
            console.log($scope.articles);
            console.log(response.data.articles);

        }, function errorCallback(response) {
            console.log("ERROR + " + response)
        });
    }
});


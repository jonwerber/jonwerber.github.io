var app = angular.module('celebrityNews', []);

//strips extraneous info from url , ie wikipedia.com/jonwerber/ becomes wikipedia.com
app.filter('replace', function () {
    return function (url) {
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

app.controller('mainCtrl', function ($scope, $http) {


    $scope.articles = [];

    $scope.getMtvNews = function() {
        $scope.mtvNews = [];
        getNews('mtv-news', $scope.mtvNews );
    }

    $scope.getMtvNewsUk = function() {
        $scope.mtvNewsUk = [];
        getNews('mtv-news-uk', $scope.mtvNewsUk );
    }


    $scope.getEntertainmentWeekly = function() {
        $scope.entertainmentWeekly = [];
        getNews('entertainment-weekly', $scope.entertainmentWeekly );
    }

    $scope.getDailyMail = function() {
        $scope.dailyMail = [];
        getNews('daily-mail', $scope.dailyMail );
    }

    var getNews = function (source, arrayName) {
        $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=top&apiKey=79b5eacee55a4e8d89ed43a73add9edf'
        }).then(function successCallback(response) {
            Array.prototype.push.apply(arrayName, response.data.articles);
            console.log($scope.articles);

        }, function errorCallback(response) {
            console.log("ERROR + " + response)
        });
    }

});


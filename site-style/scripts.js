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
        getNews('mtv-news', $scope.mtvNews, 'latest' );
    }
// set image as background image (ie. set height based on image proportions so you can add text over the image -->
    $scope.getMtvNewsUk = function() {
        $scope.mtvNewsUk = [];
        getNews('mtv-news-uk', $scope.mtvNewsUk, 'top' );
    }

    $scope.getIgn = function() {
        $scope.ign = [];
        getNews('ign', $scope.ign, 'latest' );
    }

    $scope.getMirror = function() {
        $scope.mirror = [];
        getNews('mirror', $scope.mirror, 'latest' );
    }

    $scope.getHuffPo = function() {
        $scope.huffPo = [];
        getNews('the-huffington-post', $scope.huffPo, 'top' );
    }

    $scope.getReddit = function() {
        $scope.reddit = [];
        getNews('reddit-r-all', $scope.reddit, 'latest' );
    }

    $scope.getEntertainmentWeekly = function() {
        $scope.entertainmentWeekly = [];
        getNews('entertainment-weekly', $scope.entertainmentWeekly, 'top' );
    }

    $scope.getDailyMail = function() {
        $scope.dailyMail = [];
        getNews('daily-mail', $scope.dailyMail, 'latest' );
    }

    var getNews = function (source, arrayName, topOrLatest) {
        $http({
            method: 'GET',
            url: 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=' + topOrLatest +'&apiKey=79b5eacee55a4e8d89ed43a73add9edf'
        }).then(function successCallback(response) {
            Array.prototype.push.apply(arrayName, response.data.articles);
            console.log(source + arrayName + $scope.articles);

        }, function errorCallback(response) {
            console.log("ERROR + " + response)
        });
    }

});


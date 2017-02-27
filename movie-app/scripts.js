var app = angular.module('movieApp', []);

app.directive('youtube', function ($window) {
    return {
        restrict: "E",

        scope: {
            height: "@",
            width: "@",
            videoid: "@"
        },

        template: '<div></div>',

        link: function (scope, element, attrs, $rootScope) {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;

            $window.onYouTubeIframeAPIReady = function () {

                player = new YT.Player(element.children()[0], {
                    playerVars: {
                        autoplay: 1,
                        html5: 1,
                        theme: "light",
                        modesbranding: 0,
                        color: "white",
                        iv_load_policy: 3,
                        showinfo: 1,
                        controls: 1
                    },

                    height: scope.height,
                    width: scope.width,
                    videoId: scope.videoid,

                });
            };

            scope.$watch('height + width', function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                player.setSize(scope.width, scope.height);

            });

            scope.$watch('videoid', function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                player.cueVideoById(scope.videoid);

            });


        }
    };
});


//strips extraneous info from url , ie wikipedia.com/jonwerber/ becomes wikipedia.com
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

app.controller('movieCtrl', function ($scope, $http) {


    $scope.movie = 'Spirited Away';
    $scope.yt = {
        width: '500px',
        height: '281.25px',
        videoid: "ByXuk9QqQkk",
        //videoid is for spirited away
    }

    $scope.title = "JLW";
    $scope.animated = ["Spirited Away", "Tokyo Godfathers", "Paprika", "Akira", "Fantastic Mr. Fox", "Finding Nemo", "Castle in the Sky", "The Lion King"];
    $scope.mindBending = ["Eternal Sunshine of the Spotless Mind", "Clockwork Orange", "Inception", "Fight Club", "Black Swan", "Moon"];
    $scope.comingOfAge = ["Harold and Maude", "Mean Girls", "American Pie", "Stand By Me", "The Breakfast Club", "Almost Famous", "Frances Ha"];
    $scope.classics = ["Casablanca", "A Farewell To Arms", "Do the right thing", "The Graduate", "Bonnie and Clyde", "Pulp Fiction", "Who\'s Afraid of Virginia Woolf", "The Wizard of Oz", "Annie Hall"];
    $scope.randomMovie = function (genre) {
        $scope.item = genre[Math.floor(Math.random() * genre.length)];
        $scope.movie = $scope.item;
        $scope.getMovieInfo();
    };


            if (window.innerWidth > 800) {
     $scope.yt = {
     width: '100%',
     height: Math.round((((window.innerWidth) * .66) / 16) * 9),
     //videoid: "RS0KyTZ3Ie4",
     };
     } else {
     $scope.yt = {
     width: '100%',
     height: Math.round(((window.innerWidth ) / 16) * 9),
     //videoid: "RS0KyTZ3Ie4",
     }
     }
    $scope.searchHistory = [];
    $scope.backToMovie = function (previousFilm) {
        $scope.movie = previousFilm.title;
        $scope.getMovieInfo();
    };

    $scope.getMovieInfo = function () {
        if ($scope.movieObj && $scope.movieObj.title !== '') {
            $scope.searchHistory.unshift($scope.movieObj);
        } else {
            console.log('nah');
        }

        $scope.movieObj = {
            title: '',
            actors: '',
            year: '',
            genre: '',
            plot: '',
            writer: '',
            director: '',
            poster: '',
            imdbAddress: '',
            imdbRating: '',
            tomatoUrl: '',
            tomatoMeter: '',
            tomatoReview: ''
        };
        var formattedMovie = $scope.movie.replace(/ /g, '+');

        $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?t=' + formattedMovie + '&y=&plot=long&tomatoes=true&r=json'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.title = response.data.Title;
            $scope.movieObj.title = response.data.Title;
            $scope.movieObj.actors = response.data.Actors;
            $scope.movieObj.year = response.data.Year;
            $scope.movieObj.genre = response.data.Genre;
            $scope.movieObj.writer = response.data.Writer;
            $scope.movieObj.director = response.data.Director;
            $scope.movieObj.poster = response.data.Poster;
            $scope.movieObj.plot = response.data.Plot;
            $scope.movieObj.imdbAddress = response.data.imdbID;
            $scope.movieObj.imdbRating = response.data.imdbRating;
            $scope.movieObj.tomatoUrl = response.data.tomatoURL;
            $scope.movieObj.tomatoMeter = response.data.tomatoMeter;
            $scope.movieObj.tomatoReview = response.data.tomatoConsensus;
        }, function errorCallback(response) {

            console.log("ERROR + " + response)
           // alert('error');
        });

        $http({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=' + formattedMovie + 'official+trailer' + '&key=AIzaSyAkVZUCQphe9UlFeSxMcnPVrcmf6Z691Qk'
        }).then(function successCallback(response) {
            $scope.yt.videoid = response.data.items["0"].id.videoId;
          //  console.log('youtube;');
        }, function errorCallback(response) {
           // console.log("ERROR + " + response)
        });
    }

});


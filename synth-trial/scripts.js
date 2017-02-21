var app = angular.module('scale-synth', []);

app.controller('mainCtrl', function ($scope, $http) {

    majorSemiTones = [2,2,1,2,2,2];
    minorSemiTones = [2,1,2,2,1,2];
    KEYS = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
    //KEYS_NORMALIZED = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

   function getScale(scaleName, position){
        var tonic = scaleName.replace("m", "");
        var keys = [];
        var minor = false;
        var scaleIndex;
        var intervals = this.majorSemiTones;
        if(scaleName.indexOf("m") > -1){
            minor = true;
            intervals = this.minorSemiTones;
        }
        scaleIndex = KEYS.indexOf(tonic);// starts on the tonic
        for(var i = 0; i < 7; i++){
            keys.push(KEYS[scaleIndex]+position);
            if( scaleIndex + intervals[i] > KEYS.length - 1 ){
                // if scale index = KEYS.length it should be 0
                scaleIndex = scaleIndex + intervals[i] - KEYS.length;
            }else{
                scaleIndex += intervals[i];
            }
        }
        return keys;
    }

    $scope.scale = getScale('C',3);
    console.log(getScale('Am',6));
    console.log(getScale('Bb',2));

    
    window.onload = function() {
//working on mobile?
        document.querySelectorAll('button').forEach(function (button) {

            button.addEventListener("touchstart", function (e) {
                //play the note on mouse down
                synth.triggerAttack(e.target.id)
                console.log(e.target);
                console.log(e.target.id);
            })
            button.addEventListener('touchend', function (e) {
                //release on mouseup
                synth.triggerRelease()
            })

            button.addEventListener('mousedown', function (e) {
                //play the note on mouse down
                synth.triggerAttack(e.target.id)
                console.log(e.target);
                console.log(e.target.id);
            })
            button.addEventListener('mouseup', function (e) {
                //release on mouseup
                synth.triggerRelease()
            })
        });
    };
});



var synth = new Tone.MonoSynth({
    "portamento" : 0.01,
    "oscillator" : {
        "type" : "square"
    },
    "envelope" : {
        "attack" : 0.005,
        "decay" : 0.2,
        "sustain" : 0.4,
        "release" : 1.4,
    },
    "filterEnvelope" : {
        "attack" : 0.005,
        "decay" : 0.1,
        "sustain" : 0.05,
        "release" : 0.8,
        "baseFrequency" : 300,
        "octaves" : 4
    }
}).toMaster();




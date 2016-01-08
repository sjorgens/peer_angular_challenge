/**
 * Created by robbynewman on 1/8/16.
 */

var app  = angular.module('myApp', []);


app.controller('myController', function($scope, $http){

    var randCan = function randomNumber(min, max) {
            return Math.floor(Math.random() * (1 + max - min) + min);
        }
    $scope.demoCan = " ";
    $scope.repubCan= " ";
    $scope.winner = " ";
    $scope.candidates = [$scope.demoCan, $scope.repubCan];
    $scope.dems=[];
    $scope.repubs=[];

    $scope.loadCandidates = function(){
        $http({
            method: 'GET',
            url: '/democrat'
        }).then(function(response){

            $scope.dems = response.data.demCandidates;

        })

        $http({
            method: 'GET',
            url: '/republican'

        }).then(function(response){
            $scope.repubs = response.data.repubCandidates;

        });

        $scope.kickOff = function () {
            $scope.demoCan = $scope.dems[randCan(0,4)].name;
            $scope.repubCan = $scope.repubs[randCan(0,4)].name;
            $scope.candidates = [$scope.repubCan, $scope.demoCan];
            $scope.winner = $scope.candidates[randCan(1,2)-1];
        }

    }

});
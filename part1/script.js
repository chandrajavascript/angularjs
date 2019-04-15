console.log("I am in script file");
var myapp = angular.module("myapp", []);

myapp.factory("greetingService", [function () {
    return {
        sayHello: function (name) {
            return "Hello " + name + " from factory";
        }
    }
}]);

myapp.service("myService", [function () {
    this.sayHai = function (name) {
        return "Hai " + name + " from service";
    }
}]);

myapp.provider("message", [function () {
    var temp = null
    this.msg = function (name) {
        temp = name;
    }
    this.$get = function () {
        return {
            msgFromProvider: temp
        }
    }
}]);

myapp.config((messageProvider) => {
    messageProvider.msg("hello")
});


myapp.filter("fCapital",function(){
    return function(input){
        return (input) ? input.charAt(0).toUpperCase()+input.substr(1).toLowerCase():"";
    }
});



myapp.controller("mycontroller", ['$scope', 'greetingService', 'myService', 'message', function ($scope, greetingService, myService, messagePro) {
    $scope.name = "chandra";
    $scope.fMessage = greetingService.sayHello($scope.name);
    $scope.sMessage = myService.sayHai($scope.name);
    $scope.pMessage = messagePro.msgFromProvider;
}]);
angular.bootstrap(document, ['myapp']);
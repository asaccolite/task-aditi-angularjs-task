var app = angular.module('myapp', [])
console.log("Aditi")
const url = 'https://jsonplaceholder.typicode.com/users'
app.controller('mycontroller', function($scope, $http) {
    $http.get(url).then(function(response) {
         console.log(response)
        $scope.alldata = response.data;
 console.log("Aditi",$scope.alldata[0].name)
    }, function(err) {
        console.log(err)
    })

    $scope.countrywise = function() {
        country = $scope.country
        $http.get(url + `/countries/` + country).then(function(response) {
            console.log(response.data)
            $scope.alldataCountryWise = response.data
        }, function(err) {
            console.log(err)
        })

    }

    $scope.selectEmp=function(x)
    {
        window.localStorage.setItem("selectedUser",JSON.stringify(x));
        window.location.href="./child.html";
        console.log(x);
    }


})
app.controller('UserDetailCOntroller',function($scope){
    $scope.details=JSON.parse(window.localStorage.getItem("selectedUser") );
    console.log($scope.details);
})
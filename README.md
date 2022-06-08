# task-aditi-angularjs-task
Turvo Task 1 

WHAT DOES IT DO ?
this project user-details displays the employee names on Page-1 and when clicked on any particuLar employee name it takes you to page -2
that has particular slected employee -details like id, name, username, address , phone no., company name .

This is a mock data that is fetching from a fake rest API : https://jsonplaceholder.typicode.com/users

HOW DOES IT WORK ?
can be run through the html file (index.html) on vscode 
we have used the cdn links to connect the angularjs version in scirpt tag  , in ng-app have defined the controller and a list that works as a (for loop) to fetch the data 
from the JSon file . and have called a function called selectEmp , that is defined in the scirpt.js file and it is resposible for when we click on particular 
emp it takes it to the child. html file which is the 2nd page of the project 
and app.controller('UserDetailCOntroller',function($scope){ is a controller that is fetching data for the 2nd page . 
in child.html we have data binding from the index.html in a table format so but just for selectedEmp . 

FUNCTIONALITY USED :
1. AngularJS -Modules 
//script.js file 
var app = angular.module('myapp', [])

In this angular.module method creates an application module , where the parameter is module app same as ng-app directuve , the 2nd parameter is a dependcy module .

2. AngularJs-Controlller 
 //script .js 
app.controller('mycontroller', function($scope, $http)
this controller maintains the apllication data 
//index.html
<body ng-app='myapp' ng-controller='mycontroller'>
3. directives 
<body ng-app='myapp' ng-controller='mycontroller'>
ng-controller direcitve is used to specify a controller  and when we attach $scope to it then it can add and update data too . 

4. AngularJs-scopes :
app.controller('mycontroller', function($scope, $http) {
    $http.get(url).then(function(response) {
         console.log(response)
        $scope.alldata = response.data;
 console.log("Aditi",$scope.alldata[0].name)
console.log($scope.details);

5. Data binding - //child.html 
<th scope="row">
                      {{details.id}}
                    </th>
                    <td>
                        {{details.name}}
                    </td>
                    <td>
                        {{details.username}}
console.log($scope.details);
6. Services - $http.get(url).then(function(response)
7 . Expression - class="clickable">{{x.name}} Using strings 

8 Event - Events directives - ng-click , ng-repeat , 

'use strict';
app
.controller("mentorController", function($scope) {
    $scope.mentors=[];
    
    $scope.addMentor = function()
    {
          
    $scope.mentor={'title':$scope.mentoer.title,
                  'firstname':$scope.mentoer.firstname,
                  'lastname':$scope.mentoer.lastname,
                  'email':$scope.mentoer.email,
                  'phone':$scope.mentoer.phone,
                  'comapny':$scope.mentoer.company,
                  'department':$scope.mentoer.department};
        $scope.mentors.push($scope.mentor);
        console.log($scope.mentor)
    
        
    };
    
    
});
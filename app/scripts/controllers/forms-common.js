'use strict';


.controller('EmployeeController', function($scope) {
  

    $scope.addEmployee = function () {
        $scope.employees.push({
            firstName: $scope.employeeFirstName,
            lastName: $scope.employeeLastName,
            compnay:$scope.employeeCompany,
            department: $scope.employeeDepartment
        });
        
          $scope.employees = [{
        firstName: 'John',
        lastName: 'Doe',
        compnay: 'SkomoTechnologies',
        department: 'System Developer',
        
    }];

        // Reset items for the next add
        $scope.employeeFirstName = '';
        $scope.employeeLastName = '';
        $scope.employeeCompany= '';
        $scope.employeeDepartment = '';
    };
    
    $scope.removeEmployee = function(index) {
      $scope.employees.splice(index, 1);
    };
});
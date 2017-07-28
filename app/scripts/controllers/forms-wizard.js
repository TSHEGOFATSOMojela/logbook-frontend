'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:FormsWizardCtrl
 * @description
 * # FormsWizardCtrl
 * Controller of the minovateApp
 */
app
  .controller('FormWizardCtrl', function ($scope) {
    $scope.page = {
      title: 'Adding Company'
    };
    $scope.company = {};
    
    $scope.addCompany= function($scope)
    {
        
       
        $scope.companies=[];
        
        $scope.companies.push($scope.company);
         $scope.company = {};
    }
  });

    
            
            
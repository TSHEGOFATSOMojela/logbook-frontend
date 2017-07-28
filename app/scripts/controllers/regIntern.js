'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:FormsRegInternCtrl
 * @description
 * # FormsValidateCtrl
 * Controller of the minovateApp
 */
app
  .controller('FormsRegInternCtrl', function ($scope) {
    $scope.page = {
      title: 'Validation Elements',
      subtitle: 'Register intern'
    };

    // function to submit the form after all validation has occurred
		$scope.submitForm = function(isValid) {
      console.log('validate form');

			// check to make sure the form is completely valid
			if (isValid) {
				console.log('Intern registererd successfully');
			} else {
        console.log('form is invalid');
      }

		};

    $scope.notBlackListed = function(value) {
      var blacklist = ['bad@domain.com','verybad@domain.com'];
      return blacklist.indexOf(value) === -1;
    };
  });

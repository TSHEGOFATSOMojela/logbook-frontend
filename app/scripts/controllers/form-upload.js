'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app

.controller('FormUploadCtrl', function($scope, DTOptionsBuilder, DTColumnDefBuilder){
    

    
    $scope.projects = [{
      title: 'Strongloop',
      priority: {
        value: 1,
        description: 'Please study this for exam',
        duration:'8 days',
        activity:'create custom user collection',
        comments:'completed a custom user collection',
        date: new Date()
      },
      status: 100,
      chart: {
        data: [1,3,2,3,5,6,8,5,9,8],
        color: '#cd97eb'
      }
    }
     ,{
      title: 'MongoDB',
      priority: {
        value: 3,
        description: 'back-end must be done using mongodb',
        duration:'5 days',
        activity:'create custom user collection',
        comments:'completed a custom user collection',
        date: new Date()
      },
      status: 100,
      chart: {
        data: [2,5,3,4,6,5,1,8,9,10],
        color: '#a2d200'
      }
    },{
      title: 'Linex',
      priority: {
        value: 1,
        description: 'we are about to hack',
        duration:'3 days',
        activity:'create custom user collection',
        comments:'completed a custom user collection',
        date: new Date()
      },
      status: 100,
      chart: {
        data: [5,6,8,2,1,6,8,4,3,5],
        color: '#ffc100'
      }
    }];
    
    
    
    //leave
     $scope.leaves = [{
      leave: 'Annual Leave',
      priority: {
        value: 1,
        numOfDays: '1',
        LeaveComments:'family problems',
        documents:'cr',
        leaveDate : new Date()
      },
    }
     ,{
        leave: 'Sick Leave',
      priority: {
        value: 3,
        numOfDays: '3',
        LeaveComments:'flu',
        documents:'cer',
        leaveDate : new Date()
      },
    },{
        leave: 'Study Leave',
      priority: {
        value: 1,
        numOfDays: '4',
        LeaveComments:'writting c# on tuesday',
        documents:'https://app/images/sick.pdf',
        leaveDate : new Date()
      },
    }];

    $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4).notSortable()
    ];
  });




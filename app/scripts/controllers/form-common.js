'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app

.controller('FormsCommonCtrl', function($scope, DTOptionsBuilder, DTColumnDefBuilder){
    
    $scope.objective =[{objectname:"Strongloop",desc:"Please study this for exam",duration:"8 days"},
                       {objectname:"MongoDB",desc:"back-end must be done using mongodb",duration:"5 days"},
                       {objectname:"Linex",desc:"we are about to hack",duration:"3 days"}];
    
    $scope.projects = [{
      title: 'Strongloop',
      priority: {
        value: 1,
        title: 'Please study this for exam',
        duration:'8 days'  
      },
      status: 42,
      chart: {
        data: [1,3,2,3,5,6,8,5,9,8],
        color: '#cd97eb'
      }
    },{
      title: 'MongoDB',
      priority: {
        value: 3,
        title: 'back-end must be done using mongodb',
        duration:'5 days'  
      },
      status: 89,
      chart: {
        data: [2,5,3,4,6,5,1,8,9,10],
        color: '#a2d200'
      }
    },{
      title: 'Linex',
      priority: {
        value: 1,
        title: 'we are about to hack',
        duration:'3 days'  
      },
      status: 23,
      chart: {
        data: [5,6,8,2,1,6,8,4,3,5],
        color: '#ffc100'
      }
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


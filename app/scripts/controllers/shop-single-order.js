'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app
    .controller("SingleOrderCtrl", function($scope) {
  $scope.objectives=[
        [ 
            1,
           'loopback',
          'learn loopbook will use it for our backend',
          '3/1/2017',
            
        ],
        [
		    2,
           'Mongo',
           'tshegofatso must do the database',
          '3/1/2017',
           
        ],
        [
		3,
            'logbook system',
            'create a login page',
            '3/1/2017',
          
        ],
        [
		4,
             'Mongo',
           'tshegofatso must do the database',
          '3/1/2017',
          
        ],
        [
          5,
		   'loopback',
          'learn loopbook will use it for our backend',
          '3/1/2017',
          
        ]
    ]


$scope.dataTableOpt = {
   //custom datatable options
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
    
    
  $scope.selected=[];
  $scope.getTemplates=function(objective){
    //some time bellow if will throw expection like $scope.selected[0] is undefined,because on the view you stating on 1 but array always starts on 0
   if(objective[0]===$scope.selected[0]){
     return "edit.html";
   }else{
    return "view.html";
   }
  };
    
  
  $scope.edit=function(u){    
    $scope.selected=angular.copy(u);
  };
  
  $scope.save=function(){
    //custom save function here 
    //Onces custom save function got success then empty it
    $.each($scope.objectives,(k,v)=>{
      if(v[0]===$scope.selected[0]){
        $scope.objectives[k]=$scope.selected;
      }
    });
     $scope.selected=[];
  };
  $scope.clear=function(){
    $scope.selected=[];
  };
    
  $scope.remove = function(n){
      //NB this will change to "EASY way " once connected to DB 
      
     if (confirm("are you sure you want to delete") == true) {
      $scope.objectives.splice(n,1);
  }
	};

    //add into a table
    $scope.addNewObjective=function(newObjective)
     {
              
       $scope.objectives.push(JSON.stringify(newObjective));

     };
    
    //progress bar
    
  
    
});

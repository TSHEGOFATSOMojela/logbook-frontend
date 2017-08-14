'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app
    .controller("SingleOrderCtrl", function($scope) {
  $scope.objectives=[
       {
            "id": "1",
            "title": "loopback",
            "description": "learn loopbook will use it for our backend",
            "duration": new Date()
        }
      
      
    ,{
		    "id": "2",
            "title": "Mongodb",
            "description": "connect frontend with database use mongodb as our datasource ",
            "duration": new Date()
       },
       {
		    "id": "3",
            "title": "postman",
            "description": "use postman to test http requests",
            "duration": new Date()
       },
         {
		    "id": "4",
            "title": "robomongo",
            "description": "download and use robomongo to edit the collection in database",
            "duration": new Date()
       },
        { 
            "id": "5",
            "title": "email",
            "description": "register page must send an email to mentor with a verification link to verify an intern",
            "duration":new Date()
         },

    ]
    
  
  $scope.edit=function(u){

      $scope.editMode=true;
     

  };
  

      $scope.clear=function(){
      $scope.editMode=false;

  };
        $scope.save=function(){
    if (confirm("are you sure you want to save the changes?") == true) {
     
  }
       
    };
  $scope.remove = function(n){
      //NB this will change to "EASY way " once connected to DB
      if (confirm("are you sure you want to delete?") == true) {
      $scope.objectives.splice(n,1);
  }
     
	};

    //add into a table
    $scope.addNewobjective=function(newobjective)
     {
      

      var i = $scope.objectives.length;   
       $scope.objectives[i]=newobjective;

     };
    
    
  
    
});

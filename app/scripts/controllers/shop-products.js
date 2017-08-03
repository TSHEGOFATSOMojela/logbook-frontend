'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller("ProductsCtrl", function($scope) {
  $scope.Interns=[
        [ 
            1,
            'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
		    2,
            'thulani',
            'malatjie',
            'malatjie@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726873635
        ],
        [
		3,
            'naftalie',
            'morwa',
            'Nmorwa@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27265343434
        ],
        [
		4,
                  'naftalie',
            'morwa',
            'Nmorwa@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27265343434
        ],
        [
          5,
		   'pedi',
            'malatjie',
            'malatjie@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726873635
        ],

    ]


$scope.dataTableOpt = {
   //custom datatable options
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
    
    
  $scope.selected=[];
  $scope.getTemplates=function(Intern){
    //some time bellow if will throw expection like $scope.selected[0] is undefined,because on the view you stating on 1 but array always starts on 0
   if(Intern[0]===$scope.selected[0]){
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
    $.each($scope.Interns,(k,v)=>{
      if(v[0]===$scope.selected[0]){
        $scope.Interns[k]=$scope.selected;
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
      $scope.Interns.splice(n,1);
  }
     
	};

    //add into a table
    $scope.addNewIntern=function(newIntern)
     {
      
         var i = $scope.Interns.length +1;
         $scope.Interns[i]= Object.entries(newIntern).map((value)=>(value));
    /*  var i = $scope.Interns.length +1;   
       $scope.Interns[i]=newIntern;*/

     };
    
    
  
    
});

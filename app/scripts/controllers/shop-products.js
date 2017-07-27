//Angularjs row editables and jquery.datatable  with ui.bootstrap and ui.utils
//Onces edit button is pressed table row order will change editable row will come in current pages top so don't get confuse

//var app=angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller("ProductsCtrl", function($scope) {
  $scope.data=[
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
        [6,
		  'lol',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
		7,
              'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
		8,
             'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
          9,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            10,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            11,  'fatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            12,  'tshego',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            13,  'tsheko',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            14,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            15,"Tatyana Fitzpatrick",
            "Regional Director",
            "London",
            "1965",
            "2010\/03\/17",
            "$385,750"
        ],
        [
            16,"Michael Silva",
            "Marketing Designer",
            "London",
            "1581",
            "2012\/11\/27",
            "$198,500"
        ],
        [
            17,"Paul Byrd",
            "Chief Financial Officer (CFO)",
            "New York",
            "3059",
            "2010\/06\/09",
            "$725,000"
        ],
        [
            18,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            19,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
20,             'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
          21,   'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            22,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            23,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            24,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
           25,   'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            26,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            27,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            28,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            29,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            30,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            31,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            32,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            33,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            34,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            35,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            36,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            37,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            38,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            39,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            40,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            41,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            42,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            43,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            44,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            45,"Thor Walton",
            "Developer",
            "New York",
            "8327",
            "2013\/08\/11",
            "$98,540"
        ],
        [
            46,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            47,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            48,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            49,"Zorita Serrano",
            "Software Engineer",
            "San Francisco",
            "4389",
            "2012\/06\/01",
            "$115,000"
        ],
        [
            50,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            51,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            52,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            53,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            54,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            55,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            56,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ],
        [
            57,  'tshegofatso',
            'mojela',
            'mojelatshego@skhomotech.co.za',
            'male',
            'skhomo technologies',
            'Intern',
            27726885360
        ]
    ]


$scope.dataTableOpt = {
   //custom datatable options
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
    
    
  $scope.selected=[];
  $scope.getTemplates=function(n){
    //some time bellow if will throw expection like $scope.selected[0] is undefined,because on the view you stating on 1 but array always starts on 0
   if(n[0]===$scope.selected[0]){
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
    $.each($scope.data,(k,v)=>{
      if(v[0]===$scope.selected[0]){
        $scope.data[k]=$scope.selected;
      }
    });
     $scope.selected=[];
  };
  $scope.clear=function(){
    $scope.selected=[];
  };
    
  $scope.remove = function(u){				
		var index = 1;		
		var comArr = eval( $scope.data );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].u === u ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.data.splice( index, 1 );	
      
	};
    

    
    
    
    
});

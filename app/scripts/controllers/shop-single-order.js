
app.controller("SingleOrderCtrl", function($scope) {
$scope.InternObjectives = [
                  { 'title':'loopback',
                    	'description': 'learn loopbook will use it for our backend',
                    	Date: new Date('3/1/2017'),
                       },
    
    
                    	{ 'title':'Mongo',
                    	'description': 'tshegofatso must do the database',
                    	Date: new Date('3/1/2017'),
                       },
    
      
	                    { 'title':'logbook system',
                    	'description': 'create a login page',
                    	Date: new Date('3/1/2017'),
                       },
    
                    ];
    //add objectives in a row
$scope.addRow = function(){		
	$scope.InternObjectives.push({ 'title':$scope.title, 'description': $scope.description, 'Date':$scope.Date});
	$scope.title='';
    $scope.description='';
	$scope.Date='';
	
   
};
    //remove objectives bt title
$scope.remove = function(title){				
		var index = -1;		
		var comArr = eval( $scope.InternObjectives);
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].title === title) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.InternObjectives.splice( index, 1 );		
	};
    
   
    
    
    
    
});



		
		
		
		
		
   
		
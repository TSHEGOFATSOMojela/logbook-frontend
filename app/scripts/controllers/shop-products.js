
app.controller("ProductsCtrl", function($scope) {
$scope.Interns = [
                    { 'name':'tshegofatso',
                    	'surname': 'mojela',
                    	'email': 'mojelatshego@skhomotech.co.za',
                        'gender':'male',
                    	'company': 'skhomo technologies',
                    	'position': 'Intern',
                        'contacts': 27726885360
                    },
    
    
                    	{ 'name':'thulani',
                    	'surname': 'malatjie',
                    	'email': 'malatjie@skhomotech.co.za',
                        'gender':'male',
                    	'company': 'skhomo technologies',
                    	'position': 'Intern',
                        'contacts': 27726873635},
    
      
	                    	{ 'name':'naftalie',
                    	       'surname': 'morwa',
                    	       'email': 'Nmorwa@skhomotech.co.za',
                               'gender':'male',
                    	         'company': 'skhomo technologies',
                    	       'position': 'Intern',
                              'contacts': 27265343434},
    
    
    
		                    	{ 'name':'lethabo',
                    	'surname': 'pedi',
                    	'email': 'pedi@skhomotech.co.za',
                        'gender':'female',
                    	'company': 'skhomo technologies',
                    	'position': 'Intern',
                        'contacts': 27726252434},
    
    
			                    	{ 'name':'Mmatshepo',
                    	'surname': 'matjetja',
                    	'email': 'majetja@gskhomotech.co.za',
                        'gender':'female',
                    	'company': 'skhomo technologies',
                    	'position': 'Intern',
                        'contacts': 277253434343},
                    ];
$scope.addRow = function(){		
	$scope.Interns.push({ 'name':$scope.name, 'surname': $scope.surname, 'email':$scope.email, 'gender':$scope.gender, 'company':$scope.company, 'position':$scope.position, 'contacts':$scope.contacts});
	$scope.name='';
    $scope.surname='';
	$scope.email='';
	$scope.gender='';
    $scope.company='';
    $scope.position='';
    $scope.contacts='';
   
};
    
$scope.remove = function(name){				
		var index = -1;		
		var comArr = eval( $scope.Interns );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.Interns.splice( index, 1 );		
	};
    
   
    
    
    
    
//    <!-- Edit and update row function -->
//			$scope.edit = function(){
//				var index = getSelectedIndex($scope.name);
//				$scope.Interns[index].surname = $scope.surname;
//				$scope.Interns[index].email = $scope.email;
//				$scope.Interns[index].gender = $scope.gender;
//				$scope.Interns[index].company = $scope.company;
//        	    $scope.Interns[index].position = $scope.position;
//        	    $scope.Interns[index].contacts = $scope.contacts;
//        	  
//			};
//			
//			<!-- Select the row of data and update the form function -->
//			$scope.selectEdit = function(name){
//				var index = getSelectedIndex(name);
//				var product = $scope.listProducts[index];
//				$scope.name = product.name;
//				$scope.surname = product.surname;
//				$scope.email = product.email;
//				$scope.gender = product.gender;
//				$scope.company = product.company;
//                $scope.position = product.position;
//                $scope.contacts = product.contacts;
//			};
//			
//    
//    <!-- Function finds unique product data based on its id -->
//			function getSelectedIndex(name){
//				for(var i=0; i<$scope.Interns.length; i++)
//					if($scope.Interns[i].name==name)
//						return i;
//					return -1;	
//			};
//    
//    
    
    
    
    
});



		
		
		
		
		
   
		
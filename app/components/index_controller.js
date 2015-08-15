angular.module('enos.controllers')
	.controller('IndexController', ['$scope', '$window', function ($scope, $window) {
		
		$scope.name = "balaraju"
              
		$scope.selectedGroup = "1";
		$scope.groups = [{id: '1', label: "First"}, {id: '2', label: "second"}, {id:'3', label: "Third"}];
		
		$scope.selectedUsage = "(1,2,3,4,5,6)";
		$scope.usages = [{id: '(1,2,3,4,5,6)', label: "All"},{id: 1, label: "HVAC"}, 
		{id: 2, label: "Lighting"}, {id: 3, label: "Refrigeration"}, 
		{id: 4, label: "Always On"}, {id: 5, label: "Others"}];

		
		$scope.groupSelect = function(){
			$window.alert($scope.selectedGroup);
		};

		$scope.usageSelect = function(){
			$window.alert($scope.selectedUsage);
		};

		//$scope.search();
		
		//Gauge Chart 
		var chart1 = {};
	    chart1.type = "Gauge";
	    //chart1.cssStyle = "height:200px; width:300px;";
	    chart1.data = [ ['Label', 'Value'],
          ['Usage Now', 80],
          ['Solr Power', 55],
          ['Utility', 68]];
	    chart1.options = {
	    	 "width": 1000, 
	    	 "height": 200,
         "redFrom": 90,
         "redTo": 100,
         "yellowFrom":75, 
         "yellowTo": 90,
         "minorTicks": 5
	       
	    };

	    chart1.formatters = {};

	    $scope.gauage = chart1;


	   // Pie Chart 

	   var pie_chart = {};

    }]);


 
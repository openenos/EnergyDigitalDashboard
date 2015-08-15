angular.module('enos.controllers')
	.controller('IndexController', ['$scope', function ($scope) {
		$scope.name = "balaraju"
              
		var chart1 = {};
	    chart1.type = "Gauge";
	    chart1.cssStyle = "height:200px; width:300px;";
	    chart1.data = [ ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]];
	    chart1.options = {
	    	 "width": 400, 
	    	 "height": 120,
          "redFrom": 90, "redTo": 100,
          "yellowFrom":75, "yellowTo": 90,
         "minorTicks": 5
	       
	    };

	    chart1.formatters = {};

	    $scope.chart2 = chart1;
    }]);


 
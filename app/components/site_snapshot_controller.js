angular.module('enos.controllers')
	.controller('SiteSnapshotController', ['$scope', function ($scope) {
	
	var demand_gauge_chart = {};
	var max_today_gauge_chart = {};
	var so_far_today_gauge_chart = {};
	    demand_gauge_chart.type = "Gauge";
	    //chart1.cssStyle = "height:200px; width:300px;";
	    demand_gauge_chart.data = [ ['Label', 'Value'],
          ['Demand Now', 80]];
	    demand_gauge_chart.options = {
	    	 "width": 1000, 
	    	 "height": 200,
         "redFrom": 90,
         "redTo": 100,
         "yellowFrom":75, 
         "yellowTo": 90,
         "minorTicks": 5	       
	    };
	    demand_gauge_chart.formatters = {};
	    $scope.demand_gauge_chart = demand_gauge_chart;
	    
	    max_today_gauge_chart.type = "Gauge";
	    //chart1.cssStyle = "height:200px; width:300px;";
	    max_today_gauge_chart.data = [ ['Label', 'Value'],
          ['Max Today', 80]];
	    max_today_gauge_chart.options = {
	    	 "width": 1000, 
	    	 "height": 200,
         "redFrom": 90,
         "redTo": 100,
         "yellowFrom":75, 
         "yellowTo": 90,
         "minorTicks": 5	       
	    };
	    max_today_gauge_chart.formatters = {};
	    $scope.max_today_gauge_chart = max_today_gauge_chart;
	    
	    
	    so_far_today_gauge_chart.type = "Gauge";
	    //chart1.cssStyle = "height:200px; width:300px;";
	    so_far_today_gauge_chart.data = [ ['Label', 'Value'],
          ['So Far Today', 80]];
	    so_far_today_gauge_chart.options = {
	    	 "width": 1000, 
	    	 "height": 200,
         "redFrom": 90,
         "redTo": 100,
         "yellowFrom":75, 
         "yellowTo": 90,
         "minorTicks": 5	       
	    };
	    so_far_today_gauge_chart.formatters = {};
	    $scope.soFarTodayGaugeChart = so_far_today_gauge_chart;
	    
	    
	    
	     var pie_chart = {};
	     pie_chart.type = "PieChart";
    pie_chart.data = [
       ['Component', 'cost'],
       ['Software', 50000],
       ['Hardware', 80000]
      ];
    pie_chart.data.push(['Services',20000]);
    pie_chart.options = {
        displayExactValues: true,
        width: 700,
        height: 400,
        chartArea: {left:10,top:10,bottom:0,height:"100%"}
    };

    pie_chart.formatters = {
      number : [{
        columnNum: 1,
        pattern: "$ #,##0.00"
      }]
    };

    $scope.pie_chart = pie_chart;
    
    
    
  $scope.chartObject = {
  "type": "LineChart",
  "displayed": true,
  "data": {},
        
  "options": {},
  "formatters": {}
}
    
    
    
    
    
    
    
	}]);

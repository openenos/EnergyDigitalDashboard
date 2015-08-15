angular.module('enos').directive('footerInfo', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'app/shared/footer.html'
    };
});

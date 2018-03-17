angular.module("trailApp").config(["$routeProvider", function($routeProvider) {
  // $routeProvider.when('/', {
  //   template: '<roster students="$resolve.students" />',
  //   resolve: {
  //     students: ["TrailService", function(TrailService) {
  //       return TrailService.fetchTrails();
  //     }]
  //   },
  // });

  $routeProvider.when('/', {
    template: '<trails />',
  });

  $routeProvider.when('/trail-view', {
    template: '<trail-view />',
  });

}]);
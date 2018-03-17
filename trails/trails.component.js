angular.module("trailApp").component("trails", {
	templateUrl: 'trails/trails.html',
	controller: ['TrailService', function (TrailService) {
		TrailService.fetchTrails().then(
			trails => this.trails = trails
		);
		console.log("Hear This!");
	}]
});




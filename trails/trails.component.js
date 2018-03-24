angular.module("trailApp").component("trails", {
	templateUrl: 'trails/trails.html',

	controller: ['TrailService', function(TrailService) {
		TrailService.fetchTrails().then(
			trails => this.trails = trails
		);


		this.submit = function() {
			console.log(this.location);
			TrailService.fetchCoordinates(this.location).then(
				coordinates => {
					this.coordinates = coordinates;
					console.log(this.coordinates);
					TrailService.locationName = this.coordinates.results[0].formatted_address;
					TrailService.latitude = this.coordinates.results[0].geometry.location.lat;
					TrailService.longitude = this.coordinates.results[0].geometry.location.lng;
					TrailService.fetchTrails().then(
						trails => this.trails = trails
					);
				}
			);
		}
	}]

});




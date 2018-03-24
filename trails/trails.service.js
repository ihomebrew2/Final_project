angular.module("trailApp").service("TrailService", ['$http', function ($http) {
	this.lattitude = 42.96;
	this.longitude = -85.66;
	this.radius = 25;


	this.fetchTrails = function () {
		return $http.get('https://trailapi-trailapi.p.mashape.com/', {
			params: {
				lat: this.lattitude,
				lon: this.longitude,
				limit: 50,
				radius: this.radius
			},
			headers: { 'X-Mashape-Key': 'dVYNFyBiYUmshR4Da1wHTOQTXsxcp1b5we0jsnYtmQR6XqqfID' }
		}).then(
			response => {
				console.log("service-radius", this.radius)
				console.log(response.data.places);
				return response.data.places;
			}
		)
	}

	this.fetchCoordinates = function (location) {
		var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyBdXpaDAS6IipVjkJM1ubxrhDnZpe96xpM";
		return $http.get(url)
			.then(response => response.data);
	}

}]);
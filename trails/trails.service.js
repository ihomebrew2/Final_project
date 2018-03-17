angular.module("trailApp").service("TrailService", ['$http', function ($http) {

	this.fetchTrails = function () {
		return $http.get('https://trailapi-trailapi.p.mashape.com/', {
			params: {
				lat: 42.96,
				lon: -85.66,
				limit: 50,
				radius: 10
			},
			headers: { 'X-Mashape-Key': 'dVYNFyBiYUmshR4Da1wHTOQTXsxcp1b5we0jsnYtmQR6XqqfID' }
		}).then(
			response => {
				console.log(response.data.places[0]);

				return response.data.places;
			}
		)
	}
}]);
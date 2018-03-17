angular.module("trailApp").service("TrailService", ['$http', function ($http) {

	this.fetchTrails = function () {
		return $http.get('https://trailapi-trailapi.p.mashape.com/', {
			params: {
				lat: 42.96,
				lon: -85.66,
				limit: 50,
				radius: 50
			},
			headers: { 'X-Mashape-Key': 'dVYNFyBiYUmshR4Da1wHTOQTXsxcp1b5we0jsnYtmQR6XqqfID' }
		}).then(
			response => {
				console.log(response.data);
				return response.data.places;
			}
		)
	}




}]);
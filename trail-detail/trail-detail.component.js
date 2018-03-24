angular.module("trailApp").component("trailDetail", {
	templateUrl: "trail-detail/trail-detail.html",
	bindings: {
		thistrail: "<"
	},

	controller: function () {
		this.thumbnail = function () {
			var activityWithThumbnail = this.thistrail.activities.find(function (activity) {
				return activity.thumbnail;
			});
			if (!activityWithThumbnail) {
				return;
			}
			return activityWithThumbnail.thumbnail;
		}
	}

});
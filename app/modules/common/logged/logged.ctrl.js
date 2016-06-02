define([
	'../../../app',
], function(controllers) {

	controllers.controller('LoggedController', LoggedController);

	LoggedController.$inject = ['toastr', '$modal', '$scope'];

	function LoggedController(toastr, $modal, $scope) {
		var vm = this;

		vm.modal = {
			"title": "Title",
			"content": "Hello Modal<br />This is a multiline message!"
		};
		// vm.open = open;

		// var modal = $modal({
		// 	scope: $scope,
		// 	templateUrl: 'modules/common/logged/modal.tpl.html',
		// 	show: false
		// });
		//
		// function open() {
		// 	modal.$promise.then(modal.show);
		// }

	}

});
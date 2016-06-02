define([
	'../../../app'
], function(controllers) {

	controllers.controller('IndexController', IndexController);

	IndexController.$inject = ['toastr'];

	function IndexController(toastr) {
		var vm = this;

		vm.name = '首页index'
	}

});